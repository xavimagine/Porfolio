import React, {useState} from 'react';
import { LogTitle, NavbarContaint, NavbarWrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './NavBar.elements'
import { MdOutlineCode  } from "react-icons/md";
import { GoHome, GoPerson, GoFileDirectory, GoBriefcase , GoMention,GoX } from "react-icons/go";
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
             <p> Javier Díaz Rayo</p> 
            </LogTitle>

              <MobileIcon  onClick={ () => setShowMobileMenu (!showMobileMenu)}>
                {showMobileMenu ?  <GoX/> : <BsMenuButtonWideFill/>}
              </MobileIcon>


            <Menu  open= { showMobileMenu}>
              <MenuItem>
                <MenuItemLink onClick={ () => setShowMobileMenu (!showMobileMenu)} >
                  <div>
                    <GoHome/>
                    HOME
                  </div>
                    
                  </MenuItemLink>
                </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={ () => setShowMobileMenu (!showMobileMenu)}>
                  <div>
                  <GoPerson/>
                  ABOUT ME  
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={ () => setShowMobileMenu (!showMobileMenu)}>
                  <div>
                  <GoFileDirectory/>
                    REPOSITORIES
                  </div>
                  
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={ () => setShowMobileMenu (!showMobileMenu)}>
                  <div>
                    <GoBriefcase/>
                    CV
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={ () => setShowMobileMenu (!showMobileMenu)}>
                  <div>
                    <GoMention/>
                    CONTACT
                  </div>
                  
                </MenuItemLink>
              </MenuItem>
            </Menu>

          </IconContext.Provider>       
        </NavbarWrapper>
    </NavbarContaint>
 
   </>
  );
};

export default Navbar;