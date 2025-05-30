import './App.css'
import './__theme__/color.css';
import {Layout} from "./page/Layout.tsx";
import {Route, Routes} from "react-router";
import {Secured} from "./Secured.tsx";
import {Dashboard} from "./page/dashboard/Dashboard.tsx";
import {Ecommerce} from "./page/ecommerce/Ecommerce.tsx";
import {NoteLayout} from "./page/note/NoteLayout.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Secured/>}>
                    <Route path='/' element={<Layout/>}>
                        <Route index={true} element={<Dashboard/>}/>
                        <Route path={'/note'} element={<NoteLayout/>}/>
                        <Route path={"/ecommerce"} element={<Ecommerce/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
