import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Gallery from './components/Gallery'
import Visit from './components/Visit'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <Gallery />
        <Visit />
      </main>
      <footer className="bg-gray-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-white/60">
          © {new Date().getFullYear()} Blue Flame Café — Designed with motion and good taste.
        </div>
      </footer>
    </div>
  )
}

export default App
