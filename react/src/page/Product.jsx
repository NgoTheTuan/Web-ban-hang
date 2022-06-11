import styled from 'styled-components'
import Announcement from '../component/Announcement';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import { Remove, Add } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
    flexDirection: 'column',
    padding: "20px "
})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit:cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({
    padding: "20px "
})}
`;
const Tittle = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width:60%;
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
    ${mobile({
    width: "100%"

})}
`;

const Filter = styled.div`
    display: flex;
    align-items:center;
`;

const FilterTitle = styled.span`
    font-weight: 200;
    font-size: 20px;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 20px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
    width:60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
    width: '100%'
})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px; 
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;


    &:hover {
        background-color:teal;
        color: white;
    }
`;



const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const getProductId = async () => {
            try {
                const product = await axios.get(`http://localhost:4000/api/product/find/${id}`)
                setProduct(product.data)
            } catch (err) {

            }
        }

        getProductId();
    }, [id])

    const handlerQuantity = (type) => {
        if (type === 'dec') {
            if (quantity < 2) {
                setQuantity(quantity)

            } else {
                setQuantity(quantity - 1)

            }
        }
        if (type === 'asc') {
            setQuantity(quantity + 1)
        }
    }

    const handerColor = (c, e) => {
        setColor(c);

        const item = document.getElementById(c);
        if (item.style.border) {
            item.style.border = '';
        } else {
            item.style.border = '1.5px solid black';
        }
    }

    const handerClick = () => {
        //Update cart
        dispatch(addProduct({ ...product, quantity, color, size }));
    }

    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Img src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Tittle>{product.title}</Tittle>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>{product.price}vnd</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color </FilterTitle>
                            {product.color?.map((color) => {
                                return <FilterColor id={color} color={color} key={color} onClick={(e) => handerColor(color, e)} />
                            })
                            }

                        </Filter>
                        <Filter>
                            <FilterTitle>Size </FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)} >
                                <FilterSizeOption disabled selected>Size</FilterSizeOption>
                                {product.size?.map((size) => {
                                    return <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                })
                                }

                            </FilterSize>

                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handlerQuantity("dec")} />
                            <Amount >{quantity}</Amount>
                            <Add onClick={() => handlerQuantity("asc")} />
                        </AmountContainer>

                        <Button onClick={handerClick}>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
