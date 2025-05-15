import dateIcon from "../../assets/date.svg";
import pushpinIcon from "../../assets/pushpin.svg";
import styled from "styled-components";
import {NoteDetail} from "./NoteDetail.tsx";
import React from "react";
import {NoteRepresentation} from "../../model/note.ts";
import noteIcon from "../../assets/noteIcon.svg";

export const NoteItem = (note: NoteRepresentation) => {
    const [open, setOpen] = React.useState(false);

    return <>
        {open && <NoteDetail props={{
            open: open,
            onClose: () => setOpen(false),
        }} id={note.id ?? 0}/>}
        <NoteItemContainer>
            <img src={noteIcon} alt="" width={40}/>
            <NoteItemHeader>
                <NoteDateContainer>
                    <img src={dateIcon} alt="date"/>
                    <p>{note.createdAt}</p>
                </NoteDateContainer>

                <img src={pushpinIcon} alt="pushpin" style={{
                    cursor: "pointer"
                }} onClick={() => setOpen(true)}/>
            </NoteItemHeader>
            <NoteDescriptionContainer>
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
    overflow-wrap: break-word;
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
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
`;