import './App.css';
import Aside from './Components/Aside'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import {Routes, Route} from 'react-router-dom';


function App() {

  // Toggle style - Switcher 
  const switchTogler = ()=>{
      document.querySelector(".style-switcher").classList.toggle("open");
  }
  // hide style - Switcher on scroll
  window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
      document.querySelector(".style-switcher").classList.remove("open")
    }
  })


  const scrollHideSwitcher = ()=>{
  }

  const SetActiveStyle = ()=>{    
  }

  return (
    <>
      <div className='main-container'>
        <Aside/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>

    <div className="style-switcher">
        <div className="style-switcher-togler s-icon" onClick={switchTogler}>
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div className="day-night s-icon">
          <i className="fas fa-moon"></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span className="color-1" onClick={SetActiveStyle}></span>
          <span className="color-2" onClick={SetActiveStyle}></span>
          <span className="color-3" onClick={SetActiveStyle}></span>
          <span className="color-4" onClick={SetActiveStyle}></span>
          <span className="color-5" onClick={SetActiveStyle}></span>
        </div>
      </div>
    </>


  );
}

export default App;
