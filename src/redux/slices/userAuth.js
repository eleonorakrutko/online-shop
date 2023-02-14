import {createSlice} from "@reduxjs/toolkit"

export const userAuthSlice =  createSlice({
    name: 'userAuth',
    initialState: {
        isAuth: false
    },
    reducers: {
        login: (state) => {
            state.isAuth = true  //типо мутация, но под капотом возвращается все равно новый стейт(обьект)
        },
        logout: (state) => {
            state.isAuth = false
        }
    }
});

//если со стора прилетает новый обьект, то компоненты от него зависящие делают ререндер, в другом случае нет
// store -> components -> action -> reducer -> store

export const userAuthReducer =  userAuthSlice.reducer;
export const {login, logout} = userAuthSlice.actions;


export const reducer = (state, action) => {
    switch (action.type){
        case 'login':
            return {
                ...state, isAuth: true
            };
        case 'logout':
            return {
                ...state, isAuth: false
            }
        default:
            return state;
    }
}