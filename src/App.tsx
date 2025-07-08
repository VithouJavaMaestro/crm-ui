import './App.css'
import './__theme__/color.css';
import {Layout} from "./page/main/Layout.tsx";
import {Route, Routes} from "react-router";
import {Dashboard} from "./page/dashboard/Dashboard.tsx";
import {Ecommerce} from "./page/ecommerce/Ecommerce.tsx";
import {ChatLayout} from "./page/chat/ChatLayout.tsx";
import {MailLayout} from "./page/mail/MailLayout.tsx";
import {NoteLayoutV2} from "./page/note/v2/NoteLayoutV2.tsx";
import Contact from "./page/LayoutContact.tsx";

function App() {
    return (
        <div>
            <Routes>
                {/*<Route element={<Secured/>}>*/}
                    <Route path='/' element={<Layout/>}>
                        <Route index={true} element={<Dashboard/>}/>
                        <Route path={'/note'} element={<NoteLayoutV2/>}/>
                        <Route path={"/ecommerce"} element={<Ecommerce/>}/>
                        <Route path={"/mail"} element={<MailLayout/>}/>
                        <Route path={"/chat"} element={<ChatLayout/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Route>
                {/*</Route>*/}
            </Routes>
        </div>
    )
}

export default App
