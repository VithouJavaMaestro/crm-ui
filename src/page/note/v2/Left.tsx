import styled from "styled-components";
import {AddIcon} from "../../../component/svg/AddIcon.tsx";

export const Left = () => {
    return <Container>
        <CategoryHeader>
            <CategoryHeaderTitle>
                Categories
            </CategoryHeaderTitle>
            <AddCategoryIcon>
                <AddIcon fill={'black'}/>
            </AddCategoryIcon>
        </CategoryHeader>
        <CategoryItemContainer>
            <CategoryItem>
                <CategoryTitle>
                    All
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    General
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Programming
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Travel
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Personal
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    All
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    General
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Programming
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Travel
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Personal
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    All
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    General
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Programming
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Travel
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Personal
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    All
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    General
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Programming
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Travel
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Personal
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    All
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    General
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Programming
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Travel
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Personal
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    All
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    General
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Programming
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Travel
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
            <CategoryItem>
                <CategoryTitle>
                    Personal
                </CategoryTitle>
                <NumNote>
                    23
                </NumNote>
            </CategoryItem>
        </CategoryItemContainer>

    </Container>
}

const NumNote = styled.span`
    align-self: center;
    font-size: 14px;
`

const CategoryItemContainer = styled.section`
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    height: calc(100vh - 130px);
`

const CategoryItem = styled.section`
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    padding: 10px 20px;

    border-top: 1px solid #ECEDF1;

    &:hover {
        background-color: #e5f1fb;
    }
`

const CategoryTitle = styled.section`
    display: flex;
    justify-content: flex-start;


`

const AddCategoryIcon = styled.section`
    cursor: pointer;
`

const CategoryHeaderTitle = styled.h4`
    text-transform: uppercase;
`


const CategoryHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
`

const Container = styled.section`
    border-right: 1px solid #ECEDF1;
`