import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {useState} from "react"

const Logo = styled.a`
&:before{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-bottom: 5px solid ${(props)=> props.color};
  border-left: 5px solid ${(props)=> props.color};
  bottom: 0;
  left: 0;
}
&:after{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-top: 5px solid ${(props)=> props.color};
  border-right: 5px solid ${(props)=> props.color};
  top: 0;
  right: 0;
}
`
const NavActive = styled.a`
  font-weight: 600;
  display: block;
  border-bottom: 1px solid #e8dfec;  
  padding: 5px 15px;
  color: ${(props)=> props.colorStatus}         
`


let collectionAsideItems = [
  {id:"Home", color:true},
  {id:"About", color:false},
  {id:"Services", color:false},
  {id:"Portfolio", color:false},
  {id:"Contact", color:false},
]



function Aside({skin}) {

  const[asideItems, setAsideItems] = useState(collectionAsideItems);


  const navigate = useNavigate();

  const asideItemClick = (value)=>{
    let newCollection = collectionAsideItems.map((elem)=>{ 
      const container={}     
      if(elem.id===value){
        container['id']=elem.id;
        container['color']=true; 
        return container; 
      } else {
        container['id']=elem.id;
        container['color']=false;
        return container; 
      }     
    })  
    setAsideItems(newCollection)
  }

  const colorStatus = (id)=>{
    return id
    // asideItems.forEach((elem)=>{
    //   if(elem.id===id){
    //     console.log("id: " + id + " - status: " + elem.color)
    //     return elem.color        
    //   }
    // })
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
            <li><NavActive colorStatus={colorStatus("blue")} color={skin} href="#" onClick={()=>{navigate('/'); asideItemClick("Home")}}><i className="fa fa-home"></i>Home</NavActive></li>
            <li><NavActive colorStatus={colorStatus("About")} href="#" onClick={()=>{navigate('/about'); asideItemClick("About")}}><i className="fa fa-user"></i>About</NavActive></li>
            <li><NavActive colorStatus={colorStatus("Services")} href="#" onClick={()=>{navigate('/services'); asideItemClick("Services")}}><i className="fa fa-list"></i>Services</NavActive></li>
            <li><NavActive colorStatus={colorStatus("Portfolio")} href="#" onClick={()=>{navigate('/portfolio'); asideItemClick("Portfolio")}}><i className="fa fa-briefcase"></i>Portfolio</NavActive></li>
            <li><NavActive colorStatus={colorStatus("Contact")} href="#" onClick={()=>{navigate('/contact'); asideItemClick("Contact")}}><i className="fa fa-comments"></i>Contact</NavActive></li>
        </ul>
    </div>
  )
}

export default Aside
