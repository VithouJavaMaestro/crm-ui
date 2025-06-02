import {Profile} from "../../component/Profile.tsx";
import vithou from "../../assets/vithou.jpg";

export const FromMe = () => {
    return <div className="imessage">

        <p className="from-me">It was loud. We just laid there and said &ldquo;is this an earthquake? I think
            this
            is
            an earthquake.&rdquo;</p>
        <Profile src={vithou} width={40} height={40} style={{
            alignSelf: 'flex-end'
        }}/>
    </div>
}