import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {ModalProps} from "../../utils/modal.ts";
import {Clickable, modalStyle} from "../note/NoteDetail.tsx";
import styled from "styled-components";
import {useLazyGetUsersQuery, User} from "../../api/userApi.ts";
import cancelIcon from "../../assets/cancel.svg";


export const InvitePeople = (props: ModalProps) => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState<Array<User>>([]);
    const [triggerGetUsers] = useLazyGetUsersQuery();
    const [clickAdd, setClickAdd] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setClickAdd(false);
        triggerGetUsers(value)
            .unwrap()
            .then(users => {
                console.log(users);
                setSuggestions(users);
            });
    };

    const handleSuggestionClick = (value: string) => {
        setClickAdd(true);
        setInputValue(value);
        setSuggestions([]);
    };

    useEffect(() => {
        if (props.open) {
            setInputValue("");
            setSuggestions([]);
            setClickAdd(false);
        }
    }, [props.open]);

    return (
        <Modal
            isOpen={props.open}
            style={modalStyle({
                content: {
                    overflow: 'visible',
                    maxWidth: "550px",
                },
            })}
        >
            <Container>
                <Clickable src={cancelIcon} width={20} style={{
                    alignSelf: 'flex-end'
                }} onClick={props.onClose}/>
                <Title>New Chat</Title>
                <InputWrapper>
                    <Input
                        placeholder={"User ID , Name or Email"}
                        type="text"
                        name="search"
                        autoComplete="off"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    {(suggestions.length > 0) && (
                        <SuggestionBox>
                            {suggestions.map((s, idx) => (
                                <SuggestionItem key={idx} onClick={() => handleSuggestionClick(s.email)}>
                                    {s.firstname + " " + s.lastname} ({s.email})
                                </SuggestionItem>
                            ))}
                        </SuggestionBox>
                    )}
                </InputWrapper>
                <StartChatButton style={{
                    backgroundColor: !clickAdd ? "#F5F5F5" : "#21943A",

                }} onClick={() => {
                    if (clickAdd) {

                    }
                }}>
                    <span style={{
                        color: clickAdd ? "#F5F5F5" : '#3F434A'
                    }}>Start</span>
                </StartChatButton>
            </Container>
        </Modal>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Title = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #3F434A;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    background-image: url(/src/assets/search.svg);
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
    background-size: 20px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 10px;
    background-color: #F5F5F5;
`;

const SuggestionBox = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    scrollbar-width: thin;
`;

const SuggestionItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
`;

const StartChatButton = styled.div`
    width: 127px;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    align-self: flex-end;
`;
