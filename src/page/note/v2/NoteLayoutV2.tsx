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
    grid-template-columns: 1fr 2fr 4fr;
    height: calc(100vh - 80px);
`
