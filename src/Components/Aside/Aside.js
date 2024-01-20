import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Logo, NavActive, NavToggler, SpanNavToggler} from '../StylesComponent'

function Aside({skin, lightDarkMode, navToglerValue, switchSetnavToglerStatus, switchSetnavToglerValue,
  collectionAsideItems, asideItems, setAsideItems
}) {

  const navigate = useNavigate();

  const asideItemClick = (value)=>{
    let newCollection = collectionAsideItems.map((elem)=>{ 
      const container={}     
      if(elem.id===value){
        container['id']=elem.id;
        container['status']=true; 
        return container; 
      } else {
        container['id']=elem.id;
        container['status']=false;
        return container; 
      }     
    })  
    setAsideItems(newCollection)
  }

  const colorStatus = (id)=>{
    let status = false;
    asideItems.forEach((elem)=>{      
      if(elem.id===id){status = elem.status}
    })
    return status
  }

  // 
  const asideSectionTogglerBtn =()=>{
    const aside = document.getElementById("aside");    
    aside.classList.toggle("open");
  }


  const navTogglerBtn = ()=>{
    asideSectionTogglerBtn(); // меняем имя класса  Aside - Open класс
    switchSetnavToglerValue(); // передаем ширину отступа (30 или 300 для кнопки) в переменную
    switchSetnavToglerStatus(); // переключаем статус true/false при каждом нажатии кнопки    
  }

  
  return (
    <div id='aside' className="aside">
      <div className="logo">
        <Logo color={skin} href="#"><span>M</span>agen</Logo>
      </div>


      <NavToggler color={skin} lightDarkMode={lightDarkMode} navToglerValue={navToglerValue} onClick={navTogglerBtn} >
        <SpanNavToggler color={skin} lightDarkMode={lightDarkMode}></SpanNavToggler>
      </NavToggler>



      <ul className="nav">
            <li><NavActive colorStatus={colorStatus("Home")} color={skin} lightDarkMode={lightDarkMode} href="#" onClick={()=>{navigate('/'); asideItemClick("Home")}}><i className="fa fa-home"></i>Home</NavActive></li>
            <li><NavActive colorStatus={colorStatus("About")} color={skin} lightDarkMode={lightDarkMode} href="#" onClick={()=>{navigate('/about'); asideItemClick("About")}}><i className="fa fa-user"></i>About</NavActive></li>
            <li><NavActive colorStatus={colorStatus("Services")} color={skin} lightDarkMode={lightDarkMode} href="#" onClick={()=>{navigate('/services'); asideItemClick("Services")}}><i className="fa fa-list"></i>Services</NavActive></li>
            <li><NavActive colorStatus={colorStatus("Portfolio")} color={skin} lightDarkMode={lightDarkMode} href="#" onClick={()=>{navigate('/portfolio'); asideItemClick("Portfolio")}}><i className="fa fa-briefcase"></i>Portfolio</NavActive></li>
            <li><NavActive colorStatus={colorStatus("Contact")} color={skin} lightDarkMode={lightDarkMode} href="#" onClick={()=>{navigate('/contact'); asideItemClick("Contact")}}><i className="fa fa-comments"></i>Contact</NavActive></li>
        </ul>
    </div>
  )
}

export default Aside
