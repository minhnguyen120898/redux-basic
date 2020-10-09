import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByType } from "../../app-redux/slice/sidebarSlice";

function RefineByType(props) {
  const dispatch = useDispatch();
  const {
    types,
    valueIdTitle,
    valueByType,} = useSelector(state => state.sideBar);
  const countProducts = useSelector(state => state.product.countProducts)

  const onChange = (type) => {
      console.log(type);
      const actionTypeChange = getByType(type);

      dispatch(actionTypeChange);
  }

  return (
    <div className="refine-by-type">
      <ul>
        
        {types.filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.subs.map((e) => (
              <li key={e.id}>
                <input
                  type="checkbox"
                  id={e.id}
                  checked={valueByType.includes(e.type) ? true : false}
                  onChange={() => onChange(e.type)}
                />
                <label htmlFor={e.id}>
                  {e.type} (
                  {
                    countProducts.filter((product) => product.type === e.type)
                      .length
                  }
                  )
                </label>
              </li>
            ))
          )}
      </ul>
    </div>
  );
}

export default RefineByType;