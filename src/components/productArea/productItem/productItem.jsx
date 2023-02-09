import React from "react";
import { AddToCartButton } from "../../addToCartButton";
import styles from './productItem.module.css'


export const ProductItem = ({id, name, category, description, img, price}) => {
    return(
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.category }>{category} </p>
            <p  className={styles.description}>{description}</p>
            <img  className={styles.productImage} src={img}/>
            <div className={styles.priceWrapper}>
                <p className={styles.price}>{price}</p>
                <AddToCartButton/>
            </div>
        </div>
        
    )
}