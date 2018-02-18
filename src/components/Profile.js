import React from 'react';
import './style.css'

function Image(props){
  return(
     <img src={require('./images/' + props.name + '.jpg')} className="logoui"/>
  )
}

function Education(){
  return(
    <div className="container-fluid">
      <span className="fontsize32 underline"> <b> Educations </b> </span>
      <div className="row">
        <div className="mar-top col-md-2">
          <Image name="logoui"/>
        </div>
        <div className="mar-top col-md-8">
          <a href="http://www.ui.ac.id/"> <h2 className="fontsize24 colyellow"> <b>  Universitas Indonesia </b> </h2> </a>
          <h5> Depok, Indonesia </h5>
          <h4> Undergraduate Computer Science Student </h4>
        </div>
        <div className="mar-top2 col-md-2">
          <h4> June 2017-Now </h4>
        </div>
      </div>
    </div>
  )
}

function List(props){
  return(
    <li>{props.name} </li>
  )
}


function Work(props){
  const tags = props.tags;
  const listItems = tags.map((tag) =>
   <li className>{tag}</li>
  );
  const box = props.box;
  const boxes = box.map((boxes) =><span className="box fontsize18 marleft"> {boxes} </span>  );
  return(
    <div className="row">
      <div className="mar-top col-md-2">
        <Image name={props.image}/>
      </div>
      <div className="mar-top col-md-8">
      <a href={props.link}>  <h2 className={`fontsize24 ${props.color}`}> <b> {props.title} </b> </h2> </a>
        <h4> {props.position} </h4>
        <ul className="bgblack">
          {listItems}
        </ul>
        {boxes}
      </div>
      <div className="mar-top2 col-md-2">
        <h4> {props.time} </h4>
      </div>
    </div>
  )
}

function WorkExperiences(){
  const tags = {
     iatoki : ["- Prepare some problems to select Indonesia high school students to participate in IOI","- Teach some subject for preparation in IOI"],
     kiloin : ["- Working as BackEnd Software Engineer from scratch using django"],
     sirclo : ["- Adding some feature using PHP","- Create end to end test","- Create pipeline to create automated end to end test"],
   };
   const box ={
     iatoki : ["Competitive Programming","C++","Algorithm","Data Structure"],
     kiloin : ["React","Django","REST-API","SQL","JSX"],
     sirclo : ["Pipeline","Docker","Codeceptjs","PHP","Kubernetes","GCP"],
   }
  return(
    <div className="container-fluid mar-top">
      <span className="fontsize32 underline"> <b> Work Experiences </b> </span>
      <Work image="iatoki" title="IA TOKI" position="Scientific Committee" color="colred" time="February 2018 - Now" tags={tags.iatoki} box={box.iatoki}/>
      <Work image="kiloin" title="Kiloin.id" position="Part-Time Software Engineer" color="colgreen" time="February 2018 - Now" tags={tags.kiloin} box ={box.kiloin}/>
      <Work image="sirclo" title="Sirclo" position="Software Engineer Intern" color="colblue" link="https://www.sirclo.com/" time="January 2018 - February 2018" tags={tags.sirclo} box = {box.sirclo}/>
    </div>
  )
}

export default class Profile extends React.Component{
  render(){
    return(
        <div className="container-fluid mar-left mar-top3" id="profile">
            <Education/>
            <WorkExperiences/>
        </div>
    )
  }
}

export {Work};
