import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/recipesSlice";
import { useNutrition } from "../../Context/NutritionContext";

const Popup = ({ closePopup, handleSave, recipe_type }) => {
  // console.log("popup rendered");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  const { br, ln, dn } = useNutrition();
  useEffect(() => {
    // console.log(meals);
    if (br === true) {
      setBreakfast(meals?.filter((recipie) => recipie.type === "breakfast"));
    } else if (ln === true) {
      setBreakfast(meals?.filter((recipie) => recipie.type === "lunch"));
    } else if (dn === true) {
      setBreakfast(meals?.filter((recipie) => recipie.type === "dinner"));
    }
  }, [br, dn, ln, meals]);

  const handleSelectColumn = (column) => {
    setSelectedRecipe(column);
  };
  return (
    <div className="popup">
      <div className="popup_inner text-center">
        <h1 className="popup-header">Choose Your Favorite Recipe</h1>
        <AiFillCloseCircle onClick={closePopup} className="close-btn-popup" />
        <Row className="text-center d-flex justify-content-center">
          {breakfast?.map((rec) => (
            <Col
              key={rec.id}
              xs={3}
              className={
                selectedRecipe === rec
                  ? "ms-sm-4 border border-primary"
                  : "ms-sm-4"
              }
              onClick={() => handleSelectColumn(rec)}
            >
              <div className="cursor-pointer r-cont">
                <img src={rec.poster} alt="" width={"100%"} height={90} />
                <div className="mt-3 ">
                  <h5>
                    <span>{rec.food1}</span>
                  </h5>
                  <h5>
                    <span>{rec.food2}</span>
                  </h5>
                  <h5>
                    <span>{rec.food3}</span>
                  </h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Button
          className="my-3"
          onClick={() => {
            handleSave(selectedRecipe);
          }}
        >
          Add Recipe
        </Button>
      </div>
    </div>
  );
};

export default Popup;
