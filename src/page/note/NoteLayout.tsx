import {Stack} from "../Stack.tsx";
import {NoteItem} from "./NoteItem.tsx";
import {NoteHeader} from "./NoteHeader.tsx";
import styled from "styled-components";

const NoteContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
    overflow: scroll;
`;

const NoteItemContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

export const NoteLayout = () => {
    return <NoteContainer>
        <Stack style={{
            padding: 20,
            gap: 20
        }}>
            <NoteHeader/>
            <NoteItemContainer>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
            </NoteItemContainer>
        </Stack>
    </NoteContainer>

}