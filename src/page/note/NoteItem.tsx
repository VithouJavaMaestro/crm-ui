import dateIcon from "../../../public/date.svg";
import pushpinIcon from "../../../public/pushpin.svg";
import styled from "styled-components";

const NoteItemContainer = styled.div`
    width: 400px;
    height: 350px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
`;

const NoteIcon = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFD240;
    clip-path: polygon(0 0, 100% 0, 0 100%);
`;

const NoteItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 20px;
`;

const NoteDateContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const NoteDescriptionContainer = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
`

export const NoteItem = () => {
    return <NoteItemContainer>
        <NoteIcon/>
        <NoteItemHeader>
            <NoteDateContainer>
                <img src={dateIcon} alt="date"/>
                <p>12 June, 2020</p>
            </NoteDateContainer>
            <img src={pushpinIcon} alt="pushpin"/>
        </NoteItemHeader>
        <NoteDescriptionContainer>
            <h4>The title of a note</h4>
            <p>Lorem ipsum dolor sit amet, ullamcous cididunt consectetur adipiscing elit, seds do et eiusmod
                tempor
                incididunt ut laborels dolore magnarels aliqua. Ut enim ad nesid utminim veniam, quis nostrud eiusmo
                exercitation ullamco labori is amco commodo consequat seds eiusmod.</p>
        </NoteDescriptionContainer>
    </NoteItemContainer>
}