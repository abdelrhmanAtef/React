import React ,{Component} from 'react';
import Home from './../Home/Home.js';
import Work from './../Work/Work.js';
import Portofolio from './../Portofolio/Portofolio.js';
import Profile from './../Profile/Profile.js';
import About from './../About/About.js';
import SocialMedia from './../SocialMedia/SocialMedia.js';
import Footer from './../Footer/Footer.js';

class Index extends Component {
render(){
  return (
    <div>
   <Home/>
   <Work/>
   <Portofolio/>
   <Profile/>
   <About/>
   <SocialMedia/>
   <Footer/>
    </div>
  );
}
}

export default Index;
