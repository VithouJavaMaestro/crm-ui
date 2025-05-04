import './App.css'
import './__theme__/color.css';
import {Login} from "./page/login/Login.tsx";

function App() {

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Login/>
            </div>
        </>
    )
}

export default App
