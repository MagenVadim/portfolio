import './App.css';
import Aside from './Components/Aside/Aside'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
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
  
  const light_mode = {
    'bg_black_900':'#f2f2fc',
    'bg_black_100': '#fdf9ff',
    'bg_black_50': '#e8dfec',
    'text_black_900': '#302e4d',
    'text_black_700': '#504e70'
  }
  const dark_mode = {
    'bg_black_900': '#151515',
    'bg_black_100': '#222222',
    'bg_black_50': '#393939',
    'text_black_900': '#ffffff',
    'text_black-700': '#e9e9e9',
  }

  const[skinColor, setSkinColor] = useState(styles_arr[0].color);
  const[lightDarkMode, setLightDarkMode] = useState(light_mode)

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

// ---------- day-night mode ----------
const printStatus = (status)=>{
  console.log(status)    
}
const dayNightToggler = ()=>{  
  const dayNight = document.querySelector(".day-night");
  const body = document.querySelector("body");

  if(dayNight.querySelector("i").classList.contains("fa-moon")){
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    body.classList.toggle("dark");
    setLightDarkMode(dark_mode);
  } else{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    body.classList.toggle("dark");
    setLightDarkMode(light_mode);
  }  
} 

  const SetActiveStyle = (color)=>{ 
    let colorValue=color.target.className;
    
    styles_arr.forEach((elem)=>{
      if(elem.model===colorValue){
        setSkinColor(elem.color)
      }
    })  
  }

// ----------- NAV-TOGGLER ----------
const navToglerOpen = {
  'left':'300px',
  'SectionLeft': '270px'
}
const navToglerClosed = {
  'left':'30px',
  'SectionLeftWide': '270px',
  'SectionLeft1200': '0'
}

const[navToglerStatus, setnavToglerStatus] = useState(true)
const[navToglerValue, setnavToglerValue] = useState(navToglerClosed)

const switchSetnavToglerStatus =()=>{
  setnavToglerStatus(prevState => !prevState)
}
const switchSetnavToglerValue =()=>{
  navToglerStatus ? setnavToglerValue(navToglerOpen) : setnavToglerValue(navToglerClosed)
}


// ----------- RENDERING ----------

  return (
    <>
      <div className='main-container'>
        <Aside skin={skinColor}
         lightDarkMode={lightDarkMode}
         navToglerStatus={navToglerStatus}
         navToglerValue={navToglerValue}
         switchSetnavToglerStatus={switchSetnavToglerStatus}
         switchSetnavToglerValue = {switchSetnavToglerValue}
         />

        <Routes>
          <Route path='/' element={<Home skin={skinColor} lightDarkMode={lightDarkMode} navToglerValue={navToglerValue}/>}/>
          <Route path='/about' element={<About skin={skinColor} lightDarkMode={lightDarkMode} navToglerValue={navToglerValue}/>}/>
          <Route path='/services' element={<Services skin={skinColor} lightDarkMode={lightDarkMode} />}/>
          <Route path='/portfolio' element={<Portfolio lightDarkMode={lightDarkMode}/>}/>
          <Route path='/contact' element={<Contact skin={skinColor} lightDarkMode={lightDarkMode}/>}/>
        </Routes>
    </div>

    <div className="style-switcher">
        <div className="style-switcher-togler s-icon" onClick={switchTogler}>
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div className="day-night s-icon">
          <i className="fas fa-moon" onClick={dayNightToggler}></i>
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
