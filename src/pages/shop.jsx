import React, { useEffect, useMemo, useState } from "react";
import { Preloader } from "../components/preloader";
import { ProductList } from "../components/productArea/productList";
import { SearchArea } from "../components/searchArea/searchArea";
import { fetchProducts } from "../utilts/fetchProducts";


export const Shop = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetchProducts(1000)
        .then(({products: goods}) => {
            setProducts(goods);
        })
    }, []);
    
    return(
        <div>
            <SearchArea/>
            {products ?
                <ProductList products={products}/>
                : <Preloader/>
            }
        </div>
    )
}