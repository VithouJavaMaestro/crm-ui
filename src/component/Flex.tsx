import styled from "styled-components";


export interface FlexProps {
    direction?: "row" | "column";
    justify?: "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    space?: number;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({direction = "row"}) => direction};
    flex-wrap: ${({wrap = "nowrap"}) => wrap};
    justify-content: ${({justify = "space-between"}) => justify};
    align-items: ${({alignItems = "stretch"}) => alignItems};
    gap: ${({space = 0}) => space}px;
`