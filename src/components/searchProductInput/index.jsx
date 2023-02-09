import React from "react";
import styles from './index.module.css'

export const SearchProductInput = () => {
    return <input className={styles.searchInput}  type='text' placeholder="Введите название товара..."/>
}