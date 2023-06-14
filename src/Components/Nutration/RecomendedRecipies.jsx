import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import "./nutration.css";
import RR1 from "../assets/images/RR1.jpg";
import RR2 from "../assets/images/RR2.jpg";
import RR3 from "../assets/images/RR3.jpg";
import RR4 from "../assets/images/RR4.jpg";

export const RecomendedRecipies = () => {
  return (
    <Fragment>
      <h4 className="font-family1 text-paragraph-color bolder my-5">
        Recomended Recipies
      </h4>
      <Row className="align-content-center">
        <Col xs={12} md={6} lg={3}>
          <div class="card mb-3">
            <img src={RR1} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Avocado and Tuna Salad Wrap</h5>
              <p class="card-text">
                Avocado subs in for creamy mayo in this lightened-up take on a
                tuna salad sandwich. Throw some extra mixed greens into the
                equation and everyone will be happy.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Get the Avocado and Tuna Salad Wrap recipe.
                </small>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div class="card mb-3">
            <img src={RR2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Grilled Sweet Potatoes with Lemon-Herb Sauce
              </h5>
              <p class="card-text">
                Charring sweet potatoes on the grill turns one of our favorite
                starches into something extraordinary. A piquant relish and
                creamy yogurt base turn it into a meal.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Get the Grilled Sweet Potatoes with Lemon-Herb Sauce recipe.
                </small>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div class="card mb-3">
            <img src={RR3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Greek Salad</h5>
              <p class="card-text">
                With such a short ingredient list, this Mediterranean classic
                shines especially bright with quality produce. That doesn’t mean
                you have to wait around for summer, though: just make sure you
                use the ripest, juiciest tomatoes and crispest cucumbers you can
                find.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Get the Greek Salad recipe.
                </small>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div class="card mb-3">
            <img src={RR4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Roasted Butternut Squash Salad with Tahini Vinaigrette
              </h5>
              <p class="card-text">
                Hearty roasted squash and tangy tahini dressing make this simple
                salad into something crave-worthy. Plus, the contrasting bright
                colors make it a feast for the eyes as well.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Get the Roasted Butternut Squash Salad with Tahini Vinaigrette
                  recipe.
                </small>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
