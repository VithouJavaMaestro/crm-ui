import {NoteRepresentation} from "../../model/note.ts";
import dateIcon from "../../assets/date.svg";
import menuIcon from "../../assets/menu.svg";

import {
    Clickable,
    Color,
    Content,
    DateTitle,
    Description,
    DescriptionContainer,
    Header,
    IconContainer,
    Mode,
    ModeContainer,
    NoteTitle,
    TitleNoteContainer,
    Topic
} from "./NoteDetail.tsx";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import {CloseContainer, ModalProps} from "../../utils/modal.ts";
import cancelIcon from "../../assets/cancel.svg";
import saveIcon from "../../assets/save.svg";
import {useDeleteNoteMutation} from "../../api/noteApi.ts";
import React from "react";

export interface NoteDetailContentProps {
    data: NoteRepresentation,
    mode: string,
    setMode: React.Dispatch<React.SetStateAction<string>>;
    modal: ModalProps
}

export const NoteDetailContent = (props: NoteDetailContentProps) => {

    const {data, mode, setMode, modal} = props;

    const [trigger] = useDeleteNoteMutation();

    return <>
        <Header>
            <IconContainer>
                {mode === Mode.VIEW && <><ModeContainer>
                    <Clickable src={editIcon} alt="edit" onClick={() => setMode(Mode.EDIT)} width={20}/>
                    <Clickable src={deleteIcon} alt="delete" onClick={() => setMode(Mode.DELETE)} width={20}/>
                </ModeContainer><CloseContainer>
                    <Clickable src={cancelIcon} onClick={modal.onClose} width={20}/>
                </CloseContainer></>}
                {mode === Mode.DELETE && <>
                    <Clickable src={cancelIcon} alt="" width={20} onClick={() => setMode(Mode.VIEW)}/>
                    <Clickable src={saveIcon} alt="" height={20} onClick={() => {
                        trigger(data.id);
                        modal.onClose();
                    }}/>
                </>
                }
            </IconContainer>
        </Header>
        <Content>
            <TitleNoteContainer>
                <Topic className={"title"}>
                    <div style={{
                        alignSelf: "center",
                    }}>
                        <Color/>
                    </div>
                    <NoteTitle data-tooltip-id={"title"}>{data?.title}</NoteTitle>
                </Topic>
                <Topic>
                    <img src={dateIcon} alt="date"/>
                    <DateTitle>{data?.createdAt}</DateTitle>
                </Topic>
            </TitleNoteContainer>
            <DescriptionContainer>
                <img src={menuIcon} alt={"menu"} width={20} height={20}/>
                <Description>
                    {data?.description}
                </Description>
            </DescriptionContainer>
        </Content>
    </>
}