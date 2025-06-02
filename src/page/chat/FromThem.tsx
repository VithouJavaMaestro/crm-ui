import {Profile} from "../../component/Profile.tsx";
import vithou from "../../assets/vithou.jpg";

export const FromThem = () => {
    return <div className="imessage">
        <Profile src={vithou} width={40} height={40} style={{
            alignSelf: 'flex-end'
        }}/>
        <p className="from-them">It was loud. We just laid there and said &ldquo;is this an earthquake? I think
            this
            is
            an earthquake.&rdquo;</p>
    </div>

}