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
}
& img{
  margin:auto;
  height: 400px;
  border-radius: 5px;
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

&:hover{
  transform: scale(1.05);
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
  background-color: #fdf9ff;
  border: 1px solid #e8dfec;
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