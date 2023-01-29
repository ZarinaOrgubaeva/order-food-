import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
const Dummy_Meals = [
  {
    id: "meal",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "meal2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.00,
  },
  { 
    id: "meal3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "meal4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
  
];

export const Meals = () => {
  return <Card>
    {Dummy_Meals.map((meal)=>{
        return <MealItem key={meal.id} title={meal.title}
        description={meal.description}
        price={meal.price}
        id={meal.id}/>
    })}
  </Card>;
};
const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  margin: 40px auto;
  padding: 40px 36px 40px 40px;
`;
