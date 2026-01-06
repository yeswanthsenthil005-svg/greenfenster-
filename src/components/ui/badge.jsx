const Badge = ({ className = '', variant = 'default', children, ...props }) => {
  const variants = {
    default: 'bg-amber-100 text-amber-800',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-700',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
