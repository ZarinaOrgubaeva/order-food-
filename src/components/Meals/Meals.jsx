import { useEffect, useState } from "react";
import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
import { fetchApi } from "../../lib/fetchApi";
// const Dummy_Meals = [
//   {
//     id: "meal",
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "meal2",
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.0,
//   },
//   {
//     id: "meal3",
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "meal4",
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99,
//   },
// ]

export const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [isLoading,setLoading]=useState(true)
  const getMeals = async () => {
    try {
      setLoading(true)
      const resopse = await fetchApi("foods");
      console.log(resopse);
      setMeals(resopse.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError("Failed to load meals");
    }
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <Card>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meals.map((meal) => {
        return (
          <MealItem
          key={meal.id}
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
const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  margin: 40px auto;
  padding: 40px 36px 40px 40px;
`;
