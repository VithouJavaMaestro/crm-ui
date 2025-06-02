import styled from "styled-components";
import optionIcon from "../../assets/options.svg";
import {AddIcon} from "../../component/Svg.tsx";
import {Avatar} from "../../component/Avatar.tsx";

export const ChatHeader = () => {
    return <Container>
        <ProfileCard>
            <Avatar name={"Designers"}/>
            <ProfileTitle>#Designers</ProfileTitle>
        </ProfileCard>
        <ActionContainer>
            <AddIcon fillColor={"#8A9099"} width={20} height={20}/>
            <img src={optionIcon} alt="" width={20} height={20} style={{}}/>

        </ActionContainer>
    </Container>
}

const ActionContainer = styled.div`
    display: flex;
    gap: 10px;
`

const ProfileTitle = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #3F434A;
    align-self: center;
`

const ProfileCard = styled.div`
    display: flex;
    gap: 10px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding-left: 20px;
    padding-right: 20px;
`