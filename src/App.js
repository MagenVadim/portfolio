import './App.css';
import Aside from './Components/Aside'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import {Routes, Route} from 'react-router-dom';
import {useState} from "react"


function App() {

  const styles_arr = [
    {model:'color_1', color:"#ec6918"},
    {model:'color_2', color:"#5e2003"},
    {model:'color_3', color:"#37b182"},
    {model:'color_4', color:"#1854b4"},
    {model:'color_5', color:"#f021b2"}
  ]
  
  const[skinColor, setSkinColor] = useState(styles_arr[0].color);

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

  const SetActiveStyle = (color)=>{ 
    let colorValue=color.target.className;
    
    styles_arr.forEach((elem)=>{
      if(elem.model===colorValue){
        setSkinColor(elem.color)
      }
    })  
  }

  return (
    <>
      <div className='main-container'>
        <Aside skin={skinColor}/>

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
          <span className="color_1" onClick={SetActiveStyle}></span>
          <span className="color_2" onClick={SetActiveStyle}></span>
          <span className="color_3" onClick={SetActiveStyle}></span>
          <span className="color_4" onClick={SetActiveStyle}></span>
          <span className="color_5" onClick={SetActiveStyle}></span>
        </div>
      </div>
    </>


  );
}

export default App;
