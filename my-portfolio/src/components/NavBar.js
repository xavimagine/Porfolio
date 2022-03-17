import React from 'react'
import { LogTitle, NavbarContaint, NavbarWrapper, Menu, MenuItem, MenuItemLink } from './NavBar.elements'
import { MdOutlineCode } from "react-icons/md";
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  return ( 
   <>
      <NavbarContaint>
        <NavbarWrapper>
          <IconContext.Provider value={{ style:{ fontSize: "2em"}}}>
        
            <LogTitle>
            <MdOutlineCode size="22px" />
                Javier Díaz Rayo
            </LogTitle>
            <Menu>
              <MenuItem>
                <MenuItemLink>
                  HOME  
                  </MenuItemLink>
                </MenuItem>
              <MenuItem>
                  <MenuItemLink>
                  ABOUT ME
                  </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  REPOSITORIES
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  CV
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>
                  CONTACT
                </MenuItemLink>
              </MenuItem>
            </Menu>

          </IconContext.Provider>       
        </NavbarWrapper>
    </NavbarContaint>
 
   </>
  )
}

export default Navbar