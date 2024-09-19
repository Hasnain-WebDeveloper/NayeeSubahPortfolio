
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import HeroSection from './components/herosection/HeroSection'
import Qualification from './components/qualification/Qualification'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {


  return (
    <>

      <Header />
      <div className='appfile'>




        <HeroSection />


        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact/>
      </div>
    </>


  )
}

export default App
