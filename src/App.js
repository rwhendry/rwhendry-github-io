import React,{components} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Projects from './components/Projects'
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './components/style.css'


export default class App extends React.Component{
    constructor(props){
      super(props);
      document.title = "Reynaldo Wijaya";
    }
    render(){
      return(
       <div className="bg-black">
          <Navbar/>
          <Home/>
          <Profile/>
          <Projects/>
          <Achievements/>
          <Footer/>
        </div>
      )
    }
}
