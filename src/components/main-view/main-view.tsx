import React from "react";
import { MainContent, MainWrapper } from "./main-view.styled";
import Sidebar from "../sidebar";
import Header from "../header";
import { RouterLinkInterface } from '../../models/router-link.model'
import HomeIcon from '../../icons/home';

export const routesLinkData: Array<RouterLinkInterface> = [
    {
        path: "/dashboard",
        exact: true,
        sidebarText: "Dashboard",
        headerText: "Welcome Guest",
        headerDescription:
            "Entérate de cómo interactuan las compañias en la siguiente información",
        showItem: true,
        icon: () => <HomeIcon color="#fb8019" />,
    },
];

const MainViewComponent = ({ children }: any) => {
    return (
        <MainContent>
            <Sidebar routesLink={routesLinkData} />
            <MainWrapper id="main-content">
                <Header routesLink={routesLinkData} />
                {children}
            </MainWrapper>
        </MainContent>
    );
};

export default MainViewComponent;
