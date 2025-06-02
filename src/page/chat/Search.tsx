import styled from "styled-components";
import searchIcon from "../../assets/search.svg";

export const Search = () => {
    return <SearchContainer>
        <img src={searchIcon} alt="search"/>
        <SearchInput type="text" name={"search"} placeholder={"Search..."}/>
    </SearchContainer>
}

const SearchInput = styled.input`
    background-repeat: no-repeat;
    background-position: left;
    outline: none;
    border: none;
    background-color: #F5F5F5;
`

const SearchContainer = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 10px;
`