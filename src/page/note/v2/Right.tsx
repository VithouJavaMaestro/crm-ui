import styled from "styled-components";
import {BoldIcon} from "../../../component/svg/BoldIcon.tsx";
import {ItalicIcon} from "../../../component/svg/ItalicIcon.tsx";
import {UnderlineIcon} from "../../../component/svg/UnderlineIcon.tsx";
import {LinkIcon} from "../../../component/svg/LinkIcon.tsx";
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
import Link from '@tiptap/extension-link'
import {TextAlignLeftIcon} from "../../../component/svg/TextAlignLeftIcon.tsx";
import {TextAlignCenter} from "../../../component/svg/TextAlignCenter.tsx";
import {TextAlignRight} from "../../../component/svg/TextAlignRight.tsx";
import Heading from '@tiptap/extension-heading'
import {TextAlign} from "@tiptap/extension-text-align";

export interface RichEditProps {
    components: Array<RichTextEditProp> & {}
}

export interface RichTextEditProp {
    icon: ReactElement<Object, Object>,
    handleClick?: (editor: Editor) => void;
    styles?: (editor: Editor) => React.CSSProperties
}

export const Right = () => {

    const [changeDescription, setChangeDescription] = useState<boolean>();


    const editor = useEditor({
        extensions: [Heading, Document, Bold, Text, Paragraph, Italic, Underline, Strike, Link.configure({
            openOnClick: false,
            autolink: true,
            defaultProtocol: 'https',
            protocols: ['http', 'https'],
            isAllowedUri: (url, ctx) => {
                try {
                    // construct URL
                    const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

                    // use default validation
                    if (!ctx.defaultValidate(parsedUrl.href)) {
                        return false
                    }

                    // disallowed protocols
                    const disallowedProtocols = ['ftp', 'file', 'mailto']
                    const protocol = parsedUrl.protocol.replace(':', '')

                    if (disallowedProtocols.includes(protocol)) {
                        return false
                    }

                    // only allow protocols specified in ctx.protocols
                    const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

                    if (!allowedProtocols.includes(protocol)) {
                        return false
                    }

                    // disallowed domains
                    const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
                    const domain = parsedUrl.hostname

                    if (disallowedDomains.includes(domain)) {
                        return false
                    }

                    // all checks have passed
                    return true
                } catch {
                    return false
                }
            },
            shouldAutoLink: url => {
                try {
                    // construct URL
                    const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

                    // only auto-link if the domain is not in the disallowed list
                    const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
                    const domain = parsedUrl.hostname

                    return !disallowedDomains.includes(domain)
                } catch {
                    return false
                }
            },

        }), TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        ],
        content: `
           <p><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad autem cupiditate dolorem eius esse ex facere fuga illum magnam nesciunt, non nostrum officiis possimus, quam quasi repellendus saepe tempore ut voluptate. Cupiditate dolor incidunt modi nemo nostrum odit unde! Accusantium aliquam blanditiis consequuntur corporis cum delectus dolor earum eos est ex impedit in incidunt, labore laborum magnam molestias mollitia necessitatibus numquam omnis, optio perspiciatis praesentium quae qui quisquam quos sequi soluta voluptates? Esse explicabo fugit ipsum itaque nemo nulla numquam porro possimus! Ab ad consequatur culpa deleniti doloribus eaque esse excepturi ipsum molestiae, nesciunt perspiciatis qui sapiente sunt, vero.</p>
        `,
        shouldRerenderOnTransaction: true,
        immediatelyRender: true,
    });

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
                            const key = cIndex * 100 + pIndex;
                            return <RichTextItem editor={editor} props={component} key={key}/>
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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        }}>
            <StyledEditorContent editor={editor} multiple={true}
                                 onFocus={() => {
                                     setChangeDescription(true);
                                 }}
                                 onBlur={() => {
                                     setChangeDescription(false);
                                 }}/>
            {changeDescription && <div style={{
                alignSelf: 'flex-end',
                cursor: 'pointer'
            }}>
                <button>Cancel
                </button>
                <button>Save
                </button>
            </div>}

        </div>


    </Container>
}

const StyledEditorContent = styled(EditorContent)`
    p {
        padding: 10px;
    }

    [contenteditable]:focus {
        outline: 2px solid #0078D4;
    }
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
                icon: <BoldIcon/>,
                handleClick: (editor) => {
                    editor.chain().focus().toggleBold().run();
                },
                styles: editor => {
                    return {
                        background: editor.isActive('bold') ? '#E5F1FB' : '#FFFFFF'
                    }
                }
            },
            {
                icon: <ItalicIcon/>,
                handleClick: editor => {
                    editor.chain().focus().toggleItalic().run();
                },
                styles: editor => {
                    return {
                        background: editor.isActive('italic') ? '#E5F1FB' : '#FFFFFF'
                    }
                }
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
                styles: editor => {
                    return {
                        background: editor.isActive('underline') ? '#E5F1FB' : '#FFFFFF'
                    }
                }
            },
            {
                icon: <TextStrikeIcon/>,
                handleClick: editor => {
                    editor.chain().focus().toggleStrike().run();
                },
                styles: editor => {
                    return {
                        background: editor.isActive('strike') ? '#E5F1FB' : '#FFFFFF'
                    }
                }
            },
        ]
    },
    {
        components: [
            {
                icon: <LinkIcon/>,
                handleClick: editor => {
                    editor.chain().focus().toggleLink({
                        href: "http",
                    }).run();
                },
                styles: editor => {
                    return {
                        background: editor.isActive('link') ? '#E5F1FB' : '#FFFFFF'
                    }
                }
            },
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
                styles: editor => {
                    return {
                        background: editor.isActive({textAlign: 'left'}) ? '#E5F1FB' : '#FFFFFF'
                    }
                }
            },
            {
                icon: <TextAlignCenter/>,
                handleClick: editor => {
                    editor.chain().focus().toggleTextAlign('center').run();
                },
                styles: editor => {
                    return {
                        background: editor.isActive({textAlign: 'center'}) ? '#E5F1FB' : '#FFFFFF'
                    }
                }
            },
            {
                icon: <TextAlignRight/>,
                handleClick: editor => {
                    editor.chain().focus().toggleTextAlign('right').run();
                },
                styles: editor => {
                    return {
                        background: editor.isActive({textAlign: 'right'}) ? '#E5F1FB' : '#FFFFFF'
                    }
                }
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