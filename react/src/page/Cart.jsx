import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { Remove, Add } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateProduct,deleteOneCartProduct } from '../redux/cartRedux'

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
    padding: "10px",

})}
`;

const Tittle = styled.h1`
    font-weight: 300;
    text-align:center;
    margin-bottom: 20px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const TopTexts = styled.div`
     ${mobile({
    display: 'none',

})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
    flexDirection: "column",
})}
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    ${mobile({
    flexDirection: "column",
})}
`;

const ProductDetail = styled.div`
    flex:2;
    display: flex;

`;

const Image = styled.img`
    width: 200px;
    ${mobile({
    width: '170px'

})}
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
`;
const ProductName = styled.span`
    ${mobile({
    fontSize: "15px"
})}
`;
const ProductId = styled.span`
${mobile({
    fontSize: "15px"
})}
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};
    ${mobile({
    fontSize: "15px"
})}
`;

const ProductSize = styled.span`
${mobile({
    fontSize: "15px"
})}
`;

const PriceDetail = styled.span`
    flex:1;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    ${mobile({
    flexDirection: 'row',
    alignItems: 'center'

})}
`;


const ProductAmountContainer = styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 20px;
    ${mobile({
    marginBottom: '0px'


})}
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin:5px;
    ${mobile({
    margin: '5px 15px',
    fontSize: '30px'

})}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
       ${mobile({
    margin: '5px 15px'

})}
`;

const Hr = styled.hr`
    background-color:#eee;
    height:1px;
    border:none;
`;
const Summary = styled.div`
     flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
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



const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border:none;
  cursor: pointer;

`;


const DeleteOneCart = styled.div`
    font-size: 24px;
  cursor: pointer;

    &:hover{
        color: red;
    }
`;

const Cart = () => {
    const cart = useSelector(state => state.cart)
    let navigate = useNavigate(); 
    const dispatch = useDispatch();


    const handlerQuantity = (product,type) => {
        if(type === 'asc'){
            const quantity = product.quantity +1;

            dispatch(updateProduct({...product,quantity}));
        }
        if(type === 'dec'){
            if(product.quantity>=2){
                const quantity = product.quantity -1;
                dispatch(updateProduct({...product,quantity}));
                
            }

        }
    }

    const deleteOneCart= (product)=>{
        dispatch(deleteOneCartProduct(product));

    }

    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <Tittle>Your Bag</Tittle>
                <Top>
                    <TopButton onClick={() => navigate('/products/Be trai')}>CONTINUE SHOPPING </TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton onClick={() => navigate('/payment')}>CHECKOUT NOW</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product,index) => (
                            <Product key={index}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>Id:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <DeleteOneCart onClick={() =>deleteOneCart(product)}>X</DeleteOneCart>

                                    <ProductAmountContainer>
                                        <Remove style={{cursor: 'pointer'}} onClick={()=> handlerQuantity(product,"dec")} />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add style={{cursor: 'pointer'}} onClick={()=> handlerQuantity(product,'asc')}/>
                                    </ProductAmountContainer>
                                    <ProductPrice>{product.price * product.quantity} vnd</ProductPrice>
                                </PriceDetail>
                                <Hr />
                            </Product>

                        ))}


                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        {cart.products.map(product => (
                            <SummaryItem>
                                <SummaryItemText>{product.title}</SummaryItemText>
                                <SummaryItemPrice>{product.price * product.quantity}</SummaryItemPrice>
                            </SummaryItem>

                        ))}


                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <Button onClick={() => navigate('/payment')}>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Cart

