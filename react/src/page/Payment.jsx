import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { useSelector } from 'react-redux'
import { mobile } from '../responsive'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { delelteProduct } from '../redux/cartRedux'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`

`;

const Title = styled.h1`
    text-align:center;
    padding:20px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content:space-around;
    ${mobile({
    flexDirection: 'column',
})}
`;

const Left = styled.div`
    flex: 3;
    padding: 20px 0 0 40px;
    ${mobile({
    padding:"10px 15px",
})}
`;

const InputContainer = styled.div`
    display: flex;
`;
const InputName = styled.span`
    display: block;
    width: 150px;
`;


const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column; 
    margin-top: 30px;
`;

const Input = styled.input`
    width: 60%;
    margin-bottom:20px;
    padding: 10px;
    font-size: 15px;
`;


const Right = styled.div`
    flex: 1.5;
    padding: 30px;

`;

const Button = styled.button`
    padding: 15px 25px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    margin: 30px;

    &:hover {
        background-color:teal;
        color: white;
    }
`;


const Summary = styled.div`
     flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 40vh;
    ${mobile({
    marginTop: '15px'
})}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;



const SummaryItemText = styled.span`
       ${mobile({
    width: '100px'
})}
`;

const SummaryItemPrice = styled.span``;

const Payment = () => {
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user.currentUser)

    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const OnPaymentClick = async () => {

        if (cart.products) {
            cart.products.forEach(async (product) => {
                try {
                    await axios.post('http://localhost:4000/api/order',
                        {
                            userId: user._id,
                            products: [{
                                productId: product._id,
                                quantity: product.quantity
                            }
                            ],
                            amount: cart.quantity,
                            address: address,
                            phone: phone
                        });

                    dispatch(delelteProduct({}));
                    navigate("/");

                } catch (error) {

                }
            });
        }

    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Mua Hàng</Title>
            <Wrapper>
                <Left>
                    <PaymentContainer>
                        <InputContainer>
                            <InputName >User Name</InputName>
                            <Input value={user.username ? user.username : ''} />
                        </InputContainer>
                        <InputContainer>
                            <InputName>Address </InputName>
                            <Input onChange={(e) => setAddress(e.target.value)} />
                        </InputContainer><InputContainer>
                            <InputName>Phone</InputName>
                            <Input onChange={(e) => setPhone(e.target.value)} />
                        </InputContainer>


                    </PaymentContainer>

                    <Button onClick={OnPaymentClick}>Mua hàng</Button>
                </Left>

                <Right>
                    <Summary>
                        <SummaryTitle>Tổng đơn hàng</SummaryTitle>

                        {cart.products.map(product => (
                            <SummaryItem>
                                <SummaryItemText>{product.title}</SummaryItemText>
                                <SummaryItemPrice>{product.price * product.quantity}</SummaryItemPrice>
                            </SummaryItem>

                        ))}


                        <SummaryItem type="total">
                            <SummaryItemText >Tổng tiền</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>

                    </Summary>
                </Right>

            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Payment
