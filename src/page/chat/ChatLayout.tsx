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
    grid-template-columns: 1fr 4fr 1fr;
    height: calc(100vh - 80px);
`
