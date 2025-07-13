import styled from "styled-components";
import {BoldIcon} from "../../../component/svg/BoldIcon.tsx";
import {ItalicIcon} from "../../../component/svg/ItalicIcon.tsx";
import {UnderlineIcon} from "../../../component/svg/UnderlineIcon.tsx";
import {TextStrikeIcon} from "../../../component/svg/TextStrikeIcon.tsx";
import {Editor, EditorContent, useEditor} from "@tiptap/react";
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import React, {ReactElement, useState} from "react";
import {Object} from "../../../utils/shared.ts";
import {RichTextItem} from "./RichTextItem.tsx";
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import {TextAlignLeftIcon} from "../../../component/svg/TextAlignLeftIcon.tsx";
import {TextAlignCenter} from "../../../component/svg/TextAlignCenter.tsx";
import {TextAlignRight} from "../../../component/svg/TextAlignRight.tsx";
import {TextAlign} from "@tiptap/extension-text-align";

export interface RichEditProps {
    components: Array<RichTextEditProp> & {}
}

export interface RichTextEditProp {
    icon: ReactElement<Object, Object>,
    handleClick?: (editor: Editor) => void;
    styles: (editor: Editor) => React.CSSProperties | undefined
}

function createEditor(content: string) {
    return useEditor({
        extensions: [Document, Bold, Text, Paragraph, Italic, Underline, Strike, TextAlign.configure({
            types: ['paragraph'],
        }),],
        content: content
    });
}

export const Right = () => {

    const [changeDescription, setChangeDescription] = useState<boolean>();

    const [changeTitle, setChangeTitle] = useState<boolean>();


    const titleEditor = createEditor('<span>\n' +
        '        Devs Just Want to Have Fun by Cyndi Lauper\n' +
        '      </span>');

    const descriptionEditor = createEditor('<span>\n' +
        'Just Want to Have Fun by Cyndi Lauper\n' +
        '      </span>');

    const [currentEditor, setCurrentEditor] = useState<Editor | null>();

    return <Container>
        <DescriptionHeader>
            <CategoryContainer>
                <Circle/>
                <CategoryText>
                    General
                </CategoryText>
            </CategoryContainer>

            {richEditData.map((data, pIndex) => {
                return <>
                    <RichTextContainer key={pIndex}>
                        {data.components.map((component, cIndex) => {
                            const key = cIndex * 100 + pIndex;
                            return <RichTextItem editor={currentEditor} props={component} key={key}/>
                        })}
                    </RichTextContainer>
                </>
            })}

        </DescriptionHeader>
        <Scrollable className={'crm-scroll'}>
            <ContentContainer>
                <StyledEditorContent editor={titleEditor} onFocus={() => {
                    setCurrentEditor(titleEditor);
                    setChangeTitle(true);
                }} style={{
                    borderBottom: '2px solid #ecedf1',
                }} onBlur={() => {
                    setChangeTitle(false);
                }}/>
                {changeTitle && <SaveContentContainer>
                    <CancelButton>Cancel</CancelButton>
                    <SaveButton>Save</SaveButton>
                </SaveContentContainer>}
            </ContentContainer>

            <ContentContainer>
                <StyledEditorContent editor={descriptionEditor}
                                     onFocus={() => {
                                         setCurrentEditor(descriptionEditor);
                                         setChangeDescription(true);
                                     }}
                                     onBlur={() => {
                                         setChangeDescription(false);
                                     }}/>
                {changeDescription && <SaveContentContainer>
                    <CancelButton>Cancel</CancelButton>
                    <SaveButton>Save</SaveButton>
                </SaveContentContainer>}
            </ContentContainer>
        </Scrollable>


    </Container>
}

const Scrollable = styled.section`
    width: 100%;
    height: calc(100vh - 140px);

    padding-right: 30px;
    padding-left: 30px;
    padding-top: 20px;
`

const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const SaveContentContainer = styled.section`
    align-self: flex-end;
    cursor: pointer;
    display: flex;
    gap: 10px
`

const Button = styled.button`
    padding: 6px;
    width: 6rem;
    cursor: pointer;
    outline: none;
    border: none;
`;

const CancelButton = styled(Button)`
    background-color: #F5F5F5;
    color: #333333;

    &:hover {
        background-color: #E0E0E0;
        color: #111111;
    }

    &:active {
        background-color: #D5D5D5;
        color: #111111;
    }
`

const SaveButton = styled(Button)`
    background-color: #0078D4;
    color: #FFFFFF;

    &:hover {
        background-color: #005fa3;
    }

    &:active {
        background-color: #004c87;
    }

    &:disabled {
        background-color: #A1C4E7;
    }
`

const StyledEditorContent = styled(EditorContent)`
    p {
        padding: 4px;
        font-size: 12px;
    }

    [contenteditable]:focus {
        outline: 2px solid #0078D4;
    }
`

const RichTextContainer = styled.section`
    display: flex;
    border-right: 2px solid #F1F3F4;
    gap: 5px;
`


const CategoryContainer = styled.section`
    display: flex;
    gap: 10px;
    align-items: center;
    padding-right: 20px;
    border-right: 2px solid #F1F3F4;
`

const CategoryText = styled.h3`
`

const Circle = styled.section`
    border-radius: 50%;
    background-color: blue;
    width: 18px;
    height: 18px;
`

const DescriptionHeader = styled.section`
    display: flex;
    padding-right: 30px;
    padding-left: 30px;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const applyStyle = (editor: Editor, value: Object) => {
    return {
        background: editor.isFocused && editor.isActive(value) ? '#E5F1FB' : '#FFFFFF'
    }
}

const richEditData: Array<RichEditProps> = [
    {
        components: [
            {
                icon: <BoldIcon/>,
                handleClick: (editor) => {
                    editor.chain().focus().toggleBold().run();
                },
                styles: editor => applyStyle(editor, "bold")
            },
            {
                icon: <ItalicIcon/>,
                handleClick: editor => {
                    editor.chain().focus().toggleItalic().run();
                },
                styles: editor => applyStyle(editor, "italic")
            },
            {
                icon: <div style={{
                    marginTop: 2
                }}>
                    <UnderlineIcon/>
                </div>,
                handleClick: editor => {
                    editor.chain().focus().toggleUnderline().run();
                },
                styles: editor => applyStyle(editor, "underline")
            },
            {
                icon: <TextStrikeIcon/>,
                handleClick: editor => {
                    editor.chain().focus().toggleStrike().run();
                },
                styles: editor => applyStyle(editor, "strike")
            },
        ]
    },
    {
        components: [
            // {
            //     icon: <LinkIcon/>,
            //     handleClick: editor => {
            //         editor.chain().focus().toggleLink({
            //             href: "http",
            //         }).run();
            //     },
            //     styles: editor => applyStyle(editor, "link")
            // },
            // {
            //     icon: <ListIcon/>
            // },
        ]
    },
    {
        components: [
            {
                icon: <TextAlignLeftIcon/>,
                handleClick: editor => {
                    editor.chain().focus().toggleTextAlign('left').run();
                },
                styles: editor => applyStyle(editor, {textAlign: 'left'})
            },
            {
                icon: <TextAlignCenter/>,
                handleClick: editor => {
                    editor.chain().focus().toggleTextAlign('center').run();
                },
                styles: editor => applyStyle(editor, {textAlign: 'center'})
            },
            {
                icon: <TextAlignRight/>,
                handleClick: editor => {
                    editor.chain().focus().toggleTextAlign('right').run();
                },
                styles: editor => applyStyle(editor, {textAlign: 'right'})
            }
        ]
    },
    // {
    //     components: [
    //         {
    //             icon: <Image/>
    //         }
    //     ]
    // },
    // {
    //     components: [
    //         {
    //             icon: <DeleteIcon/>
    //         }
    //     ]
    // }
]