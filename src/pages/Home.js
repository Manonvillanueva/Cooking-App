// => Ne pas oublier d'importer les composants réacts comme useState ou useEffect si on les utilise
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  // Constante d'état [valeur d'affichage,fonction qui permet de changer la valeur] = useState(valeur actuelle)
  // => Const pour récupérér les valeurs tapés dans searchBar
  const [searchValue, setSearchValue] = useState("");
  // => Const pour récupérér les datas de l'API
  const [data, setData] = useState([]);
  // Utilisation de useEffect() pour obtenir les données de l'API, mettre des crochets vides à la fin si on veut le jouer qu'une seule fois, sinon se joue en continu
  // L'effet se déclenche au premier rendu du composant et chaque fois que searchValue changera car nous l'avons mis dans son tableau de dépendance
  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      )
      // Lorsque les données sont reçues, on met à jour data avec les résultats de l'API
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
          placeholder="Tapez le nom d'un aliment (en anglais)"
        />
      </div>
      <div className="mealContainer"></div>
      {/* Ici on va envoyer les données {data} à <Card/> grâce à un props qui s'appelle dataSend, le props sert à passer des données d'un composant à un autre  */}
      <Card dataSend={data} />
    </div>
  );
};

export default Home;
