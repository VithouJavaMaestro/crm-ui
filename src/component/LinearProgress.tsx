import React from "react";


interface ProgressProps {
    open: boolean | true,
    css?: React.CSSProperties
}

export const LinearProgress = (props: ProgressProps) => {
    return (
        <>
            {/*{props.open && ReactDOM.createPortal(*/}
            {/*    <ProgressBar*/}
            {/*        completed={50}*/}
            {/*        height="4px"*/}
            {/*        width=""*/}
            {/*        borderRadius="0"*/}
            {/*        isLabelVisible={false}*/}
            {/*        labelColor="#e80909"*/}
            {/*        labelSize="0"*/}
            {/*    />*/}
            {/*    , document.getElementById("overlay-root") as HTMLElement)*/}
            {/*}*/}
        </>
    )
}