import React from "react";
import { ProductItem } from "./productItem/productItem";
import styles from './productList.module.css'



export const ProductList = ({products}) => {
    return(
        <div className={styles.productList}>
            {products.map(product => <ProductItem key={product.id} {...product}/>)}
        </div>
    )
}