function fetchProducts({
    valueTitle,
    valueType,
    valueByType,
    valueBrand,
    valueRating,
    priceFrom,
    priceTo,
    sort,
    valueSearch,
}){
    let paramURL = "";
    paramURL += (valueTitle ? (`&title=${valueTitle}`) : "");
    paramURL += (sort ? (`&_sort=price&_order=${sort}`) : "");
    paramURL += (valueSearch ? (`&name_like=${valueSearch}&_page=1`) : ""); 
    paramURL += (valueType ? (`&type=${valueType}`) : ""); 
    paramURL += (valueByType.length !== 0 ? (`&byType=${valueByType}`) : ""); 
    paramURL += (valueBrand.length !== 0 ? (`&brand=${valueBrand}`) : ""); 
    paramURL += (valueRating ? (`&ratings=${valueRating}`) : ""); 
    paramURL += (priceFrom ? (`&price_gte=${priceFrom}`) : ""); 
    paramURL += (priceTo ? (`&price_lte=${priceTo}`) : ""); 
    console.log(paramURL);
    let URL = `http://localhost:3333/products?${paramURL}`;

    return fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export default fetchProducts;