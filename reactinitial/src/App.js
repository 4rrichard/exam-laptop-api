import React, { useEffect, useState } from "react";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";
import Button from "@mui/material/Button";

const App = () => {
  const [laptops, setLaptops] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const laptops = async () => {
      const response = await fetch(`https://demoapi.com/api/laptop`);
      const data = await response.json();
      setLaptops(data);
    };
    laptops();
  }, []);
  return (
    <>
      <h1>Laptops</h1>
      <header>
        <Button variant="contained">Sort</Button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </header>
      <div>
        {laptops ? (
          laptops.map((laptop) => (
            <Laptop
              key={laptop.brand}
              brand={laptop.brand}
              name={laptop.name}
              weight={laptop.weight}
            />
          ))
        ) : (
          <LoadingMask />
        )}
      </div>
    </>
  );
};

export default App;
