import styled from "styled-components";
import {Search} from "./Search.tsx";
import {Teams} from "./Teams.tsx";

export const ChatList = () => {
    return <ChatListContainer>
        <Search/>
        <Divider/>
        <Teams/>
    </ChatListContainer>
}

const Divider = styled.hr`
    border: 1px solid #E8E9EB;
`

const ChatListContainer = styled.div`
    background-color: #F5F5F5;
`