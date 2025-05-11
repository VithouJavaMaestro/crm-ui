import {Sidebar} from "./Sidebar.tsx";
import styled from "styled-components";
import {Outlet} from "react-router";
import {Header} from "./Header.tsx";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const Layout = () => {
    return (
        <Container>
            <Sidebar/>
            <Content>
                <Header/>
                <Outlet/>
            </Content>
        </Container>
    )
}