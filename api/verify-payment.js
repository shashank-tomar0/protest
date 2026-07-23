// POST /api/verify-payment — verifies Razorpay payment signature server-side

import crypto from 'crypto'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing payment details' })
    }

    const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

    if (!KEY_SECRET) {
      return res.status(503).json({ error: 'Payments not configured' })
    }

    // Generate expected signature: HMAC_SHA256(order_id + "|" + payment_id, key_secret)
    const expectedSignature = crypto
      .createHmac('sha256', KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ error: 'Invalid payment signature', verified: false })
    }

    return res.status(200).json({
      verified: true,
      message: 'Payment verified successfully. Thank you for your support!',
    })
  } catch (err) {
    console.error('Verify-payment error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
