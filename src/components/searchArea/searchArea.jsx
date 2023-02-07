import React, { useState } from "react";
import styles from './searchArea.module.css'
import filterIcon from '../../assets/filter_icon.png'
import { SortList } from "./sortList/sortList";

export const SearchArea = () => {
    const [isShowSort, setIsShowSort] = useState(false)

    function chooseSortField() {
        setIsShowSort(false)
    }

    return (
        <div className={styles.searchWrapper}>
             <input className={styles.searchInput}  type='text' placeholder="Введите название товара..."/>
            <button className={styles.filterButton} onClick={() => setIsShowSort(!isShowSort)}>
                <img src={filterIcon}/>
            </button>
            {isShowSort && <SortList chooseSortField={chooseSortField}/>}
        </div>
    )
}