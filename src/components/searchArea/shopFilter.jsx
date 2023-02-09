import React, { useState } from "react";
import styles from './shopFilter.module.css'
import filterIcon from '../../assets/filter_icon.png'
import { SortList } from "./sortList/sortList";
import { SearchProductInput } from "../searchProductInput";

export const ShopFilter = () => {
    const [isShowSort, setIsShowSort] = useState(false)

    function chooseSortField() {
        setIsShowSort(false)
    }

    return (
        <>
         <button className={styles.filterButton} onClick={() => setIsShowSort(!isShowSort)}>
                <img src={filterIcon}/>
            </button>
            {isShowSort && <SortList chooseSortField={chooseSortField}/>}
        </>
            
           
    )
}