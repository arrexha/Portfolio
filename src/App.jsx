import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar' 
import { MobileMenu } from './components/MobileMenu'
import {Home} from './components/sections/Home'
import {About} from './components/sections/About'
import {Certifications} from './components/sections/Certifications'
import {Projects} from './components/sections/Projects'
import {Contact} from './components/sections/Contact'
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <div className="bg-black text-gray-100">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <Home />
          <About />
          <Projects />
          <Certifications />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
