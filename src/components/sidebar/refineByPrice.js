import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByPriceFrom, getByPriceTo } from "../../app-redux/slice/sidebarSlice";

function RefineByPrices(props) {
  const { priceFrom, priceTo } = useSelector(state => state.sideBar);
  const dispatch = useDispatch();

  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");

  const itemPrices = [];
  const prices = ["", 1, 80, 160, 240, 1820, 3400, 4980, ""];

  for (var i = 0; i < prices.length - 1; i++) {
    let item = {
      id: i + 1,
      start: prices[i],
      end: prices[i + 1],
    };
    itemPrices.push(item);
  }
  console.log(priceTo);
  const onHandlerClick = (start, end) => {
    console.log(start);
    console.log(end);
    
      const actionFrom = getByPriceFrom(start);
      const actionTo = getByPriceTo(end);
      
      dispatch(actionFrom);
      dispatch(actionTo);
  };

  return (
    <div className="refine-by-prices">
      <ul>
        {itemPrices.map((e, i) => {
          if (e.start === "") {
            return (
              <li
                key={e.id}
                onClick={() => onHandlerClick(e.start, e.end)}
                className = {(priceTo === e.end ) ? "active" : ""}
              >
                ≤{e.end}
              </li>
            );
          } else if (e.end === "") {
            return (
              <li
                key={e.id}
                onClick={() => onHandlerClick(e.start, e.end, e.id)}
                className={priceFrom === e.start ? "active" : ""}
              >
                ≥{e.start}
              </li>
            );
          } else {
            return (
              <li
                key={e.id}
                onClick={() => onHandlerClick(e.start, e.end, e.id)}
                className={priceTo === e.end ? "active" : ""}
              >
                ${e.start} - {e.end}
              </li>
            );
          }
        })}
      </ul>
      <form
        onSubmit={(e) => {
          onHandlerClick(startInput, endInput);
          e.preventDefault();
        }}
      >
        <label>
          <span>$</span>
          <input
            type="number"
            value={startInput}
            onChange={(value) => setStartInput(value.target.value)}
          />
        </label>
        <span></span>
        <label>
          <span>to $</span>
          <input
            type="number"
            value={endInput}
            onChange={(value) => setEndInput(value.target.value)}
          />
        </label>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default RefineByPrices;