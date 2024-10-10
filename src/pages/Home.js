import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      )
      .then((res) => setData(res.data.meals));
  }, [searchValue]);
  return (
    <div>
      <div className="header">
        <h1 className="title">Cooking App</h1>
        <p>Recherche ton plat :</p>
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
          className="searchBar"
          placeholder="Tapez un aliment (en anglais)"
        />
      </div>
      <div className="mealContainer"></div>
      <Card data={data} />
    </div>
  );
};

export default Home;
