import {useErrorBoundary} from "react-error-boundary";

export const useClientError = (message: string) => {
    const {showBoundary} = useErrorBoundary();
    showBoundary(message);
}

export const useServerError = (status: number) => {
    const {showBoundary} = useErrorBoundary();
    showBoundary(status);
}