import styled from "styled-components";
import {useMemo} from "react";

const AVATAR_COLORS = [
    '#F44336', // red
    '#E91E63', // pink
    '#9C27B0', // purple
    '#3F51B5', // indigo
    '#2196F3', // blue
    '#03A9F4', // light blue
    '#00BCD4', // cyan
    '#009688', // teal
    '#4CAF50', // green
    '#FF9800', // orange
    '#FF5722', // deep orange
    '#607D8B', // blue gray
];

const AvatarStyled = styled.div<{ bg: string }>`
    font-size: 16px;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background: ${props => props.bg};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}
`

const AvatarText = styled.span`
    color: #FFFFFF;
`

interface AvatarProps {
    name: string
}

export const Avatar = (props: AvatarProps) => {
    const name = useMemo(() => extractName(props.name), [props.name]);
    const bgColor = useMemo(() => getColorFromName(props.name), [props.name]);
    return <AvatarStyled bg={bgColor}>
        <AvatarText>
            {name}
        </AvatarText>
    </AvatarStyled>
}

const getColorFromName = (name: string) => {
    const hash = [...name].reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const index = Math.abs(hash) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
}

const extractName = (name: string) => {
    const match = name.match(/(\b\S)?/g);
    if (match !== null) {
        let nestedMatch = match.join("").match(/(^\S|\S$)?/g);
        if (nestedMatch !== null) {
            return nestedMatch.join("").toUpperCase();
        }
    }
    return name;
}