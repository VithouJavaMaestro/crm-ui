import styled from "styled-components";
import menuIcon from "../../assets/menu.svg";
import searchIcon from "../../assets/search.svg";
import reminderIcon from "../../assets/reminder.svg";
import {useDispatch} from "react-redux";
import {expandSidebar} from "../../apps/slice/action.ts";
import {useAppSelector} from "../../apps/hooks.ts";
import {useRef, useState} from "react";
import {Avatar} from "../../component/Avatar.tsx";
import vithou from "../../assets/vithou.jpg";
import profileOptionIcon from "../../assets/profile/profileOptions.svg";
import {Option} from "./Option.tsx";
import profileIcon from "../../assets/profile/profile.svg";
import messageIcon from "../../assets/profile/message.svg";
import taskIcon from "../../assets/profile/task.svg";
import settingIcon from "../../assets/profile/setting.svg";
import lockIcon from "../../assets/profile/lock.svg";
import logoutIcon from "../../assets/profile/logout.svg";
import {useClickAway} from "react-use";
import {sendLogout} from "../../utils/redirect.ts";

export const Header = () => {
    const dispatch = useDispatch();
    const action = useAppSelector(state => state.action);
    const [click, setClick] = useState(false);
    const [clickProfile, setClickProfile] = useState(false);
    const profileRef = useRef(null);


    useClickAway(profileRef, () => {
        setClickProfile(false);
    });

    return <HeaderContainer>
        <img src={menuIcon} alt="" style={{
            alignSelf: "center",
            cursor: 'pointer',
        }} onClick={() => {
            dispatch(expandSidebar(!action.expandedSidebar))
            setClick(!click);
        }}/>
        <ActionContainer>
            <img src={searchIcon} alt="searchIcon"/>
            <img src={reminderIcon} alt="reminderIcon"/>
            <VerticalDivider/>
            <Avatar src={vithou} alt="" width={50}/>
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
                            <Avatar src={vithou}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <span>
                                Vithou Then
                            </span>
                                <span>
                                Manager
                            </span>
                            </div>
                        </ProfileDetailContainer>
                        <HorizontalDivider/>
                        <Option icon={profileIcon} label={'My Profile'}/>
                        <Option icon={messageIcon} label={'My Message'}/>
                        <Option icon={taskIcon} label={'My Task'}/>
                        <HorizontalDivider/>
                        <Option icon={settingIcon} label={'My Setting'}/>
                        <Option icon={lockIcon} label={'Lock Screen'}/>
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
    justify-content: space-between;
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
    top: 50px;
    border-radius: 20px;
    border: 3px solid #F5F5F5;
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
