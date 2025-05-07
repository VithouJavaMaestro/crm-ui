import {useAppSelector} from "../apps/hooks.ts";
import {RootState} from "../apps/store.ts";

export const Dashboard = () => {
    const token = useAppSelector((state: RootState) => state.token);


    return <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        <h1>AccessToken: {token?.accessToken && token.accessToken}</h1>
        <h1>RefreshToken: {token?.refreshToken && token.refreshToken}</h1>
    </div>
}