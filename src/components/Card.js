import React from "react";

// => Mettre le nom du props en accolades pour recevoir les données, ici le props est dataSend et on veut recevoir les données de l'API
const Card = ({ dataSend }) => {
  return (
    <ul>
      {dataSend
        .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
        // => La méthode MAP est utilisé pour parcourir des tableaux
        // => Ici il parcourt dataSend, et pour chaque élément de ce tableau il crée un nouvel élément de li . On lui passe un argument meal pour pouvoir accéder aux différentes données de chaque élément
        .map((meal) => (
          <li className="listMeal" key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <p className="origin">Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={meal.strmeal} />
            <p className="instructions">{meal.strInstructions}</p>
          </li>
        ))}
    </ul>
  );
};

export default Card;
