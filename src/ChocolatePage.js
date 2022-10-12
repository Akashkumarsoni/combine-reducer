import React, { useState } from "react";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/Map";
const ChocolatePage = (props) => {
  const [quan, setQuan] = useState(0);
  const buyhere = () => {
    if (quan > 0) {
      props.buy_chocolate_quantity(Number(quan));
    } else {
      alert("Please enter valid quantity");
    }
  };
  return (
    <div>
      Total chocolate : {props.chocolateReducer.chocolate_quan}
      <div>
        <input
          placeholder="Enter quantity"
          value={quan}
          type="number"
          onChange={(e) => {
            setQuan(e.target.value);
          }}
        />
        <button onClick={buyhere}>Buy Chocolate</button>
      </div>
      {props.chocolateReducer.chocolate_quan === 0 ? (
        <p style={{ color: "red", fontSize: "35px", fontWeight: "bold" }}>
          Stock Over!!
        </p>
      ) : (
        <p style={{ color: "green", fontSize: "35px", fontWeight: "bold" }}>
          In Stock!!
        </p>
      )}
      <p>Ordered Chocolate Quantity : {props.chocolateReducer.chocolate_buy}</p>
      <hr />
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(ChocolatePage);
