import styled from "styled-components";
import {ModalProps} from "../../utils/modal.ts";
import Modal, {Styles} from "react-modal";
import {useState} from "react";
import {useGetNoteQuery} from "../../api/noteApi.ts";
import {NoteContentDetail} from "./NoteContentDetail.tsx";
import {NoteDetailEdit} from "./NoteDetailEdit.tsx";


export const NoteDetail = ({props, id}: { props: ModalProps, id: number }) => {

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
            {action === Mode.VIEW ? <NoteContentDetail data={data} clickCancel={() => props.onClose()}
                                                       clickDelete={() => setAction(Mode.DELETE)}
                                                       clickEdit={() => setAction(Mode.EDIT)}/> :
                <NoteDetailEdit data={data} setMode={() => setAction(Mode.VIEW)} closeModal={props.onClose}/>}
            {/*{action === Mode.DELETE && (*/}
            {/*    <>*/}
            {/*        <DeleteTitle>Are you sure you want to delete this note?</DeleteTitle>*/}
            {/*        <div style={{*/}
            {/*            display: 'flex',*/}
            {/*            justifyContent: 'flex-end',*/}
            {/*            gap: 20*/}
            {/*        }}>*/}
            {/*            <Button color={'#f10721'} onClick={() => setAction(Mode.VIEW)}>*/}
            {/*                <ButtonText>Cancel</ButtonText>*/}
            {/*            </Button>*/}
            {/*            <Button color={'#21943A'}>*/}
            {/*                <ButtonText>Confirm</ButtonText>*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*)}*/}
        </Modal>
    )
}

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 30px
`;

export const ModeContainer = styled.div`
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

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const TitleNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Color = styled.div`
    width: 20px;
    height: 20px;
    background-color: #FFD240;
    border-radius: 5px;
    align-self: center;
`;

export const NoteTitle = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #3F434A;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
`

export const DateTitle = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #3F434A;
`

export const Clickable = styled.img`
    cursor: pointer;
`;

export const Topic = styled.div`
    display: flex;
    gap: 10px;
`


export const Description = styled.span`
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

export const DescriptionContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-right: 10px;
`;

export const NoteTextArea = styled.textarea`
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

export const NoteInput = styled.input`
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

export const Button = styled.div<{ color: string }>`
    width: 110px;
    height: 40px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
`;


export const ButtonText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
`;

export const Mode = {
    VIEW: "view",
    EDIT: "edit",
    DELETE: "delete",
};

export const DeleteTitle = styled.span`
    text-align: center;
`;

