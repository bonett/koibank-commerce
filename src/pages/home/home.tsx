import React from 'react'
import MainView from "../../components/main-view";
import TableView from '../../components/table';
import { HomePageWrapper } from './home.styled';

const HomePage = () => {
  return (
    <MainView>
      <HomePageWrapper>
        <TableView />
      </HomePageWrapper>
    </MainView>
  )
}

export default HomePage;