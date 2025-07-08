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
import {useState} from "react";
import {TextStrikeIcon} from "../../../component/svg/TextStrikeIcon.tsx";
import {CodeIcon} from "../../../component/svg/CodeIcon.tsx";
import {handlers} from "./Handler.tsx";

export const Right = () => {

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const applyStyles = (name: string) => {

        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
            return;
        }


        const html = document.getElementById("description");

        if (!html) {
            return;
        }

        handlers[name](html);
    }


    return <Container>
        <p className={'xbolder'}>sdfdsf</p>
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
                            const idx = pIndex * 100 + cIndex;
                            return <Section key={idx} focused={focusedIndex === idx}
                                            onClick={() => {
                                                setFocusedIndex(idx);
                                                applyStyles(component.handler ?? '');
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

        <DescriptionContent id={'description'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci consequuntur, dolorem ea earum
            hic, iste molestiae natus pariatur porro ratione recusandae similique soluta veniam voluptate. Aperiam at
            atque corporis dolore ea eveniet fugiat impedit in inventore ipsam iusto modi, neque non obcaecati officia
            provident quibusdam repudiandae saepe velit vitae. Enim error ipsum maxime nemo, nobis numquam quam quasi
            quod recusandae rerum tempora vero? Aut beatae blanditiis commodi ducimus facere ipsam necessitatibus
            perferendis rerum voluptates. Ab asperiores autem commodi delectus dicta, ex fugiat, incidunt ipsam ipsum
            nisi numquam, quas vero voluptatibus! Aliquid deleniti doloremque doloribus eius, error iure reprehenderit
            veritatis.
        </DescriptionContent>
    </Container>
}


const DescriptionContent = styled.span`
    padding: 10px;
`

const DescriptionTitle = styled.h2`

`;


const DescriptionTitleContainer = styled.section`
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