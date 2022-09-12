import React, { useState } from "react";
import styled from "styled-components";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav className="NavbarCSS">
      <Logo className="logo">
        <span>MIXELLENCE</span>
      </Logo>
      <Menu isOpen={isOpen}>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Drinks</MenuLink>
        <MenuLink href="">Bartenders</MenuLink>
        <MenuLink href="">Testimonials</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: FFFFFF;
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  align-items: center;
  font-size: 0.9rem;

  &:hover {
    color: pink;
  }
  transition: all 0.3s ease-in;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
'    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")}
    transition: max - height 0.3s ease -in;
  }`;
const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default Navbar;
