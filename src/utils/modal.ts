import styled from "styled-components";
import {Styles} from "react-modal";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export const CloseContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Close = styled.div`
    width: 30px;
    height: 30px;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
`;


export const styles = (props?: Styles): Styles =>( {
    overlay: {
        backgroundColor: 'rgb(213,214,215,0.5)',
        ...(props?.overlay || {})
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 510,
        height: 460,
        backgroundColor: '#FFFF',
        padding: 30,
        border: "1px solid #E8E9EB",
        borderRadius: 20,
        ...(props?.content || {})
    },
});
