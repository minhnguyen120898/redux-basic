import React from 'react';
import { useSelector } from 'react-redux';
import Product from './product';

function Products(props) {
    const {products} = props;
    return (
        <div className="products">
            {products.map((item,i) => (
                <Product key={i} product={item}/>
        ))}
        </div>
    );
}

export default Products;