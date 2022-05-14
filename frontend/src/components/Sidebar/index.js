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
  const isAdmin = localStorage.getItem("userType") === "admin" ? true : false;

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
              <SidebarLink href="/">Inicio</SidebarLink>
            </>
          ) : isAdmin ? (
            <>
              <SidebarLink href="/">Inicio</SidebarLink>
              <SidebarLink href="/dashboard/solicitudes">Solicitudes</SidebarLink>
              <SidebarLink href="/dashboard/eventos">Asistencias</SidebarLink>
              <SidebarLink href="/dashboard/nuevo-evento">Nuevo Evento</SidebarLink>
              <SidebarLink href="/dashboard/miembros">Miembros</SidebarLink>
            </>
          ) : (
            <>
              <SidebarLink href="/">Inicio</SidebarLink>
              <SidebarLink href="/perfil">Mi perfil</SidebarLink>
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
