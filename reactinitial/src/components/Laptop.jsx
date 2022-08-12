import React, { useState } from "react";
import Button from "@mui/material/Button";

function Laptop({ brand, name, weight }) {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Show more");

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
    textChange();
  };

  const textChange = () => {
    if (buttonText === "Show more") {
      setButtonText("Show less");
    } else {
      setButtonText("Show more");
    }
  };

  return (
    <>
      <h2>Laptop Name: {name}</h2>
      {isVisible && (
        <>
          <p>Brand: {brand}</p>
          <p>Weight: {weight}</p>
        </>
      )}

      <Button onClick={visibilityHandler} variant="contained">
        {buttonText}
      </Button>
    </>
  );
}

export default Laptop;
