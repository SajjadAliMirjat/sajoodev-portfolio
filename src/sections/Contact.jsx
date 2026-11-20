import { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react'
import { site } from '../data/site'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

const empty = { name: '', email: '', subject: '', message: '' }
const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.'
  return e
}
const fields = [['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']]

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | unconfigured

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return
    if (!site.formEndpoint) { setStatus('unconfigured'); return }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success'); setValues(empty)
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Build Something Together</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-soft" />
          <p className="muted mt-4">Have a project in mind? Tell me about it and I'll get back to you.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <a href={`mailto:${site.email}`} className="card card-hover flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"><Mail size={20} /></span>
              <span><span className="muted block text-xs">Email</span><span className="font-semibold break-all">{site.email}</span></span>
            </a>
            <div><p className="muted mb-3 text-sm">Find me online</p><SocialLinks /></div>
          </div>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.slice(0, 2).map(([n, l, t]) => <Field key={n} {...{ n, l, t, values, errors, onChange }} />)}
            </div>
            <Field n="subject" l="Subject" t="text" {...{ values, errors, onChange }} />
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} className="input" placeholder="Tell me about your project…"
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
            </div>
            <Button type="submit" disabled={false} className="w-full sm:w-auto"><Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Message'}</Button>
            <div aria-live="polite">
              {status === 'success' && <p className="flex items-center gap-2 text-sm text-emerald-500"><CheckCircle2 size={16} /> Thanks! Your message was sent.</p>}
              {status === 'error' && <p className="flex items-center gap-2 text-sm text-red-500"><AlertCircle size={16} /> Something went wrong. Please try again or email me directly.</p>}
              {status === 'unconfigured' && <p className="flex items-start gap-2 text-sm text-amber-500"><Info size={16} className="mt-0.5 shrink-0" /> The form isn't connected yet, so nothing was sent. Please email {site.email} directly.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ n, l, t, values, errors, onChange }) {
  return (
    <div>
      <label htmlFor={n} className="mb-2 block text-sm font-medium">{l}</label>
      <input id={n} name={n} type={t} value={values[n]} onChange={onChange} className="input" autoComplete={n === 'name' ? 'name' : n === 'email' ? 'email' : 'off'}
        aria-invalid={!!errors[n]} aria-describedby={errors[n] ? `${n}-error` : undefined} />
      {errors[n] && <p id={`${n}-error`} className="mt-1.5 text-xs text-red-500">{errors[n]}</p>}
    </div>
  )
}
