import React from 'react'
import { LogTitle, NavbarContaint, NavbarWrapper } from './NavBar.elements'
import urls from '../Galery/blanco.png'

const Navbar = () => {
  return ( 
   <>
      <NavbarContaint>
        <NavbarWrapper>
          <LogTitle>
            <img  src={urls} alt="" class="logo"></img>
            <h1>Javier Díaz Rayo </h1> 
          </LogTitle>
        </NavbarWrapper>
    </NavbarContaint>
 
   </>
  )
}

export default Navbar