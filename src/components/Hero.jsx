import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-900/40 to-gray-900/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md ring-1 ring-white/20">
              New season flavors are here
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05 }} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            A modern café with playful 3D vibes
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.1 }} className="mt-4 text-lg text-white/80">
            Chill ambiance, crafted coffee, and drinks that sparkle. Grab a seat and enjoy the show.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} className="mt-8 flex items-center gap-4">
            <a href="#menu" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 font-semibold px-5 py-3 hover:shadow-lg hover:shadow-cyan-500/20 transition">
              Explore Menu
            </a>
            <a href="#visit" className="inline-flex items-center justify-center rounded-xl ring-1 ring-white/20 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">
              Book a Table
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-[120%] rounded-[50%] bg-cyan-400/20 blur-3xl pointer-events-none" />
    </section>
  )
}
