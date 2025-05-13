import {Stack} from "../Stack.tsx";
import {NoteHeader} from "./NoteHeader.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {getNotesApi, NoteRepresentation} from "../../api/aNoteApi.ts";
import {AxiosResponse} from "axios";
import {Pagination} from "../../utils/pagination.ts";
import {NoteItem} from "./NoteItem.tsx";
import {useAppSelector} from "../../apps/hooks.ts";

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

    const [noteItems, setNoteItems] = useState<Pagination<NoteRepresentation>>();

    const fetch = useAppSelector(state => state.fetch);

    useEffect(() => {
        getNotesApi()
            .then((value: AxiosResponse<Pagination<NoteRepresentation>>) => {
                setNoteItems(value.data);
            });
    }, [fetch.fetchNote]);

    return <NoteContainer>
        <Stack style={{
            padding: 20,
            gap: 20
        }}>
            <NoteHeader/>
            <NoteItemContainer>
                {noteItems?.items.map((item, index) => {
                    return (
                        <NoteItem {...item} key={index}/>
                    )
                })}
            </NoteItemContainer>
        </Stack>
    </NoteContainer>
}