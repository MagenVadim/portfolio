import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from "react"
import {Logo, NavActive} from '../StylesComponent'

let collectionAsideItems = [
  {id:"Home", status:true},
  {id:"About", status:false},
  {id:"Services", status:false},
  {id:"Portfolio", status:false},
  {id:"Contact", status:false},
]

function Aside({skin, lightDarkMode}) {

  const[asideItems, setAsideItems] = useState(collectionAsideItems);


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

  return (
    <div className="aside">
      <div className="logo">
        <Logo color={skin} href="#"><span>M</span>agen</Logo>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
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
