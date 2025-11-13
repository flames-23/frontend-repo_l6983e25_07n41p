import { motion } from 'framer-motion'
import { MapPin, Clock8, Phone } from 'lucide-react'

export default function Visit() {
  return (
    <section id="visit" className="relative py-24 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <MapPin className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-3 font-semibold text-lg">Find us</h3>
            <p className="mt-2 text-white/70">123 Vibe Street, Suite 42, Dream City</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Clock8 className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-3 font-semibold text-lg">Hours</h3>
            <p className="mt-2 text-white/70">Mon–Sun: 7:00 AM – 10:00 PM</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Phone className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-3 font-semibold text-lg">Contact</h3>
            <p className="mt-2 text-white/70">(555) 010-2025</p>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 font-semibold px-5 py-3 hover:shadow-lg hover:shadow-cyan-500/20 transition">
            Reserve a table
          </a>
        </div>
      </div>
    </section>
  )
}
