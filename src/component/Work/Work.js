import React from 'react';
import axios from 'axios';
import {WorkSection,WorkH2,WorkSpan,WorkI,Part,WorkH4,HR,Paragraph} from './../Work/WorkStyle';
class Work extends React.Component {
       state={
           works:[]
       }
        componentDidMount =()=>{
        axios.get("js/data.json").then(res=>{this.setState({works:res.data.works})})
       }
       render(){ 
           const works=this.state.works;
           const worksList=works.map((workitem)=>{
               return(
                <Part first={workitem.id} key={workitem.id}> 
                <WorkI className={workitem.icon_name}></WorkI>
               <WorkH4>{workitem.title}</WorkH4>
                <HR/>
                <Paragraph>
                    {workitem.body}
                </Paragraph>
            </Part>
               )
           })
    return (
        <WorkSection>
        <div className="container">
            <WorkH2><WorkSpan>My</WorkSpan> Work</WorkH2>
          {worksList}
            
        </div>
    </WorkSection>
      );
   }
 
}


export default Work;
