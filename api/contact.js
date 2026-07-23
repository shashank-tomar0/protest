// POST /api/contact — handles contact, volunteer, and newsletter form submissions
// Sends email via Resend if configured, otherwise logs to console (dev fallback)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, city, message, subject, type } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const formType = type || 'contact'
    const subjectLine = subject || {
      contact: 'New Contact Message — StandWithSonam',
      volunteer: 'New Volunteer Sign-up — StandWithSonam',
      newsletter: 'New Newsletter Sign-up — StandWithSonam',
    }[formType] || 'New Form Submission — StandWithSonam'

    const emailHtml = `
      <h2>${subjectLine}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">Name</td><td style="padding:8px;border:1px solid #ddd">${name || '—'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        ${phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">Phone</td><td style="padding:1px;border:1px solid #ddd">${phone}</td></tr>` : ''}
        ${city ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">City</td><td style="padding:8px;border:1px solid #ddd">${city}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>` : ''}
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">Type</td><td style="padding:8px;border:1px solid #ddd">${formType}</td></tr>
      </table>
    `

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hello@standwithsonam.org'

    if (RESEND_API_KEY) {
      // Send email via Resend
      // Uses onboarding@resend.dev until you verify a custom domain in Resend dashboard
      const fromAddress = process.env.RESEND_DOMAIN
        ? `Stand With Sonam <forms@${process.env.RESEND_DOMAIN}>`
        : 'Stand With Sonam <onboarding@resend.dev>'
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [CONTACT_EMAIL],
          replyTo: email,
          subject: subjectLine,
          html: emailHtml,
        }),
      })

      if (!response.ok) {
        const err = await response.text()
        console.error('Resend error:', err)
        return res.status(500).json({ error: 'Failed to send email', detail: err })
      }
    } else {
      // Dev fallback — just log
      console.log('📬 Form submission (no RESEND_API_KEY configured):', { name, email, phone, city, message, formType })
    }

    return res.status(200).json({ ok: true, message: 'Thank you! We\'ll be in touch.' })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
