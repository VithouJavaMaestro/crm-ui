import './App.css'
import './__theme__/color.css';
import {Layout} from "./page/main/Layout.tsx";
import {Route, Routes} from "react-router";
import {Secured} from "./Secured.tsx";
import {Dashboard} from "./page/dashboard/Dashboard.tsx";
import {Ecommerce} from "./page/ecommerce/Ecommerce.tsx";
import {NoteLayout} from "./page/note/NoteLayout.tsx";
import {MailLayout} from "./page/mail/MailLayout.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Secured/>}>
                    <Route path='/' element={<Layout/>}>
                        <Route index={true} element={<Dashboard/>}/>
                        <Route path={'/note'} element={<NoteLayout/>}/>
                        <Route path={"/ecommerce"} element={<Ecommerce/>}/>
                        <Route path={"/mail"} element={<MailLayout/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
