import {ChatList} from "./ChatList.tsx";
import {Chat} from "./Chat.tsx";
import {UserInfo} from "./UserInfo.tsx";
import styled from "styled-components";


export const ChatLayout = () => {
    return <ChatContainer>
        <ChatList/>
        <Chat/>
        <UserInfo/>
    </ChatContainer>
}


const ChatContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1.5fr 3.5fr 2fr;
`
