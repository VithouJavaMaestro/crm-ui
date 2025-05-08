import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {root} from "./apps/store.ts";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
    <Provider store={root}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
