import React from "react";
import ReactDOM from "react-dom";

interface LoaderProps {
    open: boolean | true,
    css?: React.CSSProperties
}

export const Loader = (props: LoaderProps) => {
    return <>
        {props.open && ReactDOM.createPortal(
            <div className={'global-loading-overlay'}>
                <div className={'loader'}/>
            </div>, document.getElementById("root") as HTMLElement)
        }
    </>
}