import {CSSProperties} from "react";
import styled from "styled-components";

export interface OptionProps {
    icon: string,
    label: string,
    css?: CSSProperties,
    handleClick?: () => void,
}

export const OptionCard = styled.section`
    display: flex;
    gap: 20px;
    cursor: pointer;
    padding-left: 20px;
    height: 40px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 20px;

    &:hover {
        background-color: #F8F8F8;
    }
`

export const Option = (props: OptionProps) => {
    return (
        <OptionCard style={{...props.css}} onClick={props.handleClick}>
            <img src={props.icon} alt=""/>
            <span>{props.label}</span>
        </OptionCard>
    )
}