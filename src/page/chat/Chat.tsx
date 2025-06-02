import styled from "styled-components";
import {Typing} from "./Typing.tsx";
import {FromMe} from "./FromMe.tsx";
import {FromThem} from "./FromThem.tsx";
import {ChatHeader} from "./ChatHeader.tsx";
import {Divider} from "./Divider.tsx";

export const Chat = () => {
    return <Container>
        <ChatHeader/>
        <Divider/>
        <div style={{
            backgroundColor: 'red',
            
        }}>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
        </div>


        <Typing/>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const ConversationContainer = styled.div`
    background-color: red;
`
