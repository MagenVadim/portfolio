import './App.css';
import Aside from './Components/Aside'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
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
  );
}

export default App;
