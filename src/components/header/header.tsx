import React from 'react'
import SearchBar from '../search-bar';
import { Header, Wrapper, Title, Heading, SubHeading, Description } from './header.styled';
import { useLocation } from "react-router-dom";
import { NavigationInterface } from '../../models/navigation.model';

const HeaderComponent = ({ routesLink }: NavigationInterface) => {
    const navigate = useLocation();
    const currentState = routesLink.filter(
        (route) => {
            const pathName = navigate.pathname === '/' ? '/dashboard' : route.path;
            return route.path === pathName
        }
    )[0];

    return (
        <Header>
            <Wrapper>
                <Heading>
                    <Title>{currentState?.headerText}</Title>
                    <SearchBar />
                </Heading>
                <SubHeading>
                    <Description>{currentState?.headerDescription}</Description>
                </SubHeading>
            </Wrapper>
        </Header>
    )
}

export default HeaderComponent;