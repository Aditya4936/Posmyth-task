import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductList from './Product/ProductList'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <ProductList />
        <Footer/>
    </div>
  )
}

export default Home