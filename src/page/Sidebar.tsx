import styled from "styled-components";
import note from "../../public/note.svg";
import flower from "../../public/flower.svg";
import {Box} from "./Box.tsx";
import dashboardIcon from "../../public/dashboard.svg";
import {Stack} from "./Stack.tsx";
import ecommerceIcon from "../../public/ecommerce.svg";
import calenderIcon from "../../public/calender.svg";
import mailIcon from "../../public/mail.svg";
import chatIcon from "../../public/chat.svg";
import taskIcon from "../../public/task.svg";
import fileManagerIcon from "../../public/filemanager.svg";
import contactIcon from "../../public/contact.svg";
import {useLocation, useNavigate} from "react-router";

const SideBarContainer = styled.div`
    height: 100vh;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-right: 2px solid #F5F5F5;
    padding: 30px;
`

const ItemTitle = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: #1D2025;
    align-self: center;
`;

const SearchInput = styled.input`
    border-radius: 6px;
    background-color: #F5F5F5;
    background-image: url("/public/search.svg");
    background-repeat: no-repeat;
    background-position: 10px center;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    border: 1px solid transparent;
    outline: none;
    padding-left: 40px;
`

const MenuTitle = styled.span`
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    color: #A7AAAD;
    padding-left: 10px;
`;

const MenuItemWrapper = styled.div<{ active: boolean }>`
    display: flex;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    height: 50px;
    margin-left: ${p => p.active ? "15px": "30px"} ;
    border-radius: 8px;
    padding-left: 10px;
    background: ${p => p.active ? "#B9EB8E" : "#FFFFF"};
`;


interface MenuItemProps {
    label: string,
    icon: string,
    path: string,
}


const MenuItem = ({label, icon, path}: MenuItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const active = location.pathname === path;
    return <div  style={{
        display: "flex",
        marginLeft: -30,
        gap: 10
    }}>
        {active &&  <div style={{
            width: 5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: 'red',
            height: 44,
            position: 'relative',
        }}> </div>}
        <MenuItemWrapper active={active} onClick={() => navigate(path)}>
            <img src={icon} alt={label} width={'20px'}/>
            <ItemTitle>{label}</ItemTitle>
        </MenuItemWrapper>
    </div>
}

export const Sidebar = () => {

    return <SideBarContainer>
        <Box style={{
            gap: 10,
        }}>
            <img src={flower} alt="" width={60}/>
            <h4 style={{
                fontSize: 24,
                alignSelf: 'center'
            }}>
                FLOWER
            </h4>
        </Box>
        <div style={{
            width: "100%",
        }}>
            <SearchInput type={'text'} name={'search'} placeholder={'Search anything'}/>
        </div>
        <Stack style={{
            gap: 10
        }}>
            <MenuTitle>menu item</MenuTitle>
                <MenuItem icon={dashboardIcon} label={'Dashboard'} path={'/'}/>
            <MenuItem icon={ecommerceIcon} label={'E-Commerce'} path={'/ecommerce'}/>
            <MenuItem icon={calenderIcon} label={'Calendar'} path={'/calender'}/>
            <MenuItem icon={mailIcon} label={'Mail'} path={'/mail'}/>
            <MenuItem icon={chatIcon} label={'Chat'} path={'/chat'}/>
            <MenuItem icon={taskIcon} label={'Task'} path={'/task'}/>
            <MenuItem icon={fileManagerIcon} label={'File Manager'} path={'/file-manager'}/>
            <MenuItem icon={note} label={'Notes'} path={'/note'}/>
            <MenuItem icon={contactIcon} label={'Contacts'} path={'/contact'}/>
        </Stack>
    </SideBarContainer>
}