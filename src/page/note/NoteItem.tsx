import dateIcon from "../../../public/date.svg";
import pushpinIcon from "../../../public/pushpin.svg";
import styled from "styled-components";
import {NoteModification} from "./NoteModification.tsx";
import React from "react";

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


export const NoteItem = () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <NoteModification open={open} onClose={() => setOpen(false)}/>
        <NoteItemContainer>
            <NoteIcon/>
            <NoteItemHeader>
                <NoteDateContainer>
                    <img src={dateIcon} alt="date"/>
                    <p>12 June, 2020</p>
                </NoteDateContainer>

                <img src={pushpinIcon} alt="pushpin" style={{
                    cursor: "pointer"
                }} onClick={() => setOpen(true)}/>
            </NoteItemHeader>
            <NoteDescriptionContainer style={{
                paddingBottom: 30,
            }}>
                <h4>The title of a note</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias architecto asperiores blanditiis cum. Accusantium aperiam at aut, autem consequuntur cupiditate eos et exercitationem incidunt molestias, natus nemo recusandae repudiandae saepe voluptatum. Ad at beatae consequatur dolorum fuga illo libero magnam modi, molestias nobis obcaecati officia, quaerat quasi quo ratione reiciendis, sapiente tempora vero voluptas voluptates? A architecto commodi, corporis cumque distinctio est hic illum itaque modi quasi quod vitae? Adipisci consectetur, non odio possimus sit velit voluptates. Ab adipisci architecto, at consectetur cum dicta dolores dolorum et, eveniet ex exercitationem in, inventore iure nam natus sint tenetur veritatis voluptatem.
                </p>
            </NoteDescriptionContainer>
        </NoteItemContainer>
    </>
}