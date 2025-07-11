import styled from "styled-components"
import {RichTextEditProp} from "./Right.tsx";
import {Editor} from "@tiptap/react";
import {useState} from "react";

export const RichTextItem = ({props, editor}: {props: RichTextEditProp, editor: Editor}) => {

    const [toggle, setToggle] = useState(false);

    return <Container onClick={() =>{
        if (props.handleClick) props.handleClick(editor);
        setToggle(!toggle);
    }} style={props.styles(editor)} >
        {props.icon}
    </Container>
}

const Container = styled.section`
    cursor: pointer;
    padding: 12px;
`