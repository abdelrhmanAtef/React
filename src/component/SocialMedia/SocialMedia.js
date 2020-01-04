import React from 'react';
import axios from 'axios';
import {SocialSection,Social,Icon,Span,SocailDesc} from './Social';
class SocialMedia extends React.Component {
  state={
    social:[]
  }
 componentDidMount(){
   axios.get("js/data.json").then(res=>{this.setState({social:res.data.social})})
 }
 render(){
   const social=this.state.social;
   const List=social.map((socialItem)=>{
     return(
      <Social item={socialItem.id} key={socialItem.id}>
      <Icon className={socialItem.icon}></Icon>
      <SocailDesc>
     <Span>{socialItem.title}</Span>
     <Span>{socialItem.body}</Span>
      </SocailDesc>
  </Social>
     )
   })
  return (
    <SocialSection>
            {List}
 
    
</SocialSection>
  );
 }
 
}


export default SocialMedia;
