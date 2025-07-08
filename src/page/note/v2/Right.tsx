import styled from "styled-components";
import {BoldIcon} from "../../../component/svg/BoldIcon.tsx";
import {ItalicIcon} from "../../../component/svg/ItalicIcon.tsx";
import {UnderlineIcon} from "../../../component/svg/UnderlineIcon.tsx";
import {LinkIcon} from "../../../component/svg/LinkIcon.tsx";
import {ListIcon} from "../../../component/svg/ListIcon.tsx";
import {TextAlignLeftIcon} from "../../../component/svg/TextAlignLeftIcon.tsx";
import {TextAlignCenter} from "../../../component/svg/TextAlignCenter.tsx";
import {TextAlignRight} from "../../../component/svg/TextAlignRight.tsx";
import {Image} from "../../../component/svg/Image.tsx";
import {DeleteIcon} from "../../../component/svg/DeleteIcon.tsx";
import {RichEditProps} from "./RichTextEdit.tsx";
import {useRef, useState} from "react";
import {TextStrikeIcon} from "../../../component/svg/TextStrikeIcon.tsx";
import {CodeIcon} from "../../../component/svg/CodeIcon.tsx";
import {handlers} from "./Handler.tsx";


export const Right = () => {

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const descriptionRef = useRef(null);

    const [text, setText] = useState<string>();


    const applyStyles = (name: string) => {
        if (!descriptionRef.current || descriptionRef.current.trim() === 0) {
            return;
        }
        let spanElement = document.createElement("span");
        spanElement.innerText = descriptionRef.current;
        handlers[name](spanElement);
        setText(text.replace(descriptionRef.current, spanElement.outerHTML));
    }

    const computeSelectionText = () => {
        let sel = getSelection();
        const {anchorOffset, focusOffset} = sel;
        if ((anchorOffset === focusOffset) || !text) {
            return;
        }
        descriptionRef.current = text.substring(anchorOffset, focusOffset);
    };

    return <Container className={'crm-scroll'}>
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
                            const index = cIndex * 100 + pIndex;
                            return <Section key={cIndex} focused={focusedIndex === index}
                                            onClick={(e) => {
                                                setFocusedIndex(index);
                                                applyStyles(component.handler)
                                            }}>
                                {component.icon}
                            </Section>
                        })}
                    </RichTextContainer>
                </>
            })}
        </DescriptionHeader>
        <DescriptionTitleContainer>
            <DescriptionTitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolorum hic iure quas quia
                reiciendis unde velit. Provident, suscipit!
            </DescriptionTitle>
        </DescriptionTitleContainer>

        <DescriptionContent contentEditable suppressContentEditableWarning
                            onSelect={() => {
                                computeSelectionText();
                            }} onBlur={event => {
            setText(event.currentTarget.textContent);
        }} dangerouslySetInnerHTML={{__html: text}}/>


    </Container>
}


const DescriptionContent = styled.div`
`

const DescriptionTitle = styled.h2`

`;


const DescriptionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #ecedf1;
    padding-bottom: 30px;
`

const RichTextContainer = styled.section`
    display: flex;
    border-right: 2px solid #F1F3F4;
`

const Section = styled.section<{ focused: boolean }>`
    cursor: pointer;

    &:hover {
        background: #F1F3F4;
    }
;
    background: ${(props) => props.focused ? '#E5F1FB' : '#FFFFFF'};
    padding: 12px;
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
`

const Container = styled.section`
    padding: 30px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const richEditData: Array<RichEditProps> = [
    {
        components: [
            {
                handler: "bold",
                icon: <BoldIcon/>,
            },
            {
                handler: "italic",
                icon: <ItalicIcon/>,
            },
            {
                handler: "underline",
                icon: <div style={{
                    marginTop: 2
                }}>
                    <UnderlineIcon/>
                </div>,
            },
            {
                handler: "strike",
                icon: <TextStrikeIcon/>,
            },
            {
                handler: "code",
                icon: <CodeIcon/>
            }
        ]
    },
    {
        components: [
            {
                icon: <LinkIcon/>
            },
            {
                icon: <ListIcon/>
            },
        ]
    },
    {
        components: [
            {
                icon: <TextAlignLeftIcon/>
            },
            {
                icon: <TextAlignCenter/>
            },
            {
                icon: <TextAlignRight/>
            }
        ]
    },
    {
        components: [
            {
                icon: <Image/>
            }
        ]
    },
    {
        components: [
            {
                icon: <DeleteIcon/>
            }
        ]
    }
]