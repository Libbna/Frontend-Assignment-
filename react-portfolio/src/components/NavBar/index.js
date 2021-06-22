import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavBarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to = '/'>
                    Libbna
                </NavLogo>
            </NavbarContainer>
        </Nav>



    </>
  );
}

export default Navbar;
