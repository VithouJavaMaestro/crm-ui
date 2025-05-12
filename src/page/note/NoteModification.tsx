import styled from "styled-components";
import editIcon from "../../../public/edit.svg";
import deleteIcon from "../../../public/delete.svg";
import optionIcon from "../../../public/options.svg";
import cancelIcon from "../../../public/cancel.svg";
import {Close, CloseContainer, ModalProps} from "../../utils/modal.ts";
import Modal, {Styles} from "react-modal";
import dateIcon from "../../../public/date.svg";
import menuIcon from "../../../public/menu.svg";
import {useState} from "react";

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const modalStyle = (props?: Styles): Styles =>( {
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
`;

const DescriptionContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const NoteTextArea = styled.textarea`
    border: 1px solid #E8E9EB;
    outline: none;
    width: 450px;
    height: 173px;
    border-radius: 12px;
    padding: 10px;
    resize: none;
    
    overflow-y: scroll;
    
    scrollbar-width: thin;

    &:focus {
        border: 1px solid #2C8D46;
    }
`;

const NoteInput = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    border-radius: 12px;
    padding: 10px;
    border: 1px solid #E8E9EB;

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

enum Action {
    edit, view, remove,

}


const defineText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur culpa deserunt dicta dolor dolorem ducimus enim error facere fugiat, illo in nisi placeat possimus quasi reprehenderit sint voluptatum.";

export const NoteModification = (props: ModalProps) => {


    const [action, setAction] = useState<Action>(Action.view)

    return (
        <Modal isOpen={props.open} style={modalStyle()} onRequestClose={props.onClose}>
                <Header>
                    <IconContainer style={{
                        gap: 30
                    }}>
                        <div style={{
                            alignSelf: 'center',
                            display: 'flex',
                            gap: 16
                        }}>
                            <Clickable src={editIcon} alt="edit" onClick={()=> setAction(Action.edit)} />
                            <Clickable src={deleteIcon} alt="delete" onClick={()=> setAction(Action.remove)} />
                            <Clickable src={optionIcon} alt="optionIcon" onClick={() => setAction(Action.view)}/>
                        </div>
                        <div>
                            <CloseContainer>
                                <Close onClick={() => {
                                    props.onClose();
                                }}>
                                    <img src={cancelIcon} alt=""/>
                                </Close>
                            </CloseContainer>
                        </div>
                    </IconContainer>
                </Header>
            {action !== Action.remove && <Content>
                    <TitleNoteContainer>
                        <Topic>
                            <Color/>
                            {action === Action.view ? (
                                <NoteTitle>The title of a note</NoteTitle>
                            ): action === Action.edit && (
                                <NoteInput id={'title'} type={'text'} defaultValue={'The title of a note'}/>
                            )}
                        </Topic>
                        <Topic>
                            <img src={dateIcon} alt="date"/>
                            <DateTitle>12 June, 2020</DateTitle>
                        </Topic>
                    </TitleNoteContainer>
                    <DescriptionContainer>
                        <img src={menuIcon} alt={"menu"} width={20} height={20}/>
                        {action === Action.view ? (
                            <Description>
                                {defineText}
                            </Description>
                        ): action === Action.edit && (
                            <NoteTextArea  id={'description'} placeholder={"Type something"} defaultValue={defineText}/>
                        ) }

                    </DescriptionContainer>
                </Content>}
            {action === Action.remove && (
                <>
                <span style={{
                    textAlign: 'center'
                }}>Are you sure you want to delete this note?</span>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: 20
                    }}>
                        <Button color={'#f10721'} onClick={() => setAction(Action.view)}>
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