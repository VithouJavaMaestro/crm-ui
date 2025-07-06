import styled from "styled-components";
import {Team} from "./Team.tsx";
import {Divider} from "./Divider.tsx";
import {useGetBelongToQuery} from "../../api/chatApi.ts";


export const Teams = () => {
    const {data} = useGetBelongToQuery("");
    return <TeamContainer>
        <TeamWrapper>
            {data?.map((value, index) => (
                <>
                    <Team name={value.firstname + " " + value.lastname} lastChat={"Just thinking"} key={index}/>
                    <Divider/>
                </>
            ))}
        </TeamWrapper>
    </TeamContainer>
}

const TeamWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    scrollbar-color: #636363 #F5F5F5;
    overflow: auto;
    height: calc(100vh - 210px);
    scrollbar-width: none;
`

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    height: 100%;
`