import React from 'react'
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';
import { useSelector } from "react-redux"
import DisplayWord from '../DisplayWord';
import Loader from '../Loder';

const Home = () => {

  const data = useSelector((state) => state.data);
  const loader = useSelector((state) => state.loading);
  const displayError = useSelector(state => state.error);

  return (
    <div className="home-container">
      <NavBar />
      <div className="search-container ">
        <SearchBar />
      </div>
      {
        data ? <DisplayWord data={data?.[0]} idx = {data ? data.length : 0} /> : ""
      }
      {
        loader ? <Loader /> : ""
      }
      {
        displayError ? (
            <h3 className="text-xl font-semibold p-4">Data Not found, Try again..!</h3>
        ) : ""
      }
    </div>
  )
}

export default Home