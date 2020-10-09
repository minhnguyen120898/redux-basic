import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByBrand } from "../../app-redux/slice/sidebarSlice";

function RefineByBrand(props) {
  const {
    types,
    valueIdTitle,
    valueIdType,
    valueBrand,
  } = useSelector(state => state.sideBar);
  const countProducts = useSelector(state => state.product.countProducts)
  const dispatch = useDispatch();

  const handleCheck = (brand) => {
    const actionBrandCheck = getByBrand(brand);
    dispatch(actionBrandCheck);
  };

  return (
    <div className="refine-by-brand">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.subs
              .filter((e) => e.id === valueIdType)
              .map((e) =>
                e.subs.map((e) => (
                  <li key={e.id}>
                    <input
                      type="checkbox"
                      id={e.id}
                      checked={valueBrand.includes(e.brand) ? true : false}
                      onChange={() => handleCheck(e.brand)}
                    />
                    <label htmlFor={e.id}>
                      {e.brand} (
                      {
                        countProducts.filter(
                          (product) => product.brand === e.brand
                        ).length
                      }
                      )
                    </label>
                  </li>
                ))
              )
          )}
      </ul>
    </div>
  );
}

export default RefineByBrand;