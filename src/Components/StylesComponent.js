import styled from 'styled-components';

export const Frame = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  text-align: center;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;

&:before{
  content: '';
  position: absolute;
  height: 80px;
  width: 80px;
  border-top: 10px solid ${(props)=> props.color};
  border-left: 10px solid ${(props)=> props.color};
  left: 20px;
  top: -50px;
    @media (max-width:990px){
      height: 40px;
      width: 40px;
      left: 20px;
      top: 70px;
  }
}

&:after{
  content: '';
  position: absolute;
  height: 80px;
  width: 80px;
  border-bottom: 10px solid ${(props)=> props.color};
  border-right: 10px solid ${(props)=> props.color};
  right: 20px;
  bottom: -40px;
    @media (max-width:990px){
      height: 40px;
      width: 40px;
      left: 140px;
      top: 240px;
  }
}

& img{
  margin:auto;
  height: 400px;
  border-radius: 5px;
    @media (max-width:990px){
      margin-top: 100px;
      height: 150px;
}
}
`

export const Btn = styled.a`
  font-weight: 500;
  padding: 12px 35px;
  background-color: ${(props)=> props.color};
  color: white;
  border-radius: 40px;
  display: inline-block;
  white-space: nowrap;
  transition: all .3s ease;
  border: none;
  cursor: pointer;
  
&:hover{
  transform: scale(1.05);
}
`
export const BtnContact = styled.button`
  font-weight: 500;
  font-size: 18px;
  padding: 12px 35px;
  background-color: ${(props)=> props.color};
  color: white;
  border-radius: 40px;
  display: inline-block;
  white-space: nowrap;
  transition: all .3s ease;
  border: none;
  type:${(props)=> props.type};
  cursor: pointer;
  margin-right: 20px;
&:hover{
  transform: scale(1.05);
}
&:disabled{
  cursor: auto;
  transform: none;
  opacity: .4;
}
`

export const Span = styled.span`
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  font-weight: 700;
  color: ${(props)=> props.color};
`
export const Typing = styled.span`
  color: ${(props)=> props.color};
`

export const ProgressIn = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 4px;
  background-color: ${(props)=> props.color};
  width: ${(props)=> props.percent};
`
export const CircleDot = styled.div`
  position: absolute;
  left:0;    
  top:0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
`
export const TimelineItem = styled.div`
  position: relative;
  padding-left: 37px;
  padding-bottom: 20px;
&:last-child{
  padding-bottom: 0;
}
&:before{
  content: '';
  width: 1px;
  position: absolute;
  height: 100%;
  left:7px;
  top:0;
  background-color: ${(props)=> props.color};
}
`
export const Icon = styled.i`
  font-size: 40px;
  line-height: 60px;
  color: ${(props)=> props.color};
  transition: all .3S ease;
  className: ${(props)=> props.className}
&:hover{
  font-size: 25px;
  color: #ffffff;
}
`
export const ServiceItemInner = styled.div`
  background-color: ${(props)=> props.lightDarkMode.bg_black_100};
  border: 1px solid ${(props)=> props.lightDarkMode.bg_black_50};
  border-radius: 10px;
  padding: 30px 15px;
  text-align: center;
  transition: all .3S ease;
&:hover{
  box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
}
`
export const HeaderQuestion=styled.h3`
  color: ${(props)=> props.color};
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
`
export const ContactIcon = styled.i`
  font-size: 25px;
  color: ${(props)=> props.color};
  className: ${(props)=> props.className}
`


export const Logo = styled.a`
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
export const NavActive = styled.a`
  font-weight: 600;
  display: block;
  border-bottom: 1px solid #e8dfec;  
  padding: 5px 15px;
  color: ${(props)=> props.colorStatus ? props.color : props.lightDarkMode.text_black_900}         
`

export const Lines = styled.h2`
    font-size: 40px;
    color: ${(props)=> props.lightDarkMode.text_black_900};
    font-weight: 700;
    position: relative;

&:before{
    content: '';
    height: 4px;
    width: 50px;
    background-color: ${(props)=> props.color};
    position: absolute;
    top: 100%;
    left:0;
}    
&:after{
    content: '';
    height: 4px;
    width: 25px;
    background-color: ${(props)=> props.color};
    position: absolute;
    top: 100%;
    left:0;
    margin-top: 8px;
}
`


export const NavToggler = styled.div`
  height: 40px;
  width: 45px;
  border: 1px solid ${(props)=> props.lightDarkMode.bg_black_50};
  cursor: pointer;
  position: fixed;
  left: 300px;
  top: 20px;
  border-radius: 5px;
  background: ${(props)=> props.lightDarkMode.bg_black_100};
  display: none;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
@media (max-width:1200px){
  display:flex;
  left: ${(props)=> props.navToglerValue.left};
  }
`

export const SpanNavToggler = styled.span`
  height: 2px;
  width: 18px;
  background: ${(props)=> props.color};
  display: inline-block;
  position: relative;
&:before{
  content: '';
  height: 2px;
  width: 18px;
  background: ${(props)=> props.color};
  position: absolute;
  top: -6px;
  left: 0;
}
&:after{
  content: '';
  height: 2px;
  width: 18px;
  background: ${(props)=> props.color};
  position: absolute;
  top: 6px;
  left: 0;
}
`

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  color: ${(props)=> props.lightDarkMode.text_black_900};

  background-color: ${(props)=> props.lightDarkMode.bg_black_900};
  min-height: 100vh;
  // display: block;
  opacity: 1;
  padding: 0 30px;
  position: fixed;
  left: ${(props)=> props.navToglerValue.SectionLeftWide};
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all .3s ease;
@media (max-width:1200px){
  left: ${(props)=> props.navToglerValue.SectionLeft1200};
}
`