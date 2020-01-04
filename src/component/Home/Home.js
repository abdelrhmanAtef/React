import React from 'react';
import {HomeSection,HomeInfo,HomeH2,HomeH4,HomeP,HomeSpan,HomeBtn} from './homeStyle'
const Home = () => {

  return (
    <HomeSection>
    <div className="container">
        <HomeInfo>
            <HomeH2>AbdelRhman Atef </HomeH2>
            <HomeH4>Creative Director</HomeH4>
            <HomeP>
                Iam a professional <HomeSpan>UX Designer</HomeSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeP>
            <HomeBtn>Let's Begin</HomeBtn>
        </HomeInfo>
    </div>
</HomeSection>
  );
}


export default Home;
