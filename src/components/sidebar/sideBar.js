import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClearAllFilter, getTypes } from "../../app-redux/slice/sidebarSlice";
import RefineByBrand from "./refineByBrand";
import RefineByPrices from "./refineByPrice";
import RefineByRatings from "./refineByRating";
import RefineByType from "./refineByType";
import ShowResultFor from "./showResult";

function Sidebar(props) {
  const {
    valueBrand,
    valueRating,
    valueTitle,
    valueType,
    valueByType,
    priceFrom,
    priceTo,
    types,
  } = useSelector(state => state.sideBar);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getTypes();
    dispatch(action);
  }, [dispatch]);

  const onClearFilter = () => {
    const action = getClearAllFilter();
    dispatch(action);
  }
  
  return (
    <div className="menu">
      <div className="menu__clear">
        {valueBrand.length > 0 ||
        priceFrom ||
        priceTo ||
        valueByType.length > 0 ||
        valueRating ||
        valueTitle ||
        valueType ? (
          <button onClick={() => onClearFilter()}>
            Clear all filter
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowResultFor types={types} />
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <RefineByType />
        <p className="menu__title-2">Brand</p>
        <RefineByBrand />
        <p className="menu__title-2">Ratings</p>
        <RefineByRatings />
        <p className="menu__title-2">Prices</p>
        <RefineByPrices />
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Sidebar;