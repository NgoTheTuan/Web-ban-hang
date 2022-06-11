import styled from 'styled-components'
import { Send } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({
    fontSize: "50px"

})}
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
    textAlign: 'center',
    fontSize: "20px"

})}
`;
const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border:1px solid lightgray;
    ${mobile({
    width: '80%',
})}
`;
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;

`;
const Button = styled.button`
    flex:1;
    border:none;
    color:white;
    background-color:teal;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Bản tin</Title>
            <Desc>Nhận cập nhật kịp thời từ các sản phẩm yêu thích của bạn. </Desc>
            <InputContainer>
                <Input placeholder='Your email ' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter