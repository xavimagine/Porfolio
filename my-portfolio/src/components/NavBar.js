import React, {useState} from 'react';
import { LogTitle, NavbarContaint, NavbarWrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './NavBar.elements'
import { MdOutlineCode  } from "react-icons/md";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);    

  return ( 
   <>
      <NavbarContaint>
        <NavbarWrapper>
          <IconContext.Provider value={{ style:{ fontSize: "0.9em"}}}>
            <LogTitle>
            <MdOutlineCode/>
                Javier Díaz Rayo
            </LogTitle>

              <MobileIcon  onClick={ () => setShowMobileMenu (!showMobileMenu)}>
                <BsMenuButtonWideFill/>
              </MobileIcon>


            <Menu  open= { showMobileMenu}>
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