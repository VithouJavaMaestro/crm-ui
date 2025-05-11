import styled from "styled-components";
import backIcon from "../../public/back.svg";

const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #FFFFFF 0%, #c1f6e7 25%, #c1f6e7 50%, #c1f6e7 75%, #FFFFFF 100%);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ErrorCode = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 250px;
    line-height: 250px;
    color: #21943A;
    font-family: 'Nico Moji';
`;

const ErrorTitle = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: #3F434A;
`;

const BackHome = styled.div`
    width: 162px;
    height: 40px;
    background-color: #21943A;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    cursor: pointer;
`

const ErrorDescription = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
`;

const BackHomeText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
`

const errorMessages: Record<number, { title: string; description: string }> = {
    400: {
        title: "Bad Request",
        description: "The server couldn't understand your request. Please check and try again."
    },
    401: {title: "Unauthorized", description: "You need to log in to access this page."},
    403: {title: "Forbidden", description: "You don't have permission to view this page."},
    404: {title: "Not Found", description: "The page you're looking for doesn't exist or has been moved."},
    500: {title: "Internal Server Error", description: "Something went wrong on our end. Please try again later."},
    502: {title: "Bad Gateway", description: "The server received an invalid response from the upstream server."},
    503: {title: "Service Unavailable", description: "The service is temporarily unavailable. Please try again soon."},
    504: {title: "Gateway Timeout", description: "The server took too long to respond. Try again later."},
    429: {title: "Too Many Requests", description: "You've made too many requests. Please slow down."},
};


export const ErrorPage = ({error}: { error: Error & { status: number } }) => {
    const errorMessage = errorMessages[error.status];

    return <ErrorContainer>
        <ErrorCode>{error.status}</ErrorCode>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <ErrorTitle>{errorMessage.title}</ErrorTitle>
            <ErrorDescription>{errorMessage.description}</ErrorDescription>
        </div>
        <BackHome onClick={() => window.location.href = "/"}>
            <img src={backIcon} alt="back"/>
            <BackHomeText>Back to Home</BackHomeText>
        </BackHome>
    </ErrorContainer>
}