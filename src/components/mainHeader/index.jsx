import React from "react";
import { Outlet } from "react-router-dom";
import styles from './index.module.css'

export const MainMenu = () => {
    return (
        <>
             <nav>
                <button>User</button>
                <button>Contacts</button>
                <button>Shop</button>
                <button>Cart</button>
            </nav>
            <Outlet/> 
        </>
    )
}