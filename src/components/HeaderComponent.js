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
    NavbarText,
    Container,
    Row
  } from 'reactstrap';
import companyLogo from './../../src/All-Access-Services-logos/simple-logo-copy.png';

const Header = () => {

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

        return(
            <Navbar className="navbar-nav" dark expand="md">
                <NavbarBrand href="/"><img src={companyLogo} className="navbar-brand" style={{height: 'auto', width: 80}} alt="logo" /></NavbarBrand>
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
                    <NavbarText>Get My Stuff</NavbarText>
                </Collapse>
            </Navbar>
        );
}

export default Header;