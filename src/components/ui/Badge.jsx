import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Badge = forwardRef(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      dot = false,
      dotColor = 'cjp-primary',
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: 'bg-cjp-primary/10 text-cjp-primary border border-cjp-primary/20',
      gold: 'bg-cjp-gold/20 text-cjp-gold-dark border border-cjp-gold/30',
      success: 'bg-green-500/10 text-green-600 border border-green-500/20',
      warning: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
      danger: 'bg-red-500/10 text-red-600 border border-red-500/20',
      outline: 'bg-transparent text-cjp-secondary/80 border border-cjp-secondary/20',
      dark: 'bg-cjp-secondary text-cjp-accent border border-white/10',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-xs',
      lg: 'px-4 py-1.5 text-sm',
    }

    return (
      <motion.span
        ref={ref}
        className={`inline-flex items-center gap-1.5 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {dot && (
          <span
            className={`w-1.5 h-1.5 rounded-full`}
            style={{ backgroundColor: `var(--color-${dotColor})` }}
            aria-hidden="true"
          />
        )}
        {children}
      </motion.span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge