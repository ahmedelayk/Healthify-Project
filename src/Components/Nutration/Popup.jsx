import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/recipesSlice";

const Popup = ({ closePopup, handleSave }) => {
  console.log("popup rendered")
  const [selectedRecipie, setSelectedRecipie] = useState(null);

  const [breakfast, setBreakfast] = useState([])
  const dispatch = useDispatch();
  const {meals} = useSelector((state) => state.meals);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    console.log(meals)
    setBreakfast(meals?.filter((recipie) => recipie.type === "breakfast"));
  }, [meals]);

  const handleSelectColumn = (column) => {
    setSelectedRecipie(column);
  };
  
  // console.log(breakfast?.map((b) => b.poster));
  // const meals = [
  //   {
  //     id: 1,
  //     type: "breakfast",
  //     poster:
  //       "https://cdn.shopify.com/s/files/1/0583/4866/7049/articles/lxqg9cxof1cc9l9y5aec-934857.jpg?v=1641784706",
  //     food1: "Avocado",
  //     food2: "Whole Grain Bread",
  //     food3: "Lemon Juice",
  //   },
  //   {
  //     id: 2,
  //     type: "breakfast",
  //     poster:
  //       "https://mycasualpantry.com/wp-content/uploads/2022/07/Greek-Yogurt-with-Granola-and-Fruit-bowl-1200-%C3%97-1200-px.jpg",
  //     food1: "Greek Yogurt",
  //     food2: "Granola",
  //     food3: "Mixed Berries",
  //   },
  //   {
  //     id: 3,
  //     type: "breakfast",
  //     poster:
  //       "https://www.wellplated.com/wp-content/uploads/2018/03/Overnight-Steel-Cut-Oats-with-Chia-Seeds-500x375.jpg",
  //     food1: "Rolled Oats",
  //     food2: "Almond Milk",
  //     food3: "Mixed Berries",
  //   },
  //   {
  //     id: 4,
  //     type: "lunch",
  //     poster:
  //       "https://shewearsmanyhats.com/wp-content/uploads/2018/09/cucumber-tomato-quinoa-salad-recipe-6-480x360.jpg",
  //     food1: "Quinoa",
  //     food2: "Cucumber",
  //     food3: "Cherry Tomatoes",
  //   },
  //   {
  //     id: 5,
  //     type: "lunch",
  //     poster:
  //       "https://149777215.v2.pressablecdn.com/wp-content/uploads/2022/05/dsm-chicken-vegetable-and-hummus-wraps.jpg",
  //     food1: "Grilled Chicken Breast",
  //     food2: "Whole Wheat Tortilla",
  //     food3: "Hummus",
  //   },
  //   {
  //     id: 6,
  //     type: "lunch",
  //     poster:
  //       "https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-Thumbnail.jpg",
  //     food1: "Assorted Vegetables",
  //     food2: "Tofu",
  //     food3: "Soy Sauce",
  //   },
  //   {
  //     id: 7,
  //     type: "dinner",
  //     poster:
  //       "https://images-gmi-pmc.edge-generalmills.com/9c2e6530-e7b0-41ee-94f2-33300b7e1f5e.jpg",
  //     food1: "Salmon Fillet",
  //     food2: "Quinoa",
  //     food3: "Asparagus",
  //   },
  //   {
  //     id: 8,
  //     type: "dinner",
  //     poster:
  //       "https://yupitsvegan.com/wp-content/uploads/2017/11/coconut-chickpea-curry-vegan-square-12.jpg",
  //     food1: "Chickpeas",
  //     food2: "Coconut Milk",
  //     food3: "Curry Powder",
  //   },
  //   {
  //     id: 9,
  //     type: "dinner",
  //     poster:
  //       "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/01/roasted-vegetables-9.jpg",
  //     food1: "Assorted Vegetables",
  //     food2: "Olive Oil",
  //     food3: "Herbs and Spices",
  //   },
  // ].filter((item)=>item.type ==="breakfast");
  return (
    <div className="popup">
      <div className="popup_inner text-center">
        <h1 className="popup-header">Choose Your Favorite Recipe</h1>
        <AiFillCloseCircle onClick={closePopup} className="close-btn-popup" />
        <Row className="text-center">
          {
            breakfast?.map((rec) => (
              <Col
                key={rec.id}
                xs={3}
                className={
                  selectedRecipie === rec
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
                    <p className="bolder">+</p>
                    <h5>
                      <span>{rec.food2}</span>
                    </h5>
                    <p className="bolder">+</p>
                    <h5>
                      <span>{rec.food3}</span>
                    </h5>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
        <Button className="my-3" onClick={()=>{handleSave(selectedRecipie)}}>
          Add Recipe
        </Button>
      </div>
    </div>
  );
};

export default Popup;
