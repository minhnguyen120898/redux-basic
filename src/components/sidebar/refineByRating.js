import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByRatings } from "../../app-redux/slice/sidebarSlice";

function RefineByRatings(props) {

  const { valueRating } = useSelector(state => state.sideBar);
  const ratings = [4, 3, 2, 1];

  const productRaitngs = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span className="fa fa-star" key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<span className="fa fa-star-o" key={5 - i} />);
    }
    return stars;
  };
  const dispatch = useDispatch();
  const onHandlerClick = (rating) => {
      const actionRating = getByRatings(rating);
      dispatch(actionRating);
  };

  return (
    <div className="refine-by-ratings">
      <ul>
        {ratings.map((e, i) => (
          <li
            key={i}
            onClick={() => onHandlerClick(e)}
            className={valueRating === e ? "active" : ""}
          >
            {productRaitngs(e)}& Up 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RefineByRatings;