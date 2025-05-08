import './App.css'
import './__theme__/color.css';
import {Dashboard} from "./page/Dashboard.tsx";
import {Route, Routes} from "react-router";
import {Secured} from "./Secured.tsx";

function App() {
    return (
        <Routes>
            <Route element={<Secured/>}>
                <Route path='/' element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default App
