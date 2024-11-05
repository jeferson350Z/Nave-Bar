
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black; /* Fundo colorido */
  padding: 1rem 2rem;
`
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: red ;
`;


const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;


const NavLink = styled.a`
  color: green;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;


const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>Minha-logo </Logo>
            <NavLinks>
                <NavLink href="#home">Inicio</NavLink>
                <NavLink href="#about">Sobre</NavLink>
                <NavLink href="#services">Serviços</NavLink>
                <NavLink href="#contact">Contato</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar;
