import {Slide, ToastContainer} from "react-toastify";
import {useAppSelector} from "../apps/hooks.ts";

export const Toast = () => {

    const showToast = useAppSelector(state => state.action.showToast);

    return (
        <>
            {showToast && <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition={Slide}
            />}
        </>
    )
}