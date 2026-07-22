import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Card = forwardRef(
  (
    {
      children,
      className = '',
      variant = 'default',
      hover = false,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-white border border-cjp-secondary/10 shadow-sm',
      elevated: 'bg-white border border-cjp-secondary/10 shadow-lg',
      outlined: 'bg-white border-2 border-cjp-secondary/20',
      gradient: 'bg-white border border-cjp-secondary/10 gradient-border',
      dark: 'bg-cjp-secondary border border-white/10 text-cjp-accent',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    const hoverStyles = hover
      ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
      : ''

    return (
      <motion.div
        ref={ref}
        className={`${variants[variant]} ${paddings[padding]} rounded-2xl ${hoverStyles} ${className}`}
        whileTap={{ scale: 0.99 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card