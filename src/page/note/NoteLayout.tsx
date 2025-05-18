import {Stack} from "../../component/Stack.tsx";
import {NoteHeader} from "./NoteHeader.tsx";
import styled from "styled-components";
import {NoteItem} from "./NoteItem.tsx";
import {useGetNotesQuery} from "../../api/noteApi.ts";
import {Loader} from "../../component/Loader.tsx";

const NoteContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
    overflow: scroll;
    scrollbar-width: thin;
    overflow-x: hidden;
`;

const NoteItemContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

export const NoteLayout = () => {

    const {data, isFetching} = useGetNotesQuery();

    if (isFetching) {
        return <Loader open={true}/>
    }

    return <NoteContainer>
        <Stack style={{
            padding: 20,
            gap: 20
        }}>
            <NoteHeader/>
            <NoteItemContainer>
                {data?.map((item, index) => {
                    return (
                        <NoteItem {...item} key={index}/>
                    )
                })}
            </NoteItemContainer>
        </Stack>
    </NoteContainer>
}