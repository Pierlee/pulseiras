import React from 'react'
import NavigationBar from '../../Components/NavigationBar'
import Carousel from '../../Components/Carousel'
import Categories from '../../Components/Categories'
import Perks from '../../Components/Perks'
import Products from '../../Components/Products'

function Home() {
  return (
    <>     
      <NavigationBar/>
      <main>
        <Carousel/>
      </main>
      <Categories/>
      <Products />
      <Perks/>
    </>
  )
}

export default Home