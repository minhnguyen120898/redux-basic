import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCountProducts,getProducts } from '../../app-redux/slice/productSlice';
import Pagination from './pagination';
import Products from './products';
import TopResult from './topResult';    

function Main(props){
    const dispatch = useDispatch();
    const valueSearch = useSelector(state => state.search.valueSearch);
    const {
        valueTitle,
        valueType,
        valueByType,
        valueBrand,
        valueRate,
        priceFrom,
        priceTo
    } = useSelector(state => state.sideBar);

    const {
        sort,
        currentPage,
        productsPerPage,
        products,
        isLoading,
        error,
    } = useSelector(state => state.product)
    console.log(error, products);

    useEffect(() => {
        const action = getProducts({
            valueTitle,
            valueType,
            valueByType,
            valueBrand,
            valueRate,
            priceFrom,
            priceTo,
            sort,
            valueSearch,
        });

        dispatch(action);
    },[ valueTitle,valueType,valueByType,valueBrand,valueRate,priceFrom,priceTo,sort,valueSearch,dispatch]);
      
    useEffect(() => {
        const action = getCountProducts(products);
        dispatch(action)
    },[products,dispatch]);

    const indexOfLastProduct = currentPage*productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

    return (
        <div className="main">
            {
                (isLoading) ? (
                <h1>Loading....</h1>) : error ? (
                <h1>{error.message}</h1> 
                ) : (
                <div>
                        <TopResult result = {products.length} />
                        <Products products = {currentProducts}/>
                        <Pagination totalProducts = {products.length}/>              
                </div>
                )
            }
        </div>
    );
}


export default Main;