import React from 'react'
import { LogTitle, NavbarContaint, NavbarWrapper, Menu, MenuItem, MenuItemLink } from './NavBar.elements'
import { MdOutlineCode } from "react-icons/md";

const Navbar = () => {
  return ( 
   <>
      <NavbarContaint>
        <NavbarWrapper>
         <LogTitle>
         <MdOutlineCode size="22px" />
            Javier Díaz Rayo
         </LogTitle>
            <Menu>
              <MenuItem>
                <MenuItemLink>
                  Home
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  About us
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  Repositories
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  CV
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  Contact
                </MenuItemLink>
              </MenuItem>
              
            </Menu>
        </NavbarWrapper>
    </NavbarContaint>
 
   </>
  )
}

export default Navbar