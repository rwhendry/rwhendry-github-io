import React from 'react';

function Arrow(){
  return(
    <div className ="arrow fontsize48"> v </div>
  )
}

function Welcome(){
  return(
      <div className = "fontsize64 padtop5 mar-top4"> Welcome </div>
    )
}

function Middle(){
  return(
    <div className = "middle">
        <span className = "fontsize48"> Hi, My Name is </span>
        <br/>
        <span className = "fontsize64 ubahwarna aa"> Reynaldo Wijaya Hendry </span>
        <Welcome/>
        <Arrow/>
    </div>
  )
}

export default class Home extends React.Component{
  render(){
    return(
      <div className="container-fluid" id="home">
        <Middle/>
      </div>
    )
  }
}
