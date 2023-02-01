import React from "react";
import { MainContent, MainWrapper } from "./main-view.styled";
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
import { RouterLinkInterface } from '../../models/router-link.model'

const MainViewComponent = ({ children }: any) => {
    const routesLinkData: Array<RouterLinkInterface> = [
        {
            path: "/dashboard",
            exact: true,
            sidebarText: "Dashboard",
            headerText: "Welcome Guest",
            headerDescription:
                "Entérate de cómo interactuan las compañias en la siguiente información",
            showItem: true
        },
        {
            path: "/about",
            exact: true,
            sidebarText: "About",
            headerText: "Dev Information",
            headerDescription: "Entérate",
            showItem: false
        }
    ];

    return (
        <MainContent>
            <Sidebar routesLink={routesLinkData} />
            <MainWrapper id="main-content">
                <Header routesLink={routesLinkData} />
                {children}
                <Footer />
            </MainWrapper>
        </MainContent>
    );
};

export default MainViewComponent;
