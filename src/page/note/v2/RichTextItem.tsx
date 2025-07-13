import styled from "styled-components"
import {RichTextEditProp} from "./Right.tsx";
import {Editor} from "@tiptap/react";
import {useState} from "react";


export const RichTextItem = ({props, editor}: { props: RichTextEditProp, editor: Editor | undefined | null }) => {

    const styles = () => {
        if (!editor) {
            return undefined;
        }

        return props.styles(editor);
    }

    const [toggle, setToggle] = useState(false);

    return <Container onClick={() => {
        if (editor && props.handleClick) {
            props.handleClick(editor);
        }
        setToggle(!toggle);
    }} style={styles()}>
        {props.icon}
    </Container>
}

const Container = styled.section`
    cursor: pointer;
    padding: 12px;
`