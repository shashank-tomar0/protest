import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      className = '',
      inputClassName = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || props.name

    return (
      <div className={className}>
        {label && (
          <label htmlFor={inputId} className="label">
            {label}
            {props.required && <span className="text-cjp-primary ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <input
            ref={ref}
            id={inputId}
            className={`input ${error ? 'border-cjp-primary focus:border-cjp-primary focus:ring-cjp-primary/20' : ''} ${inputClassName}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {error && (
            <motion.p
              id={`${inputId}-error`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full left-0 mb-1 text-xs text-cjp-primary flex items-center gap-1"
              role="alert"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </motion.p>
          )}
          {helperText && !error && (
            <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-cjp-secondary/60">
              {helperText}
            </p>
          )}
        </motion.div>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input