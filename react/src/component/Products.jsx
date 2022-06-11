import styled from 'styled-components'
import Product from './Product'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;



const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:4000/api/product?category=${cat}`
                        : `http://localhost:4000/api/product`
                );
                setProducts(res.data);
            } catch (error) {

            }
        }

        getProducts();
    }, [cat]);

    // Bộ lọc dựa trên color và size
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => {
                return Object.entries(filters).every(([key, value]) => {
                    return item[key].includes(value);
                })
            })
        )
    }, [products, cat, filters]);

    // Bộ lọc dựa trên color và size
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            {cat
                ? filteredProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))
                : products.slice(0, 8).map(item => (
                    <Product item={item} key={item.id} />
                ))

            }

           
        
         
        </Container>
    )
}

export default Products