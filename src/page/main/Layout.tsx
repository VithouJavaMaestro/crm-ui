import styled from "styled-components";
import {Outlet} from "react-router";
import {Header} from "./Header.tsx";
import {Sidebar} from "../sidebar/Sidebar.tsx";

const Container = styled.div`
    display: flex;

    scrollbar-width: thin;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
`


export const Layout = () => {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            overflow: 'hidden'
        }}>

            <Container>

                <Sidebar/>
                <Content>
                    <Header/>
                    <Outlet/>
                </Content>
            </Container>
        </div>

    )
}