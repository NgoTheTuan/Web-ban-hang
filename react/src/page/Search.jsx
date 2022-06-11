import styled from 'styled-components'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Announcement from '../component/Announcement'
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const Titile = styled.div`

`;

const Search = () => {
    const location = useLocation();
    const search = location.pathname.split('/')[2];

    const [product, setProduct] = useState([]);

    const [searchProduct, setSearchProduct] = useState([]);

    useEffect(async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/product');

            setProduct(res.data);

        } catch (error) {

        }
    }, [])


    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <Titile>{search}</Titile>
            </Wrapper>

            <Footer />

        </Container>
    )
}

export default Search