import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Heart, Shield, Check, CreditCard, Banknote, ArrowRight,
  ExternalLink, Info, AlertCircle, Users, Flag, Target, Leaf,
  Hospital, Briefcase, Globe, Lock, Download, Share2, Copy,
  Building2, Scale, Calendar, Smartphone, Megaphone
} from 'lucide-react'

const donationTiers = [
  { amount: 500, label: 'Supporter', desc: 'Covers one day of legal aid for a detained protester', impact: '1 day of legal defense', icon: Heart, color: 'from-cjp-primary to-cjp-primary-dark' },
  { amount: 2000, label: 'Activist', desc: 'Medical support for one hunger striker per day including IV fluids and monitoring', impact: '1 hunger striker, 1 day', icon: Shield, color: 'from-blue-500 to-blue-600', popular: true },
  { amount: 5000, label: 'Champion', desc: 'Protest logistics for one event — sound system, permits, safety equipment', impact: '1 full protest event', icon: Flag, color: 'from-gold to-orange-500' },
  { amount: 10000, label: 'Guardian', desc: 'Full legal case support for one detainee including bail application and court fees', impact: "1 detainee's full case", icon: Scale, color: 'from-purple-500 to-purple-600' },
  { amount: 25000, label: 'Pillar', desc: 'Funds a community outreach camp in Ladakh — travel, materials, and coordination', impact: '1 outreach camp', icon: Users, color: 'from-sage to-teal-600' },
  { amount: 50000, label: 'Visionary', desc: 'Sustains core movement operations for a month — legal, medical, and organizing combined', impact: '1 month of operations', icon: Heart, color: 'from-red-500 to-red-600' },
]

const fundAllocation = [
  { category: 'Legal Aid & Defense', percentage: 35, icon: Scale, color: 'text-blue-500', bgColor: 'bg-blue-500', desc: 'Habeas corpus petitions, Supreme Court representation, bail applications, legal aid for arrested protesters, know-your-rights materials' },
  { category: 'Medical & Humanitarian', percentage: 25, icon: Hospital, color: 'text-red-500', bgColor: 'bg-red-500', desc: 'On-site medical tents, ambulance coordination, hunger striker monitoring, altitude medicine, mental health support, emergency evacuations' },
  { category: 'Protest Logistics', percentage: 20, icon: Flag, color: 'text-cjp-gold-dark', bgColor: 'bg-cjp-gold', desc: 'Venue permits, sound systems, safety equipment, water/food distribution, transport coordination, sanitation at protest sites' },
  { category: 'Grassroots Organizing', percentage: 12, icon: Users, color: 'text-green-500', bgColor: 'bg-green-500', desc: 'Community meetings in Ladakh and across India, volunteer training, MP pressure campaigns, voter education, diaspora coordination' },
  { category: 'Digital & Media', percentage: 8, icon: Globe, color: 'text-purple-500', bgColor: 'bg-purple-500', desc: 'Website, social media amplification, documentary production, photo/video documentation, international advocacy campaigns, press releases' },
]

const paymentMethods = [
  { name: 'UPI', desc: 'GPay, PhonePe, Paytm, BHIM', icon: Smartphone },
  { name: 'Credit/Debit Card', desc: 'Visa, Mastercard, RuPay, AmEx', icon: CreditCard },
  { name: 'Net Banking', desc: 'All major Indian banks', icon: Building2 },
  { name: 'International', desc: 'PayPal, Stripe, Wise', icon: Globe },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(2000)
  const [customAmount, setCustomAmount] = useState('')
  const [showCustom, setShowCustom] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [showReceipt, setShowReceipt] = useState(false)

  const displayAmount = showCustom && customAmount
    ? parseInt(customAmount) || 0
    : selectedAmount

  const handleTierSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
    setShowCustom(false)
  }

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value)
    setShowCustom(true)
  }

  const handleDonate = (e) => {
    e.preventDefault()
    setShowReceipt(true)
    setTimeout(() => setShowReceipt(false), 5000)
  }

  return (
    <>
      <section className="section bg-gradient-to-b from-cjp-primary/5 via-cjp-accent to-gold/5 relative overflow-hidden" aria-labelledby="donate-hero-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-6 inline-block">Donate</span>
            <h1 id="donate-hero-title" className="heading-1 text-cjp-secondary mb-6">
              Fuel the <span className="gradient-text">Movement</span>
            </h1>
            <p className="body-lg text-cjp-secondary/80 max-w-2xl mx-auto">
              100% of your donation goes directly to legal aid, medical support, protest logistics,
              and grassroots organizing. Zero administrative overhead. Radical transparency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="donate-options-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="donate-options-title" className="heading-2 text-cjp-secondary mb-4">
              Choose Your <span className="gradient-text">Impact Level</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Select a tier or enter a custom amount. Every contribution — ₹500 or ₹50,000 — powers the fight for justice.
            </p>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setDonationType('one-time')}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  donationType === 'one-time'
                    ? 'bg-cjp-primary text-white shadow-lg shadow-cjp-primary/30'
                    : 'bg-cjp-accent text-cjp-secondary/80 hover:bg-cjp-primary/5'
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  donationType === 'monthly'
                    ? 'bg-cjp-primary text-white shadow-lg shadow-cjp-primary/30'
                    : 'bg-cjp-accent text-cjp-secondary/80 hover:bg-cjp-primary/5'
                }`}
              >
                Monthly
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {donationTiers.map((tier, index) => (
              <motion.article
                key={tier.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`card card-hover p-6 relative overflow-hidden group ${
                  selectedAmount === tier.amount && !showCustom ? 'ring-2 ring-cjp-primary shadow-lg shadow-cjp-primary/10' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 ${
                  selectedAmount === tier.amount && !showCustom ? 'opacity-5' : ''
                } transition-opacity duration-300`} />

                <div className="relative z-10">
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cjp-primary to-cjp-gold text-white text-[10px] font-bold rounded-full whitespace-nowrap shadow-lg">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-cjp-accent group-hover:scale-110 transition-transform"
                         style={{ background: `linear-gradient(135deg, ${tier.color.split(' to ')[0]}, ${tier.color.split(' to ')[1]})` }}>
                      <tier.icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm text-cjp-secondary/60">{tier.label}</span>
                  </div>

                  <p className="text-4xl lg:text-5xl font-display font-bold text-cjp-primary mb-1">
                    ₹{tier.amount.toLocaleString()}
                  </p>
                  {donationType === 'monthly' && (
                    <p className="text-xs text-cjp-secondary/60 mb-2">per month</p>
                  )}
                  <p className="text-cjp-secondary/80 text-sm leading-relaxed mb-4">{tier.desc}</p>

                  <div className="flex items-center gap-2 text-xs text-green-600 bg-green-500/10 px-3 py-1.5 rounded-lg mb-6">
                    <Target className="w-3 h-3" />
                    <span className="font-medium">Impact: {tier.impact}</span>
                  </div>

                  <button
                    onClick={() => handleTierSelect(tier.amount)}
                    className={`w-full btn transition-all ${
                      selectedAmount === tier.amount && !showCustom
                        ? 'btn-primary'
                        : 'btn-outline'
                    }`}
                    aria-pressed={selectedAmount === tier.amount && !showCustom}
                  >
                    {selectedAmount === tier.amount && !showCustom ? (
                      <><Check className="w-4 h-4" /> Selected</>
                    ) : (
                      `Select ₹${tier.amount.toLocaleString()}`
                    )}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div className="card p-6">
              <h3 className="heading-4 text-cjp-secondary mb-4 text-center">Custom Amount</h3>
              <div className="relative max-w-xs mx-auto mb-3">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cjp-primary font-display font-bold text-2xl">₹</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="Enter amount"
                  className="input pl-10 text-center text-2xl font-display font-bold"
                  min="100"
                  max="1000000"
                  aria-label="Custom donation amount in rupees"
                />
              </div>
              <p className="text-center text-xs text-cjp-secondary/80">
                Minimum ₹100 • Maximum ₹10,00,000 per transaction
                {donationType === 'monthly' && <span className="block">Monthly donations: minimum ₹100/month</span>}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-accent" aria-labelledby="payment-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 id="payment-title" className="heading-2 text-cjp-secondary mb-4">
                Complete Your <span className="gradient-text">Donation</span>
              </h2>
              <p className="text-cjp-secondary/80 leading-relaxed mb-8">
                Your donation is processed securely through Razorpay. We never store your card or bank details.
              </p>

              <form onSubmit={handleDonate}>
                <div className="card p-6 lg:p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="donor-name" className="label">Full Name <span className="text-cjp-primary">*</span></label>
                      <input type="text" id="donor-name" className="input" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="donor-email" className="label">Email <span className="text-cjp-primary">*</span></label>
                      <input type="email" id="donor-email" className="input" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="donor-phone" className="label">Phone (for receipt)</label>
                    <input type="tel" id="donor-phone" className="input" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div>
                    <label className="label">Amount</label>
                    <div className="text-3xl font-display font-bold text-cjp-primary">
                      ₹{displayAmount.toLocaleString()}
                      {donationType === 'monthly' && <span className="text-base text-cjp-secondary/60 font-normal"> /month</span>}
                    </div>
                  </div>

                  <div>
                    <label className="label">Payment Method <span className="text-cjp-primary">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.name}
                          type="button"
                          onClick={() => setPaymentMethod(method.name)}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            paymentMethod === method.name
                              ? 'border-cjp-primary bg-cjp-primary/5'
                              : 'border-cjp-secondary/10 hover:border-cjp-primary/30'
                          }`}
                        >
                          <method.icon className="w-6 h-6 mx-auto mb-2 text-cjp-primary" aria-hidden="true" />
                          <p className="text-xs font-medium text-cjp-secondary">{method.name}</p>
                          <p className="text-[10px] text-cjp-secondary/60 mt-0.5">{method.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="donor-80g"
                      type="checkbox"
                      className="mt-1 rounded border-cjp-secondary/20 text-cjp-primary focus:ring-cjp-primary"
                    />
                    <label htmlFor="donor-80g" className="text-sm text-cjp-secondary/80">
                      I want 80G tax exemption receipt (Indian donors only). I'll provide PAN details after payment.
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="donor-anonymous"
                      type="checkbox"
                      className="mt-1 rounded border-cjp-secondary/20 text-cjp-primary focus:ring-cjp-primary"
                    />
                    <label htmlFor="donor-anonymous" className="text-sm text-cjp-secondary/80">
                      List my donation anonymously (won't appear on public donor wall)
                    </label>
                  </div>

                  {showReceipt ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
                    >
                      <Check className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="font-medium text-green-700">Payment Successful!</p>
                      <p className="text-sm text-green-600">Receipt sent to your email. Thank you for your support.</p>
                    </motion.div>
                  ) : (
                    <button type="submit" className="btn-primary btn-lg w-full text-xl group">
                      <Heart className="w-6 h-6 transition-transform group-hover:scale-110" />
                      Donate ₹{displayAmount.toLocaleString()}
                      {donationType === 'monthly' && <span className="text-base font-normal"> /month</span>}
                    </button>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cjp-secondary/60">
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> 256-bit SSL</span>
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> PCI Compliant</span>
                    <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Instant Receipt</span>
                  </div>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="card p-6 gradient-border">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-cjp-primary" />
                  <h3 className="heading-4 text-cjp-secondary">80G Tax Exemption</h3>
                </div>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed mb-4">
                  Donations to Stand With Sonam are eligible for 80G tax deduction under Indian Income Tax Act.
                  Donors receive a 50% exemption on the donated amount.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-cjp-secondary/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>80G deduction available for Indian taxpayers</span>
                  </div>
                  <div className="flex items-start gap-2 text-cjp-secondary/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Receipt sent within 48 hours of donation</span>
                  </div>
                  <div className="flex items-start gap-2 text-cjp-secondary/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>PAN required for 80G certificate</span>
                  </div>
                  <div className="flex items-start gap-2 text-cjp-secondary/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Minimum ₹500 for 80G eligibility</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Banknote className="w-6 h-6 text-cjp-gold-dark" />
                  <h3 className="heading-4 text-cjp-secondary">Bank Transfer</h3>
                </div>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed mb-4">
                  Prefer direct bank transfer? Use the details below. Email us the transaction ID for receipt.
                </p>
                <div className="space-y-2 text-sm bg-cjp-accent p-4 rounded-xl">
                  <div className="flex justify-between"><span className="text-cjp-secondary/80">Account Name</span><span className="font-medium text-cjp-secondary">Stand With Sonam</span></div>
                  <div className="flex justify-between"><span className="text-cjp-secondary/80">Bank</span><span className="font-medium text-cjp-secondary">State Bank of India</span></div>
                  <div className="flex justify-between"><span className="text-cjp-secondary/80">Account No.</span><span className="font-medium text-cjp-secondary">12345678901</span></div>
                  <div className="flex justify-between"><span className="text-cjp-secondary/80">IFSC</span><span className="font-medium text-cjp-secondary">SBI0001234</span></div>
                  <div className="flex justify-between"><span className="text-cjp-secondary/80">Branch</span><span className="font-medium text-cjp-secondary">Leh, Ladakh</span></div>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText('12345678901')}
                  className="mt-3 flex items-center gap-2 text-cjp-primary hover:text-cjp-primary-dark text-sm font-medium transition-colors"
                >
                  <Copy className="w-4 h-4" /> Copy Account Number
                </button>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-blue-500" />
                  <h3 className="heading-4 text-cjp-secondary">International Donors</h3>
                </div>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed mb-4">
                  Donate via PayPal, Stripe, or Wise. International donors also receive receipts.
                  80G exemption is for Indian taxpayers only.
                </p>
                <a
                  href="https://paypal.me/standwithsonam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-sm inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Donate via PayPal
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="allocation-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 id="allocation-title" className="heading-2 text-cjp-accent mb-4">
              Where Your <span className="text-cjp-gold">Money Goes</span>
            </h2>
            <p className="text-cjp-secondary/60">Zero administrative overhead. Every rupee goes to the cause. Monthly audits published publicly.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-5">
                {fundAllocation.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className={`w-5 h-5 ${item.color}`} aria-hidden="true" />
                        </div>
                        <span className="font-display font-semibold text-cjp-accent text-sm">{item.category}</span>
                      </div>
                      <span className={`text-2xl font-display font-bold ${item.color}`}>{item.percentage}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${item.bgColor}`}
                      />
                    </div>
                    <p className="text-cjp-secondary/60 text-xs mt-2">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="heading-4 text-cjp-accent mb-6 text-center">Transparency Promise</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: '₹0', desc: 'Admin Overhead' },
                    { label: '100%', desc: 'To the Cause' },
                    { label: 'Monthly', desc: 'Public Reports' },
                    { label: 'Annual', desc: 'Independent Audit' },
                    { label: 'Real-Time', desc: 'Expense Tracking' },
                    { label: 'OpenCollective', desc: 'Full Transparency' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5">
                      <p className="font-display text-2xl font-bold text-cjp-gold">{stat.label}</p>
                      <p className="text-cjp-secondary/60 text-xs mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-cjp-gold/10 border border-cjp-gold/20">
                <h3 className="heading-4 text-cjp-accent mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cjp-gold" />
                  Latest Financial Report
                </h3>
                <p className="text-cjp-secondary/60 text-sm leading-relaxed mb-4">
                  Our July 2026 transparency report is now available. Total funds received: ₹85,42,300.
                  Total deployed: ₹62,18,500. Remaining reserves: ₹23,23,800 earmarked for ongoing legal battles.
                </p>
                <button className="flex items-center gap-2 text-cjp-gold hover:text-cjp-gold/70 font-medium text-sm transition-colors">
                  <Download className="w-4 h-4" /> Download Full Report (PDF)
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="heading-4 text-cjp-accent mb-3">Donor Wall</h3>
                <p className="text-cjp-secondary/60 text-sm leading-relaxed">
                  We believe in radical transparency. Our donor wall lists all contributions (unless marked anonymous).
                  Recent donors: 5,432 individuals from 23 countries have contributed this month.
                  Average donation: ₹2,100.
                </p>
                <button className="mt-4 flex items-center gap-2 text-cjp-primary hover:text-cjp-primary-light font-medium text-sm transition-colors">
                  <ExternalLink className="w-4 h-4" /> View Live Donor Wall
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="why-donate-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="why-donate-title" className="heading-2 text-cjp-secondary mb-4">
              Why Your <span className="gradient-text">Donation Matters</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              This movement has no billionaire backers. No corporate sponsors. No party funds.
              It is funded entirely by people like you who believe in justice, education, and democracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: 'Legal Defense', desc: 'Every detainee deserves a lawyer. Your donation funds bail, court fees, and Supreme Court representation for protesters arrested while standing for their rights.' },
              { icon: Hospital, title: 'Medical Care', desc: 'Hunger strikers need 24/7 medical monitoring. Your donation funds on-site doctors, ambulances, emergency evacuations, and altitude-specific care.' },
              { icon: Megaphone, title: 'Amplify the Message', desc: 'The truth needs to travel far. Your donation funds social media campaigns, documentary production, press releases, and international advocacy.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="card card-hover p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cjp-primary/10 flex items-center justify-center text-cjp-primary">
                  <item.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="heading-4 text-cjp-secondary mb-3">{item.title}</h3>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="donate-cta-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="donate-cta-title" className="heading-2 text-cjp-accent mb-6">
              Ready to <span className="text-cjp-gold">Make History</span>?
            </h2>
            <p className="body-lg text-cjp-secondary/60 mb-10">
              Your donation — large or small — powers the movement for justice, education, and democracy.
              Every rupee is a brick in the wall of change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#donate-options-title" className="btn-primary btn-xl">
                <Heart className="w-6 h-6" />
                Donate ₹{displayAmount.toLocaleString()}{donationType === 'monthly' && '/mo'}
              </a>
              <Link to="/action" className="btn-outline border-cjp-accent/30 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-secondary btn-xl">
                <ArrowRight className="w-6 h-6" />
                Other Ways to Help
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-cjp-secondary/60">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Lock className="w-4 h-4 text-green-400" /> Secure
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Shield className="w-4 h-4 text-green-400" /> 80G Available
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Globe className="w-4 h-4 text-green-400" /> International OK
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Check className="w-4 h-4 text-green-400" /> Transparent
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

