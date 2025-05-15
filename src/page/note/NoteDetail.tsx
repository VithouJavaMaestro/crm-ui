import styled from "styled-components";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import cancelIcon from "../../assets/cancel.svg";
import saveIcon from "../../assets/save.svg";
import {CloseContainer, ModalProps} from "../../utils/modal.ts";
import Modal, {Styles} from "react-modal";
import dateIcon from "../../assets/date.svg";
import menuIcon from "../../assets/menu.svg";
import {useState} from "react";
import {useGetNoteQuery} from "../../api/noteApi.ts";
import {NoteRepresentation} from "../../model/note.ts";
import backIcon from "../../assets/back.svg";

const NoteContentDetail = (data: NoteRepresentation) => {
    return <Content>
        <TitleNoteContainer>
            <Topic className={"title"}>
                <div style={{
                    alignSelf: "center",
                }}>
                    <Color/>
                </div>
                    <NoteTitle>{data?.title}</NoteTitle>
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
}

const NoteDetailEdit = (data: NoteRepresentation) => {
    return <Content>
        <TitleNoteContainer>
            <Topic className={"title"}>
                <div style={{
                    alignSelf: "center",
                }}>
                    <Color/>
                </div>
                <NoteInput id={'title'} type={'text'} defaultValue={data?.title}/>
            </Topic>
            <Topic>
                <img src={dateIcon} alt="date"/>
                <DateTitle>{data?.createdAt}</DateTitle>
            </Topic>
        </TitleNoteContainer>
        <DescriptionContainer>
            <img src={menuIcon} alt={"menu"} width={20} height={20}/>

            <NoteTextArea id={'description'} placeholder={"Type something"}
                          defaultValue={data?.description}/>
        </DescriptionContainer>
    </Content>
}

export const NoteDetail = ({props, id}: { props: ModalProps, id: number }) => {

    console.log("Call me")

    const [action, setAction] = useState(Mode.VIEW);

    const {data, isLoading} = useGetNoteQuery(id);

    if (isLoading) {
        return;
    }

    return (
        <Modal isOpen={props.open} style={modalStyle({
            content: {
                overflowX: 'hidden'
            }
        })} onRequestClose={props.onClose}>
            <Header>
                <div style={{
                    display: 'flex',
                    gap: 20
                }}>
                    <Clickable src={cancelIcon} alt="" width={18}/>
                    <Clickable src={saveIcon} alt="" height={18}/>
                </div>
                <IconContainer>
                    <ModeContainer>
                        <Clickable src={editIcon} alt="edit" onClick={() => setAction(Mode.EDIT)} width={20}/>
                        <Clickable src={deleteIcon} alt="delete" onClick={() => setAction(Mode.DELETE)} width={20}/>
                    </ModeContainer>
                    <CloseContainer>
                        <Clickable src={cancelIcon} onClick={() => props.onClose()} width={12}/>
                    </CloseContainer>
                </IconContainer>
            </Header>
            {action === Mode.VIEW ? <NoteContentDetail {...data}/> : <NoteDetailEdit {...data}/>}
            {action === Mode.DELETE && (
                <>
                    <DeleteTitle>Are you sure you want to delete this note?</DeleteTitle>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: 20
                    }}>
                        <Button color={'#f10721'} onClick={() => setAction(Mode.VIEW)}>
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button color={'#21943A'}>
                            <ButtonText>Confirm</ButtonText>
                        </Button>
                    </div>
                </>
            )}
        </Modal>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const IconContainer = styled.div`
    display: flex;
    gap: 30px
`;

const ModeContainer = styled.div`
    align-self: center;
    display: flex;
    gap: 16px
`

export const modalStyle = (props?: Styles): Styles => ({
    overlay: {
        backgroundColor: 'rgb(213,214,215,0.5)',
        ...(props?.overlay || {})
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 510,
        backgroundColor: '#FFFF',
        padding: 30,
        border: "1px solid #E8E9EB",
        borderRadius: 20,
        ...(props?.content || {}),
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
});

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const TitleNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Color = styled.div`
    width: 20px;
    height: 20px;
    background-color: #FFD240;
    border-radius: 5px;
    align-self: center;
`;

const NoteTitle = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #3F434A;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
`

const DateTitle = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #3F434A;
`

const Clickable = styled.img`
    cursor: pointer;
`;

const Topic = styled.div`
    display: flex;
    gap: 10px;
`


const Description = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #595F69;
    align-self: center;
    word-break: break-word;
    max-height: 50vh;
    overflow-x: hidden;
    scrollbar-width: thin;
`;

const DescriptionContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-right: 10px;
`;

const NoteTextArea = styled.textarea`
    border: 1px solid #E8E9EB;
    outline: none;
    height: 173px;
    border-radius: 12px;
    padding: 10px;
    resize: none;
    scrollbar-width: thin;
    width: 100%;

    &:focus {
        border: 1px solid #2C8D46;
    }
`;

const NoteInput = styled.input`
    height: 30px;
    outline: none;
    border-radius: 12px;
    padding: 10px;
    border: 1px solid #E8E9EB;
    width: 100%;

    &:focus {
        border: 1px solid #2C8D46;
    }
`;

const Button = styled.div<{ color: string }>`
    width: 110px;
    height: 40px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
`;


const ButtonText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
`;

const Mode = {
    VIEW: "view",
    EDIT: "edit",
    DELETE: "delete",
};

const DeleteTitle = styled.span`
    text-align: center;
`;

