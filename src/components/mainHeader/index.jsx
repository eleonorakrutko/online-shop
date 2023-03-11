import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { login, logout, selectIsAuth, selectUserName } from "../../redux/slices/userAuth";
import { AddToCartButton } from "../addToCartButton";
import styles from './index.module.css'
import { NavLink, useNavigate } from "react-router-dom";



export const MainMenu = () => {
    const navigate = useNavigate()
    const navigateToCart = () => navigate('/cart')

    const activeClassName = ({isActive}) => isActive ? styles.activeRoute : styles.route

    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth);
    const userName = useSelector(selectUserName);

    function changeUserAuth () {
        if(isAuth){
            dispatch(logout())
        } else {
            dispatch(login())
        }
    }

    return (
        <>
             <nav className={styles.wrapper}>
                <p className={styles.userName}>{isAuth ? userName : 'please log in'}</p>
                <NavLink to='/login' className={activeClassName} onClick={changeUserAuth}>Login</NavLink>
                {/* <button className={styles.route} onClick={changeUserAuth}>{isAuth ? 'Logout' : 'Login'}</button> */}
                <NavLink to='/contacts' className={activeClassName}>Contacts</NavLink>
                <NavLink to='/' className={activeClassName}>Shop</NavLink>
                <AddToCartButton handleClick={navigateToCart} size="s"/>
            </nav>
            <Outlet/> 
        </>
    )
}