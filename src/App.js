import './App.css';
import Aside from './Components/Aside'
import Home from './Components/Home'
import About from './Components/About'
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className='main-container'>
      <Aside/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;
