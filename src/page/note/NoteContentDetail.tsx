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
import {CloseContainer} from "../../utils/modal.ts";
import cancelIcon from "../../assets/cancel.svg";
import saveIcon from "../../assets/save.svg";
import {useDeleteNoteMutation} from "../../api/noteApi.ts";

export const NoteContentDetail = ({data, clickEdit, clickDelete, clickCancel, mode, setMode}: {
    data?: NoteRepresentation,
    clickEdit: () => void,
    clickDelete: () => void,
    clickCancel: () => void,
    mode: string,
    setMode: () => void
}) => {

    const [trigger] = useDeleteNoteMutation();

    return <>
        <Header>
            <IconContainer>
                {mode === Mode.VIEW && <><ModeContainer>
                    <Clickable src={editIcon} alt="edit" onClick={clickEdit} width={20}/>
                    <Clickable src={deleteIcon} alt="delete" onClick={clickDelete} width={20}/>
                </ModeContainer><CloseContainer>
                    <Clickable src={cancelIcon} onClick={clickCancel} width={20}/>
                </CloseContainer></>}
                {mode === Mode.DELETE && <>
                    <Clickable src={cancelIcon} alt="" width={20} onClick={setMode}/>
                    <Clickable src={saveIcon} alt="" height={20} onClick={() => {
                        trigger(data?.id ?? 0);
                        clickCancel();
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