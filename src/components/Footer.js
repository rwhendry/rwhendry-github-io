import React from 'react';
import './style.css'

function Image(props){
  return(
     <img src={require('./images/' + props.name + '.jpg')} className="logofooter"/>
  )
}
export default class Footer extends React.Component{
  render(){
    return(
      <div className="container-fluid mar-top bg-white" >
        <h1 className="fontsize14"> Created by Reynaldo Wijaya Hendry using React</h1> <a onclick="" class="btn btn-social-icon btn-lg btn-facebook"><i class="fa fa-facebook"></i></a>
        <div>
          <a href="https://www.linkedin.com/in/rwhendry/"> <Image name="linkedin"/></a>
          <a href="https://www.facebook.com/reynaldo.wijaya.3"> <Image name="facebook"/></a>
        </div>
      </div>
    )
  }
}
