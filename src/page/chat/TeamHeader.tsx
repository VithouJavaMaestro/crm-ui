import styled from "styled-components";
import {AddIcon} from "../../component/Svg.tsx";
import {InvitePeople} from "./InvitePeople.tsx";
import {useState} from "react";

export const TeamHeader = () => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    return <>
        <InvitePeople open={openModal} onClose={() => setOpenModal(false)}/>
        <Container>
            <TeamTitle>Chats</TeamTitle>
            <Button onClick={() => {
                setOpenModal(true)
            }}>
                <AddIcon fillColor={"#3F434A"} width={12} height={12}/>
            </Button>
        </Container>
    </>
}

const Button = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color: #E8E9EB;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Container = styled.div`
    height: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`
const TeamTitle = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #8A9099;
`