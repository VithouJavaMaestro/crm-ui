import styled from "styled-components";

export const NoteItem = () => {
    return <Container>
        <HeaderSection>
            <HeaderCategory>
                <Circle/>
                <NoteText>General</NoteText>
            </HeaderCategory>
            <NoteText>
                01/01/2025
            </NoteText>
        </HeaderSection>
        <TitleSection>
            Lorem ipsum dolor sit amet tesrrrrrrrr...
        </TitleSection>
        <Description>
            Lorem ipsum dolor sit amet, consecteturddd...
        </Description>
    </Container>
}

//41 -> title
//85 -> description


const Description = styled.span`
    color: #b1b3b5;
    display: block;
`

const TitleSection = styled.span`
    font-weight: 600;
    font-size: 1.1rem;
    display: block;
`

const NoteText = styled.span`
    color: #b3b4b8;
    font-size: 14px;
`

const Circle = styled.section`
    border-radius: 50%;
    background-color: blue;
    width: 18px;
    height: 18px;
    align-self: center;
`

const HeaderCategory = styled.section`
    display: flex;
    gap: 8px;
`

const HeaderSection = styled.section`
    display: flex;
    justify-content: space-between;
`

const Container = styled.section`
    border-top: 2px solid #ecedf1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;

    &:hover {
        background: #E5F1FB;
    }
`