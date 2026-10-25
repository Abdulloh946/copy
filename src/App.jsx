import { useEffect, useState } from "react"
import Card from "./components/card/card"
import Networking from "./components/networking/networking"
import Application from './components/application/Application'
import About from './components/about/about'
import Statistics from './components/stats/statistics'
import Mission from './components/mission/mission'
import Reason from './components/reaso/reason'
import Requirement from './components/Requirement/Requirement'
import Meeting from './components/meeting/Meeting'
import Pricing from './components/Pricing/Pricing'
import Steps from './components/steps/steps'
import Members from './components/members/members'
import Contact from './components/contact/contact'
import Faq from './components/faq/Faq'
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("main > section, main > h2, main > .cards")
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((el) => {
      el.classList.add("reveal")
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <div className="hero">
        <div className="overlay"></div>

        <header className={scrolled ? "navbar scrolled" : "navbar"}>
          <a href="#" className="logo">
            <span>ASOSCHILAR</span>
            <h2>CLUB</h2>
          </a>

          <button
            className="burger"
            aria-label="Menyu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "menu open" : "menu"}>
            <a href="#about" onClick={closeMenu}>Biz kimmiz?</a>
            <a href="#requirements" onClick={closeMenu}>Qo'shilish Shartlari</a>
            <a href="#pricing" onClick={closeMenu}>Narxlar</a>
            <a href="#faq" onClick={closeMenu}>Savollar</a>
          </nav>

          <a href="tel:+998939435588" className="phone">
            +998 93 943 55 88
          </a>
        </header>

        <div className="content">
          <h1>
            Asoschilar <br />
            Club
          </h1>

          <p>
            Katta maqsadli tadbirkorlar uchun <br />
            yopiq biznes klub
          </p>

          <a href="#apply" className="apply">
            Ariza topshirish
            <span>→</span>
          </a>
        </div>
      </div>
      <main>
      <Card/>
      <Networking/>
      <Application id="apply"/>
      <About/>
      <Statistics/>
      <Mission/>
      <Reason/>
      <Requirement/>
      <Meeting/>
      <Steps/>
      <Pricing/>
      <Members/>
      <Faq/>
      <Application title="Keyingi a'zo siz bo'ling!"/>
      <Contact/>
      </main>

      <a href="#apply" className={scrolled ? "mobile-cta show" : "mobile-cta"}>
        Ariza topshirish →
      </a>

      <footer className="footer">
        © {new Date().getFullYear()} Asoschilar Club. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  )
}

export default App
