import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import LoginButton from "../LoginButton";

const Sidebar = ({ isOpen, toggle }) => {
  const currentLocation = window.location.pathname;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {currentLocation === "/" ? (
            <>
              <SidebarLink href="/aplicar">Aplicar</SidebarLink>
              <SidebarLink href="/">Home</SidebarLink>
            </>
          ) : (
            <>
              <SidebarLink href="/">Home</SidebarLink>
              <SidebarLink href="/eventos">Eventos</SidebarLink>
            </>
          )}
          <LoginButton />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
