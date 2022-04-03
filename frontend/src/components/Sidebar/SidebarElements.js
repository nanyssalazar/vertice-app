import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #f9f9f9;
`;

export const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #3e3e25;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 0;
  height: 50vh;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #e60b62;
    transition: 0.2s ease-in-out;
  }
`;
