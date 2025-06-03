import styled from "styled-components";
import {ChatHeader} from "./ChatHeader.tsx";
import {Divider} from "./Divider.tsx";
import attachment from "../../assets/attachment.svg";
import emoji from "../../assets/emoji.svg";
import send from "../../assets/send.svg";
import {useEffect, useRef, useState} from "react";
import {FromMe} from "./FromMe.tsx";

export interface Conversion {
    message: string,
    chatter: string
}

export const Chat = () => {

    const [chat, setChat] = useState<string>('');

    const [chatItems, setChatItems] = useState<Array<string>>([]);

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatItems.length >= 1) {
            bottomRef.current.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    }, [chatItems]);


    return <Container>
        <ChatHeader/>
        <Divider/>
        <MessagesContainer>
            {chatItems.map((item, index) => (
                <FromMe key={index} chatter={''} message={item}/>
            ))}
            <div ref={bottomRef}/>
        </MessagesContainer>

        <Typing>

            <TypingContainer>
                <img src={attachment} alt=""/>
                <img src={emoji} alt="" id="my-tooltip" data-tooltip-id="emoji-picker"/>
                <Input value={chat} placeholder={"Type a message here..."} multiple={true}
                       onChange={e => setChat(e.target.value)} onKeyDown={event => {
                    if (event.key === "Enter") {
                        setChatItems([
                            ...chatItems,
                            chat
                        ]);

                        setChat("");
                    }

                }}/>
            </TypingContainer>
            <SendContainer onClick={() => {
                setChatItems([
                    ...chatItems,
                    chat
                ]);

                setChat("");
            }}>
                <img src={send} alt=""/>
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