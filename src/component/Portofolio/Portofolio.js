import React from 'react';
import axios from 'axios';
import {PortoSection,PortH2,Span,PortUl,PortLi,ImageWrap,Image,OverLay,OverSpan} from './PortofolioStyle';
class Portofolio extends React.Component {
  state={
    info:[]
  }
  componentDidMount=()=>{
    axios.get("js/data.json").then(res=>{this.setState({info:res.data.portfolio})})
  }
 render(){
   const info=this.state.info;
   const list=info.map((backet)=>{
     return(
      <ImageWrap key={backet.id}>
      <Image  src={backet.image} alt=""/>
      <OverLay>
        <OverSpan>
            Show Image
        </OverSpan>
    </OverLay>
      </ImageWrap>
     )
   })
  return (
    <PortoSection>
    <PortH2><Span>My</Span> Portfolio</PortH2>
    <PortUl>
        <PortLi active>All</PortLi>
        <PortLi>HTML</PortLi>
        <PortLi>Photoshop</PortLi>
        <PortLi>Wordpress</PortLi>
        <PortLi>Mobile</PortLi>
    </PortUl>
    
    <div className="box">
        
      {list}
        
       
    </div>
    
</PortoSection>

  );
 }
  
}


export default Portofolio;
