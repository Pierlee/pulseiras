import React from 'react'
import NavigationBar from '../../Components/NavigationBar'
import Carousel from '../../Components/Carousel'
import Categories from '../../Components/Categories'
import Perks from '../../Components/Perks'
import ProductList from '../../Components/ProductList'
import ModalMoreDetails from '../../Components/ModalMoreDetails'

function Home() {
  return (
    <>     
      <NavigationBar />
      <main>
        <section className="carousel-section">
          <Carousel />
        </section>
        <section className="categories-section">
          <Categories />
        </section>
        <section className="products-section">
          <ProductList />
        </section>
        <section className="perks-section">
          <Perks />
        </section>
      </main>
      <ModalMoreDetails />
    </>
  )
}

export default Home