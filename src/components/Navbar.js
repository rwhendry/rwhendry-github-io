import React from 'react';
import './style.css'
import rey1 from './images/rey1.jpg'

function Logo(){
  return(
    <img src={rey1} className="circle-img"/>
  )
}

function NavButton(props){
  return <li className = "Nav-li"> <a href={"#"+props.link}> {props.name} </a> </li>
}

export default class Navbar extends React.Component{
    render(){
      return(
        <ul class="navbar navbar-fixed-top">
          <Logo/>
          <NavButton name="Achievements" link="achievements"/>
          <NavButton name="Projects" link="projects"/>
          <NavButton name="Profile" link="profile"/>
          <NavButton name="Home" link="home"/>
        </ul>
      )
    }
}
