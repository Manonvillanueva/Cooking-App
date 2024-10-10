import React from "react";

const Card = ({ data }) => {
  return (
    <ul>
      {data
        .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
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
