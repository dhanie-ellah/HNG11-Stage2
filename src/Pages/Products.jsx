import React from 'react'
import NavTop from '../Components/Nav/NavTop'
import NavMiddle from '../Components/Nav/NavMiddle'
import NavBottom from '../Components/Nav/NavBottom'
import Sidebar from '../Components/Sidebar'
import ProductsList from '../Components/ProductsList'
import Footer from '../Components/Footer'

const Products = () => {
  return (
    <div>
      {/* **********navbar********** */}
      <section className=' flex flex-col sm:gap-5'>
        <NavTop/>
        <NavMiddle/>
        <NavBottom location="Home  >  Product > Brand > Unbranded > Jackets"/>
      </section>
      {/* **********middle********** */}
      <section className=' flex justify-between px-10 lg:px-5 sm:px-2'>
        <Sidebar/>
        <ProductsList/>
      </section>
      <Footer/>
    </div>
  )
}

export default Products