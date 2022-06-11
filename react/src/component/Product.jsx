import styled from 'styled-components'
import { Search, ShoppingCartOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width:280px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position: relative;
    overflow: hidden;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const ProductItem = styled.div`
    flex: 1;
    margin: 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position: relative;
    overflow: hidden;

    &:hover ${Info}{
        opacity: 1;
    }
`;



const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color:white;
    position: absolute;
`;
const Image = styled.img`
    width: 100%;
    z-index:2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:white;
    margin: 10px;

    &:hover{
        background-color:#e9f5f5;
        transition:all 0.3s linear;
        transform: scale(1.1);
        cursor:pointer;
    }
`;


const ProductDetail = styled.div`
    padding-bottom: 15px;
    width:100%;
`;

const Name = styled.h1`
font-family: inherit;
    font-weight: 500;
     font-size: 22px;
    padding: 5px 10px 0 10px;
    text-align:left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Price = styled.span`
    display: block;
    padding: 10px 0 0 15px;
    color: #f68620;
`;



const Product = ({ item }) => {

    return (
        <Container>
            <ProductItem>
                <Circle />
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                            <Search />
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </ProductItem>
            <ProductDetail>
                <Name>{item.title}</Name>
                <Price>{item.price} đ</Price>
            </ProductDetail>
        </Container>
    )
}

export default Product