import React, { useState } from 'react'
import logo from '/assets/images/logo-meteora.png'
import * as S from './style'

function NavigationBar() {
  const [ isMenuClicked, setIsMenuClicked ] = useState(false)

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked)
  }
  return (
      <S.Navbar>
          <div className='navbar-left'>
            <a className='logo'>
                <img src={logo} alt="" />
            </a>
            <S.Hamburger onClick={updateMenu} className={isMenuClicked ? "clicked" : ""}>
              <div className='burger-bar'></div>
              <div className='burger-bar'></div>
              <div className='burger-bar'></div>
            </S.Hamburger>
              <S.Navitems className={isMenuClicked ? "show-menu" : ""}>
                <li><a href="/">Home</a></li>
                <li><a href="/stores">Our Stores</a></li>
                <li><a href="/new">New Arrivals</a></li>
                <li><a href="/promotions">Promotions</a></li>
              </S.Navitems>
          </div>
          <div className='search'>
            <S.SearchInput type="text" placeholder="Product..."/>
            <S.SearchButton>Search</S.SearchButton>
          </div>
      </S.Navbar>
  )
}

export default NavigationBar