import styled from "styled-components";

import addIcon from "../../../assets/add.svg";
import {NoteItem} from "./NoteItem.tsx";

export const Center = () => {
    return <Container>
        <Inner>
            <CategoryText>General</CategoryText>
            <NoteActionSection>
                <div>
                    <NoteFilteringSection>
                        <FilteringCard>
                            <NoteNumber>42</NoteNumber>
                            <NoteNumber>Notes</NoteNumber>
                        </FilteringCard>
                    </NoteFilteringSection>
                    <NoteSearchSection placeholder={'Search Notes...'} type="text" name="search" autoComplete={"off"}
                                       autoFocus={false} multiple={true}/>
                </div>

                <AddNote>
                    <img src={addIcon} alt=""/>
                    <CreateNoteTypography>Add Note</CreateNoteTypography>
                </AddNote>
            </NoteActionSection>
        </Inner>

        <NoteItemContainer className={'crm-scroll'}>
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

    </Container>
}

const CategoryText = styled.h3`
`

const NoteItemContainer = styled.section`
    height: calc(100vh - 290px);
`


const NoteNumber = styled.span`
    font-size: 12px;
    color: #b3b4b8;
`

const CreateNoteTypography = styled.span`
    color: #ffffff;
    text-transform: uppercase;
    font-size: 14px;
`

const AddNote = styled.section`
    height: 40px;
    background-color: #0078D4;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 6px;
`

const FilteringCard = styled.section`
    display: flex;
    gap: 4px;
`

const NoteFilteringSection = styled.section`
    display: flex;
    justify-content: space-between;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    border-right: 1px solid #ECEDF1;
`

const NoteActionSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const NoteSearchSection = styled.input`
    border-radius: 6px;
    background-color: #f5f5f5;
    background-image: url(/src/assets/search.svg);
    background-repeat: no-repeat;
    box-sizing: border-box;
    border: 1px solid transparent;
    outline: none;
    height: 42px;
    padding-left: 20px;
    background-position: calc(100% - 20px);
    padding-right: 40px;
    width: 100%;
`;

const Inner = styled.section`
    padding: 20px;
 `