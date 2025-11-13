import { motion } from 'framer-motion'
import { Coffee, Bean, Leaf, Sparkles, CupSoda } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Signature Brews',
    desc: 'From velvety lattes to bold espressos, roasted to perfection.'
  },
  {
    icon: CupSoda,
    title: 'Icy Refreshers',
    desc: 'Playful, sparkling beverages inspired by the 3D hero aesthetic.'
  },
  {
    icon: Bean,
    title: 'Ethically Sourced',
    desc: 'Single-origin beans and sustainable partnerships.'
  },
  {
    icon: Leaf,
    title: 'Seasonal Treats',
    desc: 'Limited flavors and pastries crafted by our chef.'
  }
]

export default function Featured() {
  return (
    <section id="menu" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.08),transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold">
            What we’re pouring
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.05 }} className="mt-3 text-white/70">
            Clean design, bold flavors, and lots of motion—our menu is crafted to delight.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-cyan-300/40">
              <div className="absolute -top-20 right-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20 transition" />
              <f.icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <button className="mt-6 text-sm font-semibold text-cyan-300 hover:text-white transition inline-flex items-center gap-1">
                Explore <Sparkles className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
