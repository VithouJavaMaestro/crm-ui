import './App.css'
import './__theme__/color.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const registrationId = "default";
        const code = params.get("code");
        const state = params.get("state");
        if (code && registrationId && state) {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, "", cleanUrl);
            axios.post("http://localhost:9000/token", null, {
                params: {
                    registration_id: registrationId,
                    code: code,
                    state: state
                }
            })
                .then(res => {
                    console.log("Getting response")
                    console.log(res);
                }).catch(err => console.log(err));
        } else {
            window.location.href = "http://localhost:9000/login/default";
        }
    }, []);

    return (
        <>
            <h1>Welcome home</h1>
        </>
    )
}

export default App
