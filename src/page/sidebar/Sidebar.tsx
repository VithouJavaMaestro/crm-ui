import styled from "styled-components";

import logo from "../../assets/flower.svg";
import {MenuItem} from "./MenuItem.tsx";
import {menuItems} from "../../utils/menuItem.ts";
// Styled Components
const SidebarContainer = styled.aside`
    height: 100vh;
    width: 250px;
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

export const SearchInput = styled.input`
    border-radius: 6px;
    background-color: #f5f5f5;
    background-image: url("../../assets/search.svg");
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
    scrollbar-width: thin;
    padding-right: 10px;
    margin-bottom: 30px;
`;


export const Sidebar = () => {

    return (
        <SidebarContainer>
            <LogoSection>
                <img src={logo} alt="logo" width={60}/>
                <LogoText>FLOWER</LogoText>
            </LogoSection>


            <SearchInput type="text" name="search" placeholder="Search anything" autoComplete={'off'}/>
            <MenuList>
                <MenuTitle>Menu items</MenuTitle>
                {menuItems.map((value, index) => {
                    return <MenuItem icon={value.icon} label={value.label} path={value.path} options={value.options}
                                     key={index}/>;
                })}
            </MenuList>
        </SidebarContainer>
    );
};
