import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Donate() {
  const [amount, setAmount] = useState(2000)
  const [custom, setCustom] = useState('')
  const [status, setStatus] = useState('idle') // idle | processing | success | error
  const [message, setMessage] = useState('')

  function loadRazorpay() {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true)
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  async function handleDonate() {
    if (amount < 100) {
      setStatus('error')
      setMessage('Minimum donation is ₹100')
      return
    }

    setStatus('processing')
    setMessage('')

    try {
      const loaded = await loadRazorpay()
      if (!loaded) {
        setStatus('error')
        setMessage('Failed to load payment gateway. Please try again.')
        return
      }

      // Create Razorpay order via our API
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount * 100 }), // paise
      })
      const orderData = await orderRes.json()

      if (!orderRes.ok) {
        // If Razorpay isn't configured, show UPI info
        if (orderRes.status === 503) {
          setStatus('idle')
          setMessage('Online payments are being set up. Please use the Contact page or UPI: standwithsonam@upi')
          return
        }
        setStatus('error')
        setMessage(orderData.error || 'Failed to create order')
        return
      }

      // Open Razorpay checkout
      const options = {
        key: window.RAZORPAY_KEY_ID || orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'Stand With Sonam Wangchuk',
        description: `Donation — ₹${amount.toLocaleString()}`,
        order_id: orderData.orderId,
        handler: async function (response) {
          // Verify payment server-side
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
          const verifyData = await verifyRes.json()

          if (verifyData.verified) {
            setStatus('success')
            setMessage('Thank you! Your donation of ₹' + amount.toLocaleString() + ' has been received. You will receive a receipt by email.')
          } else {
            setStatus('error')
            setMessage('Payment verification failed. Please contact us with your payment ID.')
          }
        },
        modal: {
          ondismiss: function () {
            setStatus('idle')
            setMessage('Payment cancelled. You can try again anytime.')
          },
        },
        prefill: {
          contact: '',
          email: '',
        },
        theme: {
          color: '#C1121F',
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error('Donation error:', err)
      setStatus('error')
      setMessage('Something went wrong. Please try again or use the Contact page.')
    }
  }

  return (
    <main id="top">
      <div className="press-marks" aria-hidden="true">
        <span className="crop crop--tl" /><span className="crop crop--tr" />
        <span className="crop crop--bl" /><span className="crop crop--br" />
      </div>
      <div className="reg-target" aria-hidden="true"><span /></div>

      <header className="sheet masthead">
        <div className="masthead__bar">
          <Link className="masthead__mark" to="/">
            Stand With Sonam Wangchuk <span className="no">PROTEST&nbsp;Nº&nbsp;001</span>
          </Link>
          <p className="masthead__edition">Free sheet · printed by hand<br />July 2026 · New Delhi</p>
        </div>
        <nav className="masthead__nav" aria-label="Primary">
          <Link to="/">Home</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/movement">The Movement</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/timeline">Timeline</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/action">Take Action</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/donate">Donate</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="sheet spine" style={{ borderTop: 'none', paddingTop: 'var(--space-2xl)' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">The Treasury</p>
          <h1 className="spine__title">
            Fuel the <span style={{ color: 'var(--color-accent)' }}>Movement</span>
          </h1>
          <p className="plank__gloss" style={{ maxWidth: '48ch', marginTop: 'var(--space-lg)' }}>
            100% of donations go directly to legal aid, medical support, protest logistics,
            and grassroots organizing. No administrative overhead. Every rupee is accounted for.
          </p>
        </div>
      </section>

      {/* Fund allocation — raw tally style */}
      <section className="sheet" style={{ paddingBottom: 'var(--space-2xl)' }}>
        <div className="tally" style={{ transform: 'rotate(-0.8deg)' }}>
          <span className="tally__cap tally__cap--l" aria-hidden="true">Where it goes</span>
          <div className="tally__strip" style={{ paddingBlock: 'var(--space-lg)' }}>
            <div className="tally__track" style={{ animation: 'none', width: '100%', justifyContent: 'center', gap: 'clamp(var(--space-lg), 3vw, var(--space-3xl))', flexWrap: 'wrap' }}>
              <span className="tally__item" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}><span className="n">35%</span> Legal Aid <span className="sep">/</span></span>
              <span className="tally__item" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}><span className="n n--teal">25%</span> Medical <span className="sep">/</span></span>
              <span className="tally__item" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}><span className="n">20%</span> Logistics <span className="sep">/</span></span>
              <span className="tally__item" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}><span className="n n--teal">12%</span> Organizing <span className="sep">/</span></span>
              <span className="tally__item" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}><span className="n">8%</span> Media</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation tiers */}
      <section className="sheet" style={{ paddingBottom: 'var(--space-2xl)' }}>
        <div className="spine__head" style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="spine__eyebrow">Choose your impact</p>
          <h2 className="spine__title" style={{ maxWidth: '100%' }}>
            Donation <span style={{ color: 'var(--color-accent)' }}>Tiers</span>
          </h2>
        </div>

        {status === 'success' && (
          <div className="pledge" style={{ borderTop: '2px solid var(--color-teal)', marginBottom: 'var(--space-xl)', padding: 'var(--space-lg)', textAlign: 'center' }}>
            <p style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: 'var(--color-ink)' }}>✅ {message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="pledge" style={{ borderTop: '2px solid var(--color-accent)', marginBottom: 'var(--space-xl)', padding: 'var(--space-lg)', textAlign: 'center' }}>
            <p style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>⚠️ {message}</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
          {[
            { amount: 500, label: 'Supporter', desc: '1 day of legal aid' },
            { amount: 2000, label: 'Activist', desc: '1 hunger striker, 1 day' },
            { amount: 5000, label: 'Champion', desc: '1 full protest event' },
            { amount: 10000, label: 'Guardian', desc: '1 detainee\'s case' },
            { amount: 25000, label: 'Pillar', desc: '1 outreach camp' },
            { amount: 50000, label: 'Visionary', desc: '1 month of operations' },
          ].map((t) => (
            <button key={t.amount} onClick={() => { setAmount(t.amount); setCustom(''); setStatus('idle'); setMessage('') }}
              className="card-broadsheet" style={{ cursor: 'pointer', textAlign: 'left', border: amount === t.amount ? '2px solid var(--color-accent)' : undefined }}>
              <p className="plank__num" style={{ marginBottom: 'var(--space-xs)' }}>₹{t.amount.toLocaleString()}</p>
              <p className="plank__slab" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: 'var(--space-xs)' }}>{t.label}</p>
              <p className="plank__gloss" style={{ fontSize: 'var(--text-sm)' }}>{t.desc}</p>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="plank__num" style={{ fontSize: 'var(--text-sm)', paddingTop: 0 }}>Custom: ₹</span>
          <input type="number" value={custom} onChange={(e) => { setCustom(e.target.value); setAmount(parseInt(e.target.value) || 0); setStatus('idle'); setMessage('') }}
            className="input-broadsheet" style={{ maxWidth: '150px' }} placeholder="Enter amount" min="100" />
          <button className="btn" onClick={handleDonate} disabled={status === 'processing'}>
            {status === 'processing' ? 'Processing…' : `Donate ₹${amount.toLocaleString()} →`}
          </button>
        </div>
        <p className="caption" style={{ marginTop: 'var(--space-md)' }}>
          {status === 'processing' ? 'Opening payment gateway…' : 'UPI / Credit Card / Net Banking · 80G Tax Exemption (India) · International donors welcome'}
        </p>
      </section>

      <footer className="sheet colophon">
        <div>
          <p className="colophon__mark">Stand With Sonam Wangchuk</p>
          <p className="colophon__body">₹0 overhead. 100% to causes. Monthly reports. Annual audit. Radical transparency.</p>
        </div>
        <address className="colophon__meta" style={{ fontStyle: 'normal' }}>
          <Link to="/action">Take Action</Link><br />
          <Link to="/contact">Contact</Link>
        </address>
        <div className="colophon__rule">
          <span>Set in Big Shoulders &amp; Fraunces · printed two-pass, off-register on purpose</span>
          <span>Protest Nº 001 · free to copy, free to post</span>
          <a href="https://x.com/shashank1tomar" target="_blank" style="color:var(--color-accent);text-decoration:underline">Built by @shashank1tomar</a>
        </div>
      </footer>
    </main>
  )
}
