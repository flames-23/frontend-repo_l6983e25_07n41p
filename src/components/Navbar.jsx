import { useState } from 'react'
import { Menu, X, Coffee, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (label, href = '#') => (
    <a href={href} className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 grid place-items-center rounded-xl bg-white text-gray-900">
              <Coffee className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">Blue Flame Café</p>
              <p className="text-white/60 text-xs">Brewed fresh. Served with vibes.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {navLink('Menu', '#menu')}
            {navLink('Story', '#about')}
            {navLink('Gallery', '#gallery')}
            {navLink('Visit', '#visit')}
            <button className="hidden lg:flex items-center gap-2 text-sm text-gray-900 bg-white px-4 py-2 rounded-xl hover:bg-white/90 transition">
              <Search className="h-4 w-4" />
              Find a drink
            </button>
            <a href="#visit" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition">Reserve</a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 space-y-4">
          <a onClick={() => setOpen(false)} href="#menu" className="block text-white/90">Menu</a>
          <a onClick={() => setOpen(false)} href="#about" className="block text-white/90">Story</a>
          <a onClick={() => setOpen(false)} href="#gallery" className="block text-white/90">Gallery</a>
          <a onClick={() => setOpen(false)} href="#visit" className="block text-white/90">Visit</a>
          <a onClick={() => setOpen(false)} href="#visit" className="block bg-white text-gray-900 font-semibold text-center px-4 py-2 rounded-xl">Reserve</a>
        </div>
      )}
    </header>
  )
}
