import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import companyLogo from './../../src/All-Access-Services-logos/All-Access-Services-logos.jpeg';

const Header = () => {

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

        return(
            <Navbar className="py-3" color="light" light expand="md">
                <NavbarBrand href="/"><img src={companyLogo} style={{height: 40, width: 40}} alt="logo" /><span className="divider"></span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                    <NavItem className="p-1">
                        <NavLink href="/components/">Schedule</NavLink>
                    </NavItem>
                    <NavItem className="p-1">
                        <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
                    </NavItem>
                    <NavItem className="p-1">
                        <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                    </NavItem>
                    
                    </Nav>
                    <NavbarText>Get My Stuff Back</NavbarText>
                </Collapse>
            </Navbar>
        );
}

export default Header;