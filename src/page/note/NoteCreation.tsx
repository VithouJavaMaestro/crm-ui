import Modal, {Styles} from "react-modal";
import styled from "styled-components";
import cancelIcon from "../../../public/cancel.svg";
import {Stack} from "../Stack.tsx";
import {Close, CloseContainer} from "../../utils/modal.ts";
import {Object} from "../../utils/shared.ts";

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
        height: 460,
        backgroundColor: '#FFFF',
        padding: 30,
        border: "1px solid #E8E9EB",
        borderRadius: 20,
        ...(props?.content || {})
    },
});


const AddNoteLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8A9099;
`;

const NoteInput = styled.input`
    width: 450px;
    height: 42px;
    outline: none;
    border-radius: 12px;
    padding: 10px;
    border: 1px solid #E8E9EB;

    &:focus {
        border: 1px solid #2C8D46;
    }
`;

const NoteTextArea = styled.textarea`
    border: 1px solid #E8E9EB;
    outline: none;
    width: 450px;
    height: 173px;
    border-radius: 12px;
    padding: 10px;
    resize: none;
    scrollbar-width: thin;

    &:focus {
        border: 1px solid #2C8D46;
    }
`;

const AddNoteForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CreateNoteButton = styled.div`
    width: 110px;
    height: 40px;
    background-color: #21943A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    align-self: flex-end;
    cursor: pointer;
`;

const CreateNoteButtonText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
`

interface NoteModalProps {
    open: boolean;
    onClose: () => void;
}

export const NoteCreation = (props: NoteModalProps) => {

    const handleCreateNote = (event: Object) => {
        event.preventDefault();
        // createNoteApi({
        //     description: "Hello world",
        //     title: "Hello from boy thou"
        // }).finally(() => props.onClose());
    }

    return (
        <Modal isOpen={props.open} style={modalStyle()} onRequestClose={props.onClose}>
            <Stack space={20}>
                <CloseContainer>
                    <Close onClick={props.onClose}>
                        <img src={cancelIcon} alt=""/>
                    </Close>
                </CloseContainer>
                <AddNoteForm>
                    <div>
                        <AddNoteLabel htmlFor={'title'}>
                            Title
                        </AddNoteLabel>
                        <NoteInput id={'title'} type={'text'}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <AddNoteLabel htmlFor={'description'}>
                            Description
                        </AddNoteLabel>
                        <NoteTextArea id={'description'} placeholder={"Type something"}/>
                    </div>
                </AddNoteForm>
                <CreateNoteButton onClick={handleCreateNote}>
                    <CreateNoteButtonText>Create</CreateNoteButtonText>
                </CreateNoteButton>
            </Stack>
        </Modal>
    )
}