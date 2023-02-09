import React, { useEffect, useState } from "react";
import { Preloader } from "../components/preloader";
import { ProductList } from "../components/productArea/productList";
import { ShopMainFilter } from "../components/shopMainFilter";
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
            <ShopMainFilter/>
            {products ?
                <ProductList products={products}/>
                : <Preloader/>
            }
        </div>
    )
}