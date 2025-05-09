import './App.css'
import './__theme__/color.css';
import {PageWrapper} from "./page/PageWrapper.tsx";
import {Route, Routes} from "react-router";
import {Secured} from "./Secured.tsx";
import {Note} from "./page/Note.tsx";
import {Dashboard} from "./page/Dashboard.tsx";

function App() {
    return (
        <Routes>
            <Route element={<Secured/>}>
                <Route path='/' element={<PageWrapper/>}>
                    <Route index={true} element={<Dashboard/>}/>
                    <Route path={'/note'} element={<Note/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
