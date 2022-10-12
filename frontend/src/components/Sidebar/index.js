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
              <SidebarLink href="/dashboard">Inicio</SidebarLink>
              <SidebarLink href="/dashboard/solicitudes">Solicitudes</SidebarLink>
              <SidebarLink href="/dashboard/eventos">Asistencias</SidebarLink>
              <SidebarLink href="/dashboard/nuevo-evento">Nuevo Evento</SidebarLink>
              <SidebarLink href="/dashboard/miembros">Miembros</SidebarLink>
              <SidebarLink href="/dashboard/miembros-eliminados">Antiguos Miembros</SidebarLink>
            </>
          ) : (
            <>
              <SidebarLink href="/mi-perfil">Inicio</SidebarLink>
              <SidebarLink href="/eventos">Eventos</SidebarLink>
              <SidebarLink href="/asistencias">Asistencias</SidebarLink>
            </>
          )}
          <LoginButton />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
