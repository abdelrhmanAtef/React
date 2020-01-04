import React from 'react';
import {Creative,CrInfo,Title,TSpan,InfoH,InfoDec} from './AboutStyle';
const About = () => {
  return (
    <Creative>
    <div className="container">
        <CrInfo>
            <Title><TSpan>This is</TSpan> Me</Title>
            <InfoH>Creative Director</InfoH>
            <InfoDec>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDec>
            <InfoDec>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDec>
        </CrInfo>
    </div>
</Creative>
  );
}


export default About;
