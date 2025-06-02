import styled from "styled-components";
import {Teams} from "./Teams.tsx";
import {Divider} from "./Divider.tsx";
import {TeamHeader} from "./TeamHeader.tsx";
import {Search} from "./Search.tsx";

export const ChatList = () => {
    return <ChatListContainer>
        <Search/>
        <Divider/>
        <TeamHeader/>
        <Divider/>
        <Teams/>
    </ChatListContainer>
}

const ChatListContainer = styled.div`
    background-color: #F5F5F5;
    height: 100%;
`