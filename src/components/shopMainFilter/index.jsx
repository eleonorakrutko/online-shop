import React from "react";
import { SearchProductInput } from "../searchProductInput";
import { ShopFilter } from "../searchArea/shopFilter";
import styles from './index.module.css'

export const ShopMainFilter = () => {
    return (
        <div className={styles.searchWrapper}>
            <SearchProductInput/>
            <ShopFilter/>
        </div>
    )
}