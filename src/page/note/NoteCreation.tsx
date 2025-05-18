import Modal, {Styles} from "react-modal";
import styled from "styled-components";
import cancelIcon from "../../assets/cancel.svg";
import {Stack} from "../../component/Stack.tsx";
import {Close, CloseContainer} from "../../utils/modal.ts";
import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateNoteMutation} from "../../api/noteApi.ts";
import {NoteRepresentation} from "../../model/note.ts";


export const NoteCreation = (props: NoteModalProps) => {

    const [createNote, {isLoading}] = useCreateNoteMutation();

    const handleCreateNote: SubmitHandler<NoteRepresentation> = async (data: NoteRepresentation) => {
        await createNote(data).unwrap();
        props.onClose();
    }

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<NoteRepresentation>();


    useEffect(() => {
        Modal.setAppElement("#root");
        reset();
    }, [props.open]);

    return (
        <Modal isOpen={props.open} style={modalStyle()} onRequestClose={props.onClose} ariaHideApp={false}
               shouldCloseOnEsc={false} shouldReturnFocusAfterClose={false}>
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
                        <NoteInput id={'title'} type={'text'} {...register("title", {
                            required: true,
                        })}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <AddNoteLabel htmlFor={'description'}>
                            Description
                        </AddNoteLabel>
                        <NoteTextArea id={'description'} placeholder={"Type something"} {...register("description", {
                            required: true
                        })}/>
                    </div>
                    <CreateNoteButton onClick={handleSubmit(handleCreateNote)}>
                        {isLoading ? <Loading/> :
                            <CreateNoteButtonText>Create</CreateNoteButtonText>}
                    </CreateNoteButton>
                </AddNoteForm>
            </Stack>
        </Modal>
    )
}


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

const AddNoteForm = styled.div`
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
`;


const Loading = styled.div`
    width: 28px;
    height: 28px;
    border: 3px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

interface NoteModalProps {
    open: boolean;
    onClose: () => void;
}