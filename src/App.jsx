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
import "./App.css";
const App = () => {
  return (
    
    <div>
      <div className="hero">
      <div className="overlay"></div>

      <header className="navbar">
        <div className="logo">
          <span>ASOSCHILAR</span>
          <h2>CLUB</h2>
        </div>

        <nav className="menu">
          <a href="#">Biz kimmiz?</a>
          <a href="#">Qo'shilish Shartlari</a>
          <a href="#">Narxlar</a>
        </nav>

        <button className="phone">
          +998 93 943 55 88
        </button>
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

        <button className="apply">
          Ariza topshirish
        </button>
      </div>
    </div>
      <Card/>
      <Networking/>
      <Application/>
      <About/>
      <Statistics/>
      <Mission/>
      <Reason/>
      <Requirement/>
      <Meeting/>
      <Steps/>
      <Pricing/>
      <Members/>
      <Application/>
      <Contact/>
    </div>
  )
}

export default App