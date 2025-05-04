import styled from "styled-components";
import {useState} from "react";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-blue-100);
`;

const LoginCard = styled.div`
    width: 500px;
    padding: 50px;
    background-color: var(--color-gray-50);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    border-radius: 16px;
`;

const LoginTitle = styled.h4`
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    margin: 0;
`;

const Button = styled.button`
    width: 400px;
    height: 40px;
    background-color: var(--color-gray-50);
    border: 1px solid var(--color-gray-400);
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GoogleAuthButton = styled(Button)`
    background-image: url("/src/assets/google.svg");
    background-repeat: no-repeat;
    background-position: 20px center;

    &:hover {
        background-color: var(--color-gray-100);
    }
`;


const GoogleAuthButtonText = styled.span`
    color: var(--color-slate-500);
    font-size: 15px;
`;

const Divider = styled.div`
    font-size: 30px;
    display: flex;
    align-items: center;

    &::before, &::after {
        flex: 1;
        content: '';
        background-color: var(--color-gray-400);
        width: 122px;
        height: 1px;
    }
`;

const LoginWithEmailTitle = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: var(--color-slate-400);
    opacity: 0.6;
    padding: 0 10px;
`;

const InputLabel = styled.label`
    font-weight: 400;
    font-size: 14px;
    color: var(--color-slate-400);
    display: block;
    margin-bottom: 5px;
`;

const TextFieldInput = styled.input`
    outline: none;
    box-sizing: border-box;
    border: 1px solid var(--color-gray-400);
    width: 400px;
    border-radius: 20px;
    padding: 10px;
    background-color: var(--color-gray-100);
    color: var(--color-slate-700);

    &:focus {
        border: 2px solid var(--color-green-500);
    }
`;

const LoginButton = styled(Button)`
    background-color: var(--color-green-500);
    color: var(--color-gray-50);
`;

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

const RememberMe = styled.label`
    font-weight: 400;
    font-size: 16px;
    vertical-align: middle;
    line-height: 16px;
    margin: 0;
    color: var(--color-slate-500);
`;

const FormSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 26px;
`;

const ShowPwIcon = styled.button`
    position: absolute;
    right: 12px;
    top: 68%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
    }
`

export const Login = () => {

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');

    const handleToggleShowPwd = () => {
        if (type == 'password') {
            setType('text');
        } else {
            setType('password')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
    }

    return (
        <Wrapper>
            <LoginCard>
                <LoginTitle>Login To Your Account</LoginTitle>
                <GoogleAuthButton>
                    <GoogleAuthButtonText>Login with Google</GoogleAuthButtonText>
                </GoogleAuthButton>
                <Divider>
                    <LoginWithEmailTitle>Or Login with email</LoginWithEmailTitle>
                </Divider>
                <FormWrapper onSubmit={handleSubmit}>
                    <div>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <TextFieldInput type="email" id="email" name="email"/>
                    </div>
                    <div style={{
                        position: 'relative',
                        width: '400px'
                    }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <TextFieldInput type={type} id="password" name="password" value={password} onChange={event => {
                            setPassword(event.target.value);
                        }}/>
                        <ShowPwIcon onClick={() => handleToggleShowPwd()}>
                            <img src="/src/assets/show.svg" alt="Toggle visibility"/>
                        </ShowPwIcon>
                    </div>
                    <FormSection>
                        <div style={{display: "flex", gap: 7}}>
                            <Checkbox type="checkbox" id="remember"/>
                            <RememberMe htmlFor="remember">Remember Me</RememberMe>
                        </div>
                        <a href="#" style={{color: '#34A853'}}>Forgot Password?</a>
                    </FormSection>
                    <LoginButton type="submit">Login</LoginButton>
                </FormWrapper>
            </LoginCard>
        </Wrapper>
    );
};
