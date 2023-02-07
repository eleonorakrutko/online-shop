import React from "react";
import { MyInput } from "../../UI/input/MyInput";
import styles from './searchArea.module.css'

export const SearchArea = () => {
    return (
        <div className={styles.search}>
            <MyInput/>
            <button className={styles.sortBtn}>Сортировать</button>
        </div>
    )
}