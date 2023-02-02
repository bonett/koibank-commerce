import React, { useState, useEffect } from "react";
import MainView from "../../components/main-view";
import TableView from "../../components/table";
import Loader from "../../components/common/loader";
import { HomePageWrapper } from "./home.styled";
import { THeaderColumns } from "../../constants";
import { fetchMock } from '../../services/fetchDummy';

const HomePage = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataList, setDataList] = useState([]);

  const getDummyData = async () => {
    try {
      setIsFetching(true);
      const { result } = await fetchMock(true, 1000);
      setDataList(result);
      setIsFetching(false);
    } catch (e: any) {
      console.log(e.message);
      setIsFetching(false);
    }
  }

  useEffect(() => {
    getDummyData();
  }, []);

  return (
    <MainView>
      <HomePageWrapper>
        <>
          {isFetching && <Loader />}
        </>
        <>
          {dataList && dataList.length > 0 && <TableView rows={dataList} columns={THeaderColumns} />}
        </>
      </HomePageWrapper>
    </MainView>
  );
};

export default HomePage;
