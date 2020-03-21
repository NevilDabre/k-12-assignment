import React from "react";
import { CardHolder, CardElement, FrontSide, BackSide } from "./FlipCard.css";

const FlipCard = () => {
  return (
    <CardHolder>
      <CardElement>
        <FrontSide>Front</FrontSide>
        <BackSide>Back</BackSide>
      </CardElement>
    </CardHolder>
  );
};

export default FlipCard;
