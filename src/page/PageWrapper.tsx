import {Sidebar} from "./Sidebar.tsx";
import styled from "styled-components";
import {Outlet} from "react-router";
import menuIcon from "../../public/menu.svg";
import searchIcon from "../../public/search.svg";
import reminderIcon from "../../public/reminder.svg";
import profile from "../../public/flower.svg";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`

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
`

export const PageWrapper = () => {
    return (
        <Container>
            <Sidebar/>
            <Content>
                <HeaderContainer>
                    <img src={menuIcon} alt="" style={{
                        alignSelf: "center",
                    }}/>
                    <div style={{
                        display: 'flex',
                        gap: 20,
                    }}>
                        <img src={searchIcon} alt="" style={{
                            alignSelf: "center",
                        }}/>
                        <img src={reminderIcon} alt="" style={{
                            alignSelf: "center",
                        }}/>
                        <Divider/>
                        <img src={profile} alt="" width={50}/>
                        <h4 style={{
                            alignSelf: "center"
                        }}>Vithou Then</h4>
                    </div>
                </HeaderContainer>
                <Outlet/>
            </Content>
        </Container>
    )
}