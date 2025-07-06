import styled from "styled-components";
import searchIcon from "../../assets/search.svg";
import reminderIcon from "../../assets/reminder.svg";
import {useRef, useState} from "react";
import {Profile} from "../../component/Profile.tsx";
import vithou from "../../assets/vithou.jpg";
import profileOptionIcon from "../../assets/profile/profileOptions.svg";
import {Option} from "./Option.tsx";
import profileIcon from "../../assets/profile/profile.svg";
import logoutIcon from "../../assets/profile/logout.svg";
import {useClickAway} from "react-use";
import {sendLogout} from "../../utils/redirect.ts";

export const Header = () => {
    const [clickProfile, setClickProfile] = useState(false);
    const profileRef = useRef(null);


    useClickAway(profileRef, () => {
        setClickProfile(false);
    });

    return <HeaderContainer>

        <ActionContainer>
            <img src={searchIcon} alt="searchIcon"/>
            <img src={reminderIcon} alt="reminderIcon"/>
            <VerticalDivider/>
            <Profile src={vithou} alt="" width={50} height={50}/>
            <div style={{
                display: 'flex'
            }}>
                <h4>Vithou Then</h4>
                <div style={{
                    position: 'relative'
                }} ref={profileRef}>
                    <img src={profileOptionIcon} alt="" width={22} onClick={() => {
                        setClickProfile(!clickProfile);
                    }} style={{
                        cursor: 'pointer',
                    }}/>
                    {clickProfile && <ProfileContainer>
                        <ProfileDetailContainer>
                            <Profile src={vithou} width={50} height={50}/>
                            <span style={{
                                alignSelf: 'center'
                            }}>
                                Vithou Then
                            </span>
                        </ProfileDetailContainer>
                        <HorizontalDivider/>
                        <Option icon={profileIcon} label={'My Profile'}/>
                        <HorizontalDivider/>
                        <Option icon={logoutIcon} label={'Logout'} css={{
                            marginBottom: 8
                        }} handleClick={() => {
                            sendLogout();
                        }}/>
                    </ProfileContainer>}
                </div>
            </div>

        </ActionContainer>
    </HeaderContainer>
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid #F5F5F5;
`;

const VerticalDivider = styled.div`
    width: 3px;
    background-color: #F5F5F5;
    align-self: normal;
`;

const HorizontalDivider = styled.hr`
    border: 1px solid #F5F5F5;
`

const ActionContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const ProfileContainer = styled.div`
    width: 290px;
    height: auto;
    position: absolute;
    right: 10px;
    top: 60px;
    border-radius: 20px;
    border: 1px solid #F5F5F5;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ProfileDetailContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    margin-left: 30px;
`;
