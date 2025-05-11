import styled from "styled-components";
import menuIcon from "../../public/menu.svg";
import searchIcon from "../../public/search.svg";
import reminderIcon from "../../public/reminder.svg";
import profile from "../../public/flower.svg";


const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #F5F5F5;
`;

const Divider = styled.div`
    width: 3px;
    background-color: #F5F5F5;
`;


export const Header = () => {
    return <HeaderContainer>
        <img src={menuIcon} alt="" style={{
            alignSelf: "center",
        }}/>
        <div style={{
            display: 'flex',
            gap: 20,
        }}>
            <img src={searchIcon} alt="searchIcon" style={{
                alignSelf: "center",
            }}/>
            <img src={reminderIcon} alt="reminderIcon" style={{
                alignSelf: "center",
            }}/>
            <Divider/>
            <img src={profile} alt="" width={50}/>
            <h4 style={{
                alignSelf: "center"
            }}>Vithou Then</h4>
        </div>
    </HeaderContainer>
}