import styled from "styled-components";
import {Outlet} from "react-router";
import {Header} from "./Header.tsx";
import {CompactSidebar} from "../sidebar/CompactSidebar.tsx";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    transition: opacity 0.4s ease;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const Layout = () => {
    return (
        <Container>
            <CompactSidebar/>
            <Content>
                <Header/>
                <Outlet/>
            </Content>
        </Container>
    )
}