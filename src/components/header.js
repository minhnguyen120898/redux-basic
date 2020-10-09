import React,{ useRef } from "react";

import { useDispatch } from "react-redux";
import { getSearch } from "../app-redux/slice/searchSlice";

function Header(props) {
  const dispatch = useDispatch();
  const typingTimeOutRef = useRef();
  
  const onChange = (value) => {

    const action = getSearch(value);
    
    if(typingTimeOutRef.current){
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      console.log(action);
      dispatch(action);
    },300); 
    
  };

  return (
    <header className="header">
      <a href="./">
        <img
          src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
          className="header__img"
          alt="img-header-top"
        />
      </a>
      <a href="./" className="header__logo">
        amazing
      </a>
      <div className="header__input-group">
        <div className="header__input-group__search" >
            <input
            placeholder="Search a product"
            onChange={(value) => onChange(value.target.value)}
            />
        </div>
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;