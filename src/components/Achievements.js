import React from 'react';
import './style.css'

function Achievement(props){
  return(
    <div className="container-fluid mar-top">
        <span className={`fontsize24 ${props.color}`}> <b> {props.title} </b> </span> <span className="fontsize24"> - </span> <span className="fontsize24"> {props.position} </span>
        <div className ="fontsize18 marrtop"> {props.description} </div>
        <div className="fontsize18 marrtop"> {props.team} </div>
    </div>
  )
}

function Achi(){
  const achievements ={
    ACM2017:{
      title: "ACM-ICPC Jakarta 2017",
      position: "Finalist (Top 12 National Team)",
      description: "An ICPC Programming Style held by ACM in Jakarta competed with 80 teams from Asia Pacific Region",
      team:"Team Profile: Alfura is Back - Alfian Fuadi Rafli, Muhammad Indra Ramadhan, Reynaldo Wijaya Hendry",
    },
    Compfest9:{
      color: "colblue",
      title: "Senior Competitive Programming Contest Compfest 9",
      position: "Honorable Mention",
      description: "Placed 5th in Competitive Programming Competition held by Faculty of Computer Science Universitas Indonesia",
      team:"Team Profile: Bersaw - Muhammad Indra Ramadhan, Daniel Alfred, Reynaldo Wijaya Hendry",
    },
    TOKI:{
      color: "colred",
      title: "National Training Camp by TOKI",
      position: "Top 10",
      description: "National Training Camp is an event to choose the 4 best High School Students to participate in International Olympiad in Informatics (IOI)",
    },
    Compfest8:{
      color: "colblue",
      title: "Junior Competitive Programming Contest Compfest 8",
      position: "Honorable Mention",
      description: "Placed 5th in Competitive Programming Competition held by Faculty of Computer Science Universitas Indonesia",
      team:"",
    },
    OSN:{
      color:"colyellow",
      title: "National Science Olympiad In Informatics 2016",
      position : "Silver Medal",
      description:"Placed 9th in Competitive Programming Competition held by Kementrian Pendidikan dan Kebudayaan Indonesia (Ministry of Education and Culture)",
    },
  };
  return(
    <div className="container-fluid">
      <Achievement title={achievements.ACM2017.title} position={achievements.ACM2017.position} description={achievements.ACM2017.description} team={achievements.ACM2017.team}/>
      <Achievement title={achievements.Compfest9.title} position={achievements.Compfest9.position} description={achievements.Compfest9.description} team={achievements.Compfest9.team} color ={achievements.Compfest9.color}/>
      <Achievement title={achievements.TOKI.title} position={achievements.TOKI.position} description={achievements.TOKI.description} team={achievements.TOKI.team} color ={achievements.TOKI.color}/>
      <Achievement title={achievements.Compfest8.title} position={achievements.Compfest8.position} description={achievements.Compfest8.description} team={achievements.Compfest8.team} color ={achievements.Compfest8.color}/>
      <Achievement title={achievements.OSN.title} position={achievements.OSN.position} description={achievements.OSN.description} team={achievements.OSN.team} color ={achievements.OSN.color}/>
    </div>
  )
}

export default class Achievements extends React.Component{
  render(){
    return(
      <div className="container-fluid mar-top mar-left" id="achievements">
        <span className="fontsize32 underline"> <b> Achievements </b> </span>
        <Achi/>
      </div>
    )
  }
}
