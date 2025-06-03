import styled from "styled-components";
import {FromThem} from "./FromThem.tsx";
import {ChatHeader} from "./ChatHeader.tsx";
import {Divider} from "./Divider.tsx";
import {FromMe} from "./FromMe.tsx";
import attachment from "../../assets/attachment.svg";
import emoji from "../../assets/emoji.svg";
import send from "../../assets/send.svg";
import EmojiPicker from "emoji-picker-react";
import {useState} from "react";
import {Tooltip} from "react-tooltip";

export const Chat = () => {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    return <Container>
        <ChatHeader/>
        <Divider/>
        <MessagesContainer>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
            <FromMe/>
            <FromThem/>
        </MessagesContainer>

        <Typing>

            <TypingContainer>
                <img src={attachment} alt=""/>
                <img src={emoji} alt="" id="my-tooltip" data-tooltip-id="emoji-picker" onClick={() => setShowEmojiPicker(!showEmojiPicker)}/>
                <Input  placeholder={"Type a message here..."} multiple={true}/>
            </TypingContainer>
            <SendContainer >
                <img src={send} alt="" />
            </SendContainer>
        </Typing>
    </Container>
}

const SendContainer = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #21943A;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

const TypingContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-grow: 1;
    width: 100%;
`

const Input = styled.input`
    outline: none;
    border: none;
    width: calc(100% - 200px);
    white-space: normal;
`

const Typing = styled.div`
    border-top: 1px solid #F5F5F5;
    align-items: center;
    display: flex;
    flex-grow: 1;
    padding-left: 20px;
    padding-right: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    border-right: 2px solid #E8E9EB;
`;

const MessagesContainer = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: calc(100% - 150px);
    scrollbar-width: thin;
`;