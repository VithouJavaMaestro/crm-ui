import styled from "styled-components";
import {ChatHeader} from "./ChatHeader.tsx";
import {Divider} from "./Divider.tsx";

export const Chat = () => {
    return <Container>
        <ChatHeader/>
        <Divider/>
    </Container>
}

const Container = styled.div`
    height: 100%;
`