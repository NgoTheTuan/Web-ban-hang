import { useState } from 'react';
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
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
      background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color:white;
    ${mobile({
    width: '75%'

})}
`;

const Tittle = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction:column;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0 ;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-bottom: 10px;
    background-color:teal;
    color:white;
    cursor: pointer;
`;

const Link = styled.a`
    text-decoration:none;
    margin:5px 0;
    font-size: 12px;
    cursor: pointer;
`;

const Err = styled.span`
    color:red;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }



    return (
        <Container style={styles.paperContainer}>
            <Wrapper>
                <Tittle>SIGN IN</Tittle>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick}>LOGIN</Button>
                    {error ? <Err>Username or password not found</Err> : ''}
                    <Link onClick={() => navigate('/register')}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login

