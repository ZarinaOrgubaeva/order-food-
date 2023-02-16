import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
import { fetchApi } from "../../lib/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { getMeals, mealsActionsTypes } from "../../store/meals/mealsReducer";
export const Meals = () => {
  const dispatch = useDispatch();
  const { meals, isLoading, error } = useSelector((state) => state.meals);
  useEffect(() => {
   dispatch({type: mealsActionsTypes.GET_MEALS_STARTED})
   dispatch(getMeals())
  }, [dispatch]);
  return (
    <Card>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meals.map((meal) => {
        return (
          <MealItem
            key={meal._id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
            id={meal._id}
          />
        );
      })}
    </Card>
  );
};
memo(Meals);
const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  margin: 40px auto;
  padding: 40px 36px 40px 40px;
`;
