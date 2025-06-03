import {Profile} from "../../component/Profile.tsx";
import vithou from "../../assets/vithou.jpg";
import {Conversion} from "./Chat.tsx";


export const FromMe = (conversation: Conversion) => {
    return <div className="imessage" style={{
        alignSelf: 'flex-end',
        display: 'flex',
        gap: 10,
        paddingBottom: 20,
    }}>
        <p className="from-me">{conversation.message}</p>
        <Profile src={vithou} width={40} height={40} style={{
            alignSelf: 'flex-end'
        }}/>
    </div>
}