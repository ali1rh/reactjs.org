import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "ford",
    model: "pride",
    year: "1964",
    color: "red",
  });
  //   const [brand, setBrand] = useState("Ford");
  //   const [model, setModel] = useState("Mustang");
  //   const [year, setYear] = useState("1964");
  //   const [color, setColor] = useState("red");

  const updateCar = () => {
    
    // shorthand
    // setCar({...car, color: "green"});

    setCar(car =>{
      console.log(car)
      return{...car, color: "green"}
    })
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateCar}>میشه کلیک کنی لاشی</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
