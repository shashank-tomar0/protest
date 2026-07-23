// POST /api/create-order — creates a Razorpay order
// Requires RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET env vars

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amount } = req.body

    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Amount must be at least ₹1 (100 paise)' })
    }

    const KEY_ID = process.env.RAZORPAY_KEY_ID
    const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

    if (!KEY_ID || !KEY_SECRET) {
      return res.status(503).json({
        error: 'Payments not configured',
        message: 'Donations are being set up. Reach out via Contact page in the meantime.',
      })
    }

    const auth = Buffer.from(`${KEY_ID}:${KEY_SECRET}`).toString('base64')

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount),
        currency: 'INR',
        receipt: `donation_${Date.now()}`,
        payment_capture: 1,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Razorpay error:', data)
      return res.status(500).json({ error: 'Failed to create order' })
    }

    return res.status(200).json({
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
    })
  } catch (err) {
    console.error('Create-order error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
