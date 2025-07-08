import {ReactElement} from "react";
import {Object} from "../../../utils/shared.ts";

export interface RichEditProps {
    components: Array<IconProps>,
}

export interface IconProps {
    icon: ReactElement<Object, Object>,
    handler?: string,
}



export const RichTextEdit = (props: IconProps) => {
    return <div>
        {props.icon}
    </div>
}