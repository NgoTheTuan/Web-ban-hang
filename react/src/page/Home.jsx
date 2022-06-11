import React from 'react'
import Announcement from '../component/Announcement'
import Category from '../component/Category'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Products from '../component/Products'
import Slider from '../component/Slider'
import './home.css'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
            <Products/>
            <Newsletter />
            <Footer />
        </div>

    )
}

export default Home