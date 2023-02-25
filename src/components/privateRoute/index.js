import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuth } from "../../redux/slices/userAuth";

export const PrivateRoute = ({children}) => {
    const isAuth = useSelector(selectAuth);

    if (!isAuth.isAuth) {
        return <Navigate to='/'/>
    }

    return (
       <Outlet/>
    )
};