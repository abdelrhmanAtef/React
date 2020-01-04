import styled from "styled-components";

export const ProfileSection=styled.div`
    padding: 50px 0;
    overflow: hidden;
`;

export const Profilee=styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
            width: 100%;
            float: none;
            margin-bottom: 20px
    }
`;

export const ProfileList=styled.ul`
    list-style: none
`;

export const ProfileItem=styled.li`
    margin-bottom: 8px
`;

export const ItenSpan=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`;

export const WebSpan=styled.span`
    font-weight: normal;
    color: #eb5424
`

export const SkillSection=styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    }
`;

export const SkillDesc=styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`;

export const Bar=styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`;

export const Title=styled.span`
    float: left;
`;

export const Prec=styled.span`
    float: right;
    margin-right: 100px
`;

export const Parent=styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`;

export const Pspan=styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props=>props.sp1 ? '100%' : ''};
    width:${props=>props.sp2 ? '90%' : ''};
    width:${props=>props.sp3 ? '80%' : ''};
    width:${props=>props.sp4 ? '70%' : ''};
`;

