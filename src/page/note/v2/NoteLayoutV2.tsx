import {Left} from "./Left.tsx";
import {Center} from "./Center.tsx";
import {Right} from "./Right.tsx";
import styled from "styled-components";

export const NoteLayoutV2 = () => {
    return <Container>
        <Left/>
        <Center/>
        <Right/>
    </Container>
}


export const Container = styled.section`
    display: grid;
    grid-template-columns: 1.5fr 2.5fr 3fr;
    height: calc(100vh - 80px);
`