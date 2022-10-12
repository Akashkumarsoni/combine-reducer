import React, { useState } from "react";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/Map";
const CakePage = (props) => {
  const [quan, setQuan] = useState(0);
  const buyhere = () => {
    if (quan > 0) {
      props.buy_cake_quantity(Number(quan));
    } else {
      alert("Please enter valid quantity");
    }
  };
  return (
    <div>
      Total Cakes : {props.CakeReducer.cake_quan}
      <div>
        <input
          placeholder="Enter quantity"
          value={quan}
          type="number"
          onChange={(e) => {
            setQuan(e.target.value);
          }}
        />
        <button onClick={buyhere}>Buy Cake</button>
      </div>
      {props.CakeReducer.cake_quan === 0 ? (
        <p style={{ color: "red", fontSize: "35px", fontWeight: "bold" }}>
          Stock Over!!
        </p>
      ) : (
        <p style={{ color: "green", fontSize: "35px", fontWeight: "bold" }}>
          In Stock!!
        </p>
      )}
      <p>Ordered Cake Quantity : {props.CakeReducer.cake_buy}</p>
      <hr />
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(CakePage);
