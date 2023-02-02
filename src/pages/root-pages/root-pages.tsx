import React from 'react';
import { Routes, Route, useOutlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { KoiBankTheme } from '../../theme';
import { GlobalStyles } from "../../theme/globalStyle";
import HomePage from '../home';

const DashboardLayout = () => {
  const outlet = useOutlet();
  return <>{outlet}</>
}

const NoMatch = () => {
  return <h1>Not Found</h1>
}

const RoutingPages = () => {
  return (
    <ThemeProvider theme={KoiBankTheme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default RoutingPages