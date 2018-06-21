import React from 'react';
import './style.css'


function Proj(props){
  const tags = props.tags;
  const box = props.box;
  const boxes = box.map((boxes) =><span className="box fontsize18 marleft"> {boxes} </span>  );
  return(
    <div className="row">
      <div className="mar-top col-md-12">
      <img src={require('./images/' + props.photo + '.jpg')} className="project-photo"/>
      <a href={props.link}>  <h2 className={`fontsize24 ${props.color}`}> <b> {props.title} </b> </h2> </a>
        <ul className="bgblack">
          {tags.map((tag) =>
           <li className>{tag}</li>
          )}
        </ul>
        {boxes}
      </div>
    </div>
  )
}

function Pro(){
  const projects = {
      rwhendry : {
        title: "Portofolio (rwhendry.github.io)",
        link : "rwhendry.github.io",
        tags : ["- A Portofolio that made using React"],
        box : ["React","JSX","CSS","Bootstrap","HTML"],
        photo: "rwhendry1",
        color: "colwhite",
      },
      simpanpesan: {
        title: "Simpan Pesan (simpanpesan.herokuapp.com)",
        link : "https://simpanpesan.herokuapp.com",
        tags :["- A Saved Message Web"],
        box : ["Go", "React", "REST-API", "Gin", "Bootstrap", "Postgre"],
        photo: "savedmessage",
        color : "colwhite",
      },
      tictactoe: {
        title : "Tic Tac Toe (reygames.herokuapp.com)",
        link : "https://reygames.herokuapp.com",
        tags : ["- A simple Tic Tac Toe made using React"],
        box : ["React", "Bootstrap", "JSX", "HTML", "CSS"],
        photo: "tictactoe",
        color : "colwhite",
      },
  };
  return(
    <div className="container-fluid middle mar-top">
      <Proj {...projects.rwhendry}/>
      <Proj {...projects.simpanpesan}/>
      <Proj {...projects.tictactoe}/>
     </div>
  )
}

export default class Projects extends React.Component{
  render(){
    return (
      <div className="container-fluid margintop mar-left" id="projects">
        <span className="fontsize32 underline"> <b> Projects </b> </span>
        <Pro/>
      </div>
    )
  }
}
