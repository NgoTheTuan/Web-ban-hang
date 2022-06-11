import styled from 'styled-components'
import Announcement from '../component/Announcement';
import Products from '../component/Products';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { mobile } from '../responsive'
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div`

`;
const Tittle = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({
    flexDirection: 'column'

})}
`;
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`;

const FilterText = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
`;
const Option = styled.option`
    padding: 10px;

`;


const Next = styled.button`
    padding: 8px 20px;
    border: 1px solid #b5aeae;
    background-color: white;
    cursor: pointer;
    margin: 0 10px;

    &:hover{
    background-color: #f5efef;

    }
`;
const Prev = styled.button`
     padding: 8px 20px;
    border: 1px solid #b5aeae;
    background-color: white;
    cursor: pointer;
    margin: 0 10px;
    &:hover{
    background-color: #f5efef;

    }
`;
const Number = styled.span``;
const Panigate = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content:center;
    align-items:center;
    margin-top: 20px;
`;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        })
    }

    const title = cat.split("%20").join(' ');

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Tittle>{title.toUpperCase()}</Tittle>
            <FilterContainer>
                <Filter>
                    <FilterText>Lọc sản phẩm:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sắp xếp sản phẩm:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Mới nhất</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>

            <Products cat={cat} filters={filters} sort={sort} />

            <Panigate>
                <Next>Next</Next>
                <Number>1 / 2</Number>
                <Prev>Prev</Prev>
                </Panigate>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
