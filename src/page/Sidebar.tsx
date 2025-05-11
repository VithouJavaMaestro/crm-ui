import styled from "styled-components";
import {useLocation, useNavigate} from "react-router";

import logo from "../../public/flower.svg";
import dashboardIcon from "../../public/dashboard.svg";
import ecommerceIcon from "../../public/ecommerce.svg";
import calenderIcon from "../../public/calender.svg";
import mailIcon from "../../public/mail.svg";
import chatIcon from "../../public/chat.svg";
import taskIcon from "../../public/task.svg";
import noteIcon from "../../public/note.svg";
import fileManagerIcon from "../../public/filemanager.svg";
import contactIcon from "../../public/contact.svg";
import React from "react";

// Styled Components
const SidebarContainer = styled.aside`
    height: 100vh;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-right: 2px solid #f5f5f5;
`;

const LogoSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
    padding-left: 20px;
`;

const LogoText = styled.h4`
    font-size: 24px;
`;

const SearchInput = styled.input`
    border-radius: 6px;
    background-color: #f5f5f5;
    background-image: url("../../public/search.svg");
    background-repeat: no-repeat;
    background-position: 10px center;
    box-sizing: border-box;
    border: 1px solid transparent;
    outline: none;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 40px;
`;

const MenuTitle = styled.span`
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    color: #a7aaad;
    padding-left: 20px;
    padding-bottom: 20px;
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: auto;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
    overflow-scrolling: auto;
    padding-right: 10px;
    margin-bottom: 30px;
`;

const MenuItemWrapper = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    height: 50px;
    margin-left: ${p => p.active ? 10 : 20}px;
    border-radius: 8px;
    padding-left: ${p => p.active ? 10 : 0}px;
    background: ${(p) => (p.active ? "#B9EB8E" : "transparent")};
`;

const ActiveIndicator = styled.div`
    width: 5px;
    height: 44px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: red;
`;

const MenuLabel = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: #1d2025;
    align-self: center;
`;

// Types
interface MenuItemProps {
    label: string;
    icon: string;
    path: string;
}

// Component: Sidebar Menu Item
const MenuItem = ({label, icon, path}: MenuItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const active = location.pathname === path;

    return (
        <div style={{display: "flex"}}>
            {active && <ActiveIndicator/>}
            <MenuItemWrapper active={active} onClick={() => navigate(path)}>
                <img src={icon} alt={label} width="20"/>
                <MenuLabel>{label}</MenuLabel>
            </MenuItemWrapper>
        </div>
    );
};

// Component: Sidebar
export const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <LogoSection>
                <img src={logo} alt="logo" width={60}/>
                <LogoText>FLOWER</LogoText>
            </LogoSection>


            <SearchInput type="text" name="search" placeholder="Search anything" autoComplete={'off'}/>

            <MenuList>
                <MenuTitle>Menu items</MenuTitle>
                <MenuItem icon={dashboardIcon} label="Dashboard" path="/"/>
                <MenuItem icon={ecommerceIcon} label="E-Commerce" path="/ecommerce"/>
                <MenuItem icon={calenderIcon} label="Calendar" path="/calender"/>
                <MenuItem icon={mailIcon} label="Mail" path="/mail"/>
                <MenuItem icon={chatIcon} label="Chat" path="/chat"/>
                <MenuItem icon={taskIcon} label="Task" path="/task"/>
                <MenuItem icon={fileManagerIcon} label="File Manager" path="/file-manager"/>
                <MenuItem icon={noteIcon} label="Notes" path="/note"/>
                <MenuItem icon={contactIcon} label="Contacts" path="/contact"/>

            </MenuList>
        </SidebarContainer>
    );
};
