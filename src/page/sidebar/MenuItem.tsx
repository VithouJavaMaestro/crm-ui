import {useLocation, useNavigate} from "react-router";
import navigateIcon from "../../../public/navigate.svg";
import styled from "styled-components";
import {MenuItemProps} from "../../utils/menuItem.ts";
import React, {useState} from "react";
import selectIcon from "../../../public/select.svg";
import {Object} from "../../utils/shared.ts";

const MenuItemContainer = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-left: ${p => p.active ? 10 : 20}px;
    border-radius: 8px;
    padding-left: ${p => p.active ? 10 : 0}px;
    padding-right: 10px;
    background: ${(p) => (p.active ? "#B9EB8E" : "transparent")};
`;

const ActiveIndicator = styled.div`
    width: 5px;
    height: 44px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #21943A;
`;

const MenuLabel = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: #1d2025;
`;

const SubMenuItem = styled.div`
    background-color: #E5F6D6;
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    margin-left: 30px;
    justify-content: flex-start;
    margin-top: 8px;
    border-radius: 8px;
`;

const SubMenuItemText = styled.li`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #1D2025;
`


export const MenuItem = ({label, icon, path, options, action}: MenuItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const active = location.pathname === path;

    const handleClickDropdown = (e: Object) => {
        e.preventDefault();
        setToggleDropdown(!toggleDropdown);
    }

    React.useEffect(() => {
        if (!active) {
            setToggleDropdown(false)
        }
    }, [active])

    return (
        <div onClick={action}>
            <div style={{display: "flex"}} onClick={handleClickDropdown}>
                {active && <ActiveIndicator/>}
                <MenuItemContainer active={active} onClick={() => {
                    navigate(path);
                }} >
                    <div style={{
                        display: 'flex',
                        gap: "10px",
                    }}>
                        <img src={icon} alt={label} width="20" style={{
                            alignSelf: 'center'
                        }}/>
                        <MenuLabel>{label}</MenuLabel>
                    </div>
                    {options?.length && (toggleDropdown ? <img src={selectIcon} alt=""/> :
                        <img src={navigateIcon} alt="" width={7} height={12}/>)}
                </MenuItemContainer>
            </div>
            {active && toggleDropdown && options?.map((value, index) => {
                return <SubMenuItem key={index}><SubMenuItemText>
                    {value.label}</SubMenuItemText></SubMenuItem>
            })}
        </div>
    );
};