import styled from "styled-components";
import {AddIcon} from "../../component/Svg.tsx";

export const TeamHeader = () => {
    return <Container>
        <TeamTitle>Chats</TeamTitle>
        <Button>
            <AddIcon fillColor={"#3F434A"}/>
        </Button>
    </Container>
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