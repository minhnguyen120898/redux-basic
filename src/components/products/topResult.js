import React from 'react';
import { useDispatch } from 'react-redux';
import { getSort } from '../../app-redux/slice/productSlice';

function TopResult(props) {
    const { result } = props; 
    const dispatch = useDispatch();
    const handleSort = (value) => {
        const action = getSort(value);
        dispatch(action);
    }
    return (
        <div className="top-result">
                <div className="top-result__left">
                    {result} results
                    <span className="top-result__time"> found in 4ms</span>
                </div>
                <div className="top-result__right">
                    <label>Sort by</label>
                    <select onChange={(value) => handleSort(value.target.value)}>
                        <option value="">Featured</option>
                        <option value="asc">Price asc.</option>
                        <option value="desc">Price desc.</option>
                    </select>
                </div>
        </div>
    );
}

export default TopResult;