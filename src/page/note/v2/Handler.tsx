import "../../../App.css";

export const handlers: Record<string, (props: HTMLElement) => void> = {
    "bold": (props) => {
        props.style.fontWeight = "bold";
    },
    "italic": (props) => {
        props.style.fontStyle = "italic";
    },
    "underline": (props) => {
        props.style.textDecoration = "underline";
    },
    "strike": (props) => {
        props.style.textDecoration = "line-through";
    }
}
