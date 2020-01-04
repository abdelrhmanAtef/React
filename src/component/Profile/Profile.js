import React from 'react';
import {ProfileSection,Profilee,ProfileList,ProfileItem,ItenSpan,WebSpan,
SkillSection,SkillDesc,Bar,Title,Prec,Parent,Pspan} from'./ProfileStyle';
import './../Profile/ProfileStyle';
const Profile = () => {

  return (
    <ProfileSection>
    <div className="container">
        <Profilee>
            <h2 className="profile-title"><span>My </span>Profile</h2>
            <ProfileList>
                <ProfileItem>
                    <ItenSpan>Name</ItenSpan>
                    AbdelRhman Atef Mohamed 
                </ProfileItem>
                <ProfileItem>
                    <ItenSpan>Birthday</ItenSpan>
                    10/06/1996
                </ProfileItem>
                <ProfileItem>
                    <ItenSpan>Address</ItenSpan>
                    ZagaZig
                </ProfileItem>
                <ProfileItem>
                    <ItenSpan>Phone</ItenSpan>
                    01280023364
                </ProfileItem>
                <ProfileItem>
                    <ItenSpan>Email</ItenSpan>
                    bodyatef29@gmail.com
                </ProfileItem>
                <ProfileItem>
                    <ItenSpan>Website</ItenSpan>
                    <WebSpan>www.google.com</WebSpan>
                </ProfileItem>
            </ProfileList>
        </Profilee>
        
        <SkillSection>
            <h2 className="skills-title">Some <span>skills</span></h2>
            <SkillDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillDesc>
            <Bar>
                <Title>Bootstrap</Title>
                <Prec>100%</Prec>
                <Parent>
                    <Pspan sp1></Pspan>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>CSS3</Title>
                <Prec>90%</Prec>
                <Parent>
                    <Pspan sp2></Pspan>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>HTML5</Title>
                <Prec>80%</Prec>
                <Parent>
                    <Pspan sp3></Pspan>
                </Parent>
            </Bar>
            <Bar>
                <Title>JAVASCRIPT/JQUERY</Title>
                <Prec>80%</Prec>
                <Parent>
                    <Pspan sp3></Pspan>
                </Parent>
            </Bar>
            <Bar>
                <Title>React</Title>
                <Prec>70%</Prec>
                <Parent>
                    <Pspan sp4></Pspan>
                </Parent>
            </Bar>
        </SkillSection>
        
    </div>
</ProfileSection>

  );
}


export default Profile;
