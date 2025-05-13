import styled from "styled-components";
import flower from "../../assets/flower.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import ecommerceIcon from "../../assets/ecommerce.svg";
import calenderIcon from "../../assets/calender.svg";
import mailIcon from "../../assets/mail.svg";
import chatIcon from "../../assets/chat.svg";
import taskIcon from "../../assets/task.svg";
import fileManagerIcon from "../../assets/filemanager.svg";
import noteIcon from "../../assets/note.svg";
import contactIcon from "../../assets/contact.svg";
import {useLocation, useNavigate} from "react-router";
import {Tooltip} from "react-tooltip";

const SidebarContainer = styled.aside`
    height: 100vh;
    width: 65px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-right: 2px solid #f5f5f5;
    align-items: center;
    padding: 30px;
`;

interface MenuItemProps {
    icon: string,
    path: string,
    label: string,
}

const MenuItemContainer = styled.div<{active: boolean}>`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    background-color: ${props => props.active && "#B9EB8E" };
    border-radius:  ${props => props.active && 8 }px;

    &:focus, &:hover {
        background-color: #B9EB8E;
        border-radius: 8px;
    }
`

const MenuItem = ({icon, path, label}: MenuItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const active = location.pathname === path;
    return (
        <>
            <MenuItemContainer active={active} onClick={() => navigate(path)} data-tooltip-id={label}>
                <img src={icon} alt={icon.toString()} width={20} height={20} color={'#FFFFFF'}/>
            </MenuItemContainer>
            <Tooltip content={label}  variant={'info'} id={label} arrowColor={'#21943A'} style={{
                backgroundColor: '#21943A'
            }}/>
        </>
    )
}

export const CompactSidebar = () => {
    return (
        <SidebarContainer className={'slide-left'}>
        <img src={flower} alt=""/>
            <MenuItem icon={dashboardIcon} path="/" label={"Dashboard"}/>
            <MenuItem icon={ecommerceIcon} path="/ecommerce" label={"Ecommerce"} />
            <MenuItem icon={calenderIcon} path="/calender" label={"Calender"}/>
            <MenuItem icon={mailIcon} path="/mail" label={"Mail"} />
            <MenuItem icon={chatIcon} path="/chat" label={"Chat"} />
            <MenuItem icon={taskIcon} path="/task" label={"Task"}/>
            <MenuItem icon={fileManagerIcon} path="/file-manager" label={"FileManager"}/>
            <MenuItem icon={noteIcon} path="/note" label={"Note"}/>
            <MenuItem icon={contactIcon} path="/contact" label={"Contact"}/>
        </SidebarContainer>
    )
}