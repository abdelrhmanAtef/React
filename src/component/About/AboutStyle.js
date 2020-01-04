import styled from "styled-components";

export const Creative=styled.div`
    height: 500px;
    background-image: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
            height: auto
        }
`;

export const CrInfo=styled.div`
    width: 50%;
    float: right;
    @media (max-width:991px) {
            width: 100%;
            padding-top: 10px;
            float: none;
    }
    
        
`;

export const Title=styled.h4`
    font-weight: bold;
    font-size: 50px;
    @media (max-width:991px) {
            font-size: 30px
        }
`;

export const TSpan=styled.span`
    font-weight: normal
`;

export const InfoH=styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px
    `;

export const InfoDec=styled.p`
    color: #000;
    margin-bottom: 20px;
    line-height: 1.8
`;

    
 