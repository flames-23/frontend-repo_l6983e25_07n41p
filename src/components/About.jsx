import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(6,182,212,0.08),transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Designed for modern coffee lovers</h2>
            <p className="mt-4 text-gray-600">
              Our space blends clean, minimal design with immersive 3D visuals and subtle motion. Whether you’re here to work, relax, or catch up—there’s a seat with your name on it.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-3xl font-extrabold text-gray-900">45+</p>
                <p className="text-sm text-gray-500">Specialty drinks</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-3xl font-extrabold text-gray-900">7am–10pm</p>
                <p className="text-sm text-gray-500">Open daily</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop" alt="Cafe interior" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-cyan-400 text-gray-900 px-4 py-3 shadow-xl">
              <p className="font-semibold">Free Wi‑Fi • Cozy seats • Outlets everywhere</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
