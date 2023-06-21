// Hooks
import { createContext, useContext, useState } from "react";

const NutritionContext = createContext();

const NutritionProvider = ({ children }) => {
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [result, setResult] = useState();
  const handleMale = () => {
    setGender("Male");
  };
  const handleFemale = () => {
    setGender("Female");
  };

  const changeHeight = (event) => {
    setHeight(event.target.value);
  };
  const changeWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleCalculate = (weight, height) => {
    let bmi = weight / (height / 100) ** 2;
    setResult(bmi);
    console.log(result);
  };

  const values = {
    changeHeight,
    changeWeight,
    handleFemale,
    handleCalculate,
    handleMale,
    gender,
    result,
    height,
    weight,
  };

  return (
    <NutritionContext.Provider value={values}>
      {children}
    </NutritionContext.Provider>
  );
};

export default NutritionProvider;

export const useNutrition = () => {
  return useContext(NutritionContext);
};
