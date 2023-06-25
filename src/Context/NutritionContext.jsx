import { createContext, useContext, useState, useEffect } from "react";
// Images
import body1 from "../Components/assets/images/body1.webp";
import body2 from "../Components/assets/images/body2.webp";
import body3 from "../Components/assets/images/body3.webp";
import body4 from "../Components/assets/images/body4.webp";
import body5 from "../Components/assets/images/body5_.webp";
import m_body1 from "../Components/assets/images/m-body1.webp";
import m_body2 from "../Components/assets/images/m-body2.webp";
import m_body3 from "../Components/assets/images/m-body3.webp";
import m_body4 from "../Components/assets/images/m-body4.webp";
import m_body5 from "../Components/assets/images/m-body5.webp";

const NutritionContext = createContext();

const NutritionProvider = ({ children }) => {
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [result, setResult] = useState();
  const [loadingResult, setLoadingResult] = useState(false);
  const [bodyFemSrc, setBodyFemSrc] = useState();
  const [bodyMaleSrc, setBodyMaleSrc] = useState();
  const [bmiMessage, setBmiMessage] = useState("Clac Bmi Now");

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
  useEffect(() => {
    if (result <= 18) {
      setBodyFemSrc(body1);
      setBodyMaleSrc(m_body1);
      setBmiMessage(" your body is Underweight");
    } else if (result > 18 && result <= 25) {
      setBodyFemSrc(body2);
      setBodyMaleSrc(m_body2);

      setBmiMessage(" your body is Normal");
    } else if (result > 25 && result <= 30) {
      setBodyFemSrc(body3);
      setBodyMaleSrc(m_body3);

      setBmiMessage(" your body is Overweight");
    } else if (result > 30 && result <= 35) {
      setBodyFemSrc(body4);
      setBodyMaleSrc(m_body4);

      setBmiMessage(" your body is OBESE");
    } else if (result > 35) {
      setBodyFemSrc(body5);
      setBodyMaleSrc(m_body5);
      setBmiMessage(" your body is extra OBESE");
    }
  }, [result]);
  const handleCalculate = (weight, height) => {
    setLoadingResult(true);
    setTimeout(() => {
      setResult(Math.floor(weight / (height / 100) ** 2));
      setLoadingResult(false);
    }, 2000);
  };

  const values = {
    changeHeight,
    changeWeight,
    handleFemale,
    handleCalculate,
    handleMale,
    loadingResult,
    gender,
    result,
    height,
    weight,
    bodyFemSrc,
    bodyMaleSrc,
    bmiMessage,
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
