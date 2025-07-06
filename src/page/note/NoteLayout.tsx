import {Stack} from "../../component/Stack.tsx";
import {NoteHeader} from "./NoteHeader.tsx";
import styled from "styled-components";
import {NoteItem} from "./NoteItem.tsx";
import {useGetNotesQuery} from "../../api/noteApi.ts";
import {Loader} from "../../component/Loader.tsx";

const NoteContainer = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color: #F5F5F5;
    overflow: scroll;
    scrollbar-width: thin;
    overflow-x: hidden;
`;

const NoteCard = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
`

const NoteItemContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

export const NoteLayout = () => {

    const {currentData, isFetching} = useGetNotesQuery();


    return <>
        {
            (isFetching) && <Loader open={true}/>
        }
        <NoteCard>

            <NoteContainer>
                <Stack style={{
                    padding: 20,
                    gap: 20
                }}>
                    <NoteHeader/>
                    <NoteItemContainer>
                        {currentData?.map((item, index) => {
                            return (
                                <NoteItem {...item} key={index}/>
                            )
                        })}
                    </NoteItemContainer>
                </Stack>
            </NoteContainer>
        </NoteCard>
    </>


}