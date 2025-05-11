import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./apps/store.ts";
import {BrowserRouter} from "react-router";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorPage} from "./page/ErrorPage.tsx";


createRoot(document.getElementById('root')!).render(
    <ErrorBoundary FallbackComponent={ErrorPage}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
)
