import {Sidebar} from "./sidebar/Sidebar.tsx";
import styled from "styled-components";
import {Outlet} from "react-router";
import {Header} from "./Header.tsx";
import {CompactSidebar} from "./sidebar/CompactSidebar.tsx";
import {useAppSelector} from "../apps/hooks.ts";

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
    const action = useAppSelector(state => state.action);
    return (
        <Container>
            {action.expandedSidebar ? (
                <Sidebar />
            ) : (
                <CompactSidebar/>
            )}
            <Content>
                <Header/>
                <Outlet/>
            </Content>
        </Container>
    )
}