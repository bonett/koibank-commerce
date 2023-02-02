import React from 'react'
import MainLogo from '../../images/logo.png';
import MainLogoMobile from '../../images/logo-mobile.png';
import { NavLink } from "react-router-dom";
import { Logo, Menu, Sidebar, Icon, Wrapper } from './sidebar.styled';
import { NavigationInterface } from '../../models/navigation.model';

const SidebarComponent = ({ routesLink }: NavigationInterface) => {
  return (
    <Sidebar>
      <Wrapper>
        <Logo src={MainLogo} className={'desktop'}/>
        <Logo src={MainLogoMobile} className={'mobile'}/>
        <Menu>
          {
            routesLink.map((route, index) => {
              return (
                route.showItem && (
                  <NavLink key={index} to={route.path === '/dashboard' ? '/' : route.path}>
                    <Icon>
                      <route.icon />
                    </Icon>
                    <span className="text">{route.sidebarText}</span>
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