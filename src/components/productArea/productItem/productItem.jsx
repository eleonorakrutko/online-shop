import React from "react";
import styles from './productItem.module.css'
import cartIcon from '../../../assets/cart_icon.png';


export const ProductItem = ({id, name, category, description, img, price}) => {
    return(
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.category }>{category} </p>
            <p  className={styles.description}>{description}</p>
            <img  className={styles.productImage} src={img}/>
            <div className={styles.priceWrapper}>
                <p className={styles.price}>{price}</p>
                <button className={styles.addToCartButton}>
                    <img src={cartIcon} alt='cart' />
                </button>
            </div>
        </div>
        
    )
}