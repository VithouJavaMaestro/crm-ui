import {Box} from "../Box.tsx";
import filter from "../../../public/filter.svg";
import addIcon from "../../../public/add.svg";
import styled from "styled-components";
import {NoteCreation} from "./NoteCreation.tsx";
import {useState} from "react";

const HeaderTitle = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #3F434A;
`;

const FilterButton = styled.div`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    outline: none;
    cursor: pointer;
    border: 2px solid #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const AddNoteButton = styled.div`
    width: 127px;
    height: 40px;
    background-color: #21943A;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
`;


const AddNoteButtonText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
`;


export const NoteHeader = () => {
    const [open, setOpen] = useState(false);
    return <>
        <NoteCreation open={open} onClose={() => setOpen(false)}/>
        <Box justify={'space-between'}>
            <HeaderTitle>
                Notes
            </HeaderTitle>
            <Box space={30}>
                <FilterButton>
                    <img src={filter} alt="filter"/>
                </FilterButton>
                <AddNoteButton onClick={() => setOpen(true)}>
                    <img src={addIcon} alt=""/>
                    <AddNoteButtonText>Add Note</AddNoteButtonText>
                </AddNoteButton>
            </Box>
        </Box>
    </>
}