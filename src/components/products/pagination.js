import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from '../../app-redux/slice/productSlice';

function Pagination(props) {
    const {totalProducts} = props;
    const {productsPerPage,currentPage} = useSelector(state => state.product);
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    const pageNumber = [];
    const dispatch = useDispatch();

    for (let i = 0; i < totalPages; i++) {
        pageNumber.push(i+1);
    }

    const onPageChange = (value) => {
        const actionPageChange = getCurrentPage(value);
        dispatch(actionPageChange);
    }

    return (
        <ul className="pagination">
            <li>
                <button
                    disabled = {currentPage <=1}
                    onClick = {() => onPageChange(currentPage-1)}
                >Prev</button>
            </li>
            {pageNumber.map((item,i) => (
                <li key={i} 
                    className = {(currentPage === item) ? "active" : ""}
                    onClick = {() => onPageChange(item)} 
                >{item}</li>
            ))}
            <li>
                <button
                    disabled = {currentPage >= totalPages}
                    onClick = {() => onPageChange(currentPage+1)}
                >Next</button>
            </li>
        </ul>
    );
}

export default Pagination;