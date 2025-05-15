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
    ModeContainer,
    NoteTitle,
    TitleNoteContainer,
    Topic
} from "./NoteDetail.tsx";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import {CloseContainer} from "../../utils/modal.ts";
import cancelIcon from "../../assets/cancel.svg";

export const NoteContentDetail = ({data, clickEdit, clickDelete, clickCancel}: {
    data?: NoteRepresentation,
    clickEdit: () => void,
    clickDelete: () => void,
    clickCancel: () => void
}) => {
    return <>
        <Header>
            <IconContainer>
                <ModeContainer>
                    <Clickable src={editIcon} alt="edit" onClick={clickEdit} width={20}/>
                    <Clickable src={deleteIcon} alt="delete" onClick={clickDelete} width={20}/>
                </ModeContainer>
                <CloseContainer>
                    <Clickable src={cancelIcon} onClick={clickCancel} width={20}/>
                </CloseContainer>
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