const styles = {
  primary: 'bg-gradient-to-r from-accent to-accent-soft text-white shadow-lg shadow-accent/25 hover:brightness-110',
  secondary: 'border border-slate-300 text-slate-800 hover:border-accent hover:text-accent dark:border-white/15 dark:text-white dark:hover:border-accent dark:hover:text-accent',
}
export default function Button({ href, variant = 'primary', className = '', children, disabled, ...rest }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`
  if (disabled) return <span aria-disabled="true" className={`${base} cursor-not-allowed opacity-50`}>{children}</span>
  if (href) {
    const external = href.startsWith('http')
    return <a href={href} className={base} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>{children}</a>
  }
  return <button className={base} {...rest}>{children}</button>
}
