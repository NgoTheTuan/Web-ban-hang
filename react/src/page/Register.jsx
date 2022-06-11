import styled from 'styled-components'

import { mobile } from '../responsive'
import axios from 'axios'
import { useState } from 'react'
import { login } from '../redux/apiCalls';
import { useDispatch } from 'react-redux'
import nen from '../img/nen.png'

const styles = {
    paperContainer: {
        backgroundImage: `url(${nen})`
    }
};
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
   center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color:white;
    ${mobile({
    width: '75%'

})}
`;

const Tittle = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.div`
    display: flex;
    flex-wrap:wrap;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
`;

const Agreement = styled.span`
width:100%;
    font-size: 12px;
    margin: 20px 0;
    padding-right:40px;
    color: red;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor: pointer;

`;

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [err, setErr] = useState('');
    const dispatch = useDispatch();


    const RegisterClick = async () => {
        if (password !== confirmPassword) {
            setErr("password And confirmPassword don't fight each other!");
        } else {
            try {
                const res = await axios.post('http://localhost:4000/api/auth/register', {
                    username,
                    email,
                    password
                });

                login(dispatch, {
                    username: res.data.username,
                    password: password
                });

            } catch (error) {

            }

        }
    }

    return (
        <Container style={styles.paperContainer}>
            <Wrapper>
                <Tittle>CREATE AN ACCOUNT</Tittle>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Agreement> {err ? err : ''}</Agreement>
                    <Button onClick={RegisterClick}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
