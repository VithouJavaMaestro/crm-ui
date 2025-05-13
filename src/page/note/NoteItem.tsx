import dateIcon from "../../assets/date.svg";
import pushpinIcon from "../../assets/pushpin.svg";
import styled from "styled-components";
import {NoteModification} from "./NoteModification.tsx";
import React from "react";
import {NoteRepresentation} from "../../api/aNoteApi.ts";

export const NoteItem = (note: NoteRepresentation) => {
    const [open, setOpen] = React.useState(false);
    return <>
        <NoteModification open={open} onClose={() => setOpen(false)}/>
        <NoteItemContainer>
            <NoteIcon/>
            <NoteItemHeader>
                <NoteDateContainer>
                    <img src={dateIcon} alt="date"/>
                    <p>{note.createdAt}</p>
                </NoteDateContainer>

                <img src={pushpinIcon} alt="pushpin" style={{
                    cursor: "pointer"
                }} onClick={() => setOpen(true)}/>
            </NoteItemHeader>
            <NoteDescriptionContainer style={{
                paddingBottom: 30,
            }}>
                <h4>{note.title}</h4>
                <p>
                    {note.description}
                </p>
            </NoteDescriptionContainer>
        </NoteItemContainer>
    </>
}

const NoteItemContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
`;

const NoteIcon = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFD240;
    clip-path: polygon(0 0, 100% 0, 0 100%);
`;

const NoteItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 20px;
`;

const NoteDateContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const NoteDescriptionContainer = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
`;