import React from 'react'
import MainLogo from '../../images/logo.png';
import { NavLink } from "react-router-dom";
import { Logo, Menu, Sidebar, Item, Wrapper } from './sidebar.styled';
import { NavigationInterface } from '../../models/navigation.model';

const SidebarComponent = ({ routesLink }: NavigationInterface) => {
  return (
    <Sidebar>
      <Wrapper>
        <Logo src={MainLogo} />
        <Menu>
          {
            routesLink.map((route, index) => {
              return (
                route.showItem && (
                  <NavLink key={index} to={route.path}>
                    {route.sidebarText}
                  </NavLink>
                )
              )
            })
          }
        </Menu>
      </Wrapper>
    </Sidebar>
  )
}


export default SidebarComponent;