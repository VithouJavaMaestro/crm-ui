import {Avatar} from "../../component/Avatar.tsx";
import styled from "styled-components";
import {useMemo} from "react";

interface TeamProps {
    name: string,
    lastChat: string
}

export const Team = (props: TeamProps) => {
    const {name, lastChat} = props;

    const extractLastChat = useMemo(() => {
        if (lastChat.length > 29) {
            return lastChat.substring(0, 29) + "...";
        } else {
            return lastChat;
        }
    }, [lastChat])

    return <Container>
        <Avatar name={name}/>
        <Stack>
            <Heading>{name}</Heading>
            <LastChat>{extractLastChat}</LastChat>
        </Stack>
    </Container>
}

const Stack = styled.div`
    display: flex;
    flex-direction: column;
`

const LastChat = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #8A9099;
    word-break: break-word;
`

const Heading = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #3F434A;
`

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 20px;
`