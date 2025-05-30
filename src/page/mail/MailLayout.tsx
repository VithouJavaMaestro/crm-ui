import styled from "styled-components";
import {Left} from "./Left.tsx";
import {Middle} from "./Middle.tsx";
import {Right} from "./Right.tsx";

const MailCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
`

export const MailLayout = () => {
    return <MailCard>
        <Left/>
        <Middle/>
        <Right/>
    </MailCard>
}