import {createSelector, createSlice} from "@reduxjs/toolkit"

const startState = {
    userName: 'USER NAME',
    isAuth: false
}

export const userAuthSlice =  createSlice({
    name: 'userAuth',
    initialState: startState,
    reducers: {
        login: (state) => {
            state.userName = 'LEO'
            state.isAuth = true 
        },
        logout: (state) => {
            state.userName = ''
            state.isAuth = false
        }
    }
});


export const userAuthReducer =  userAuthSlice.reducer;
export const {login, logout} = userAuthSlice.actions;

export const selectAuth = ({userAuth}) => userAuth;

export const selectUserName = createSelector(
    selectAuth,
    ({userName}) => userName
)

export const selectIsAuth = createSelector(
    selectAuth,
    ({isAuth}) => isAuth
)



// export const reducer = (state, action) => {
//     switch (action.type){
//         case 'login':
//             return {
//                 ...state, isAuth: true
//             };
//         case 'logout':
//             return {
//                 ...state, isAuth: false
//             }
//         default:
//             return state;
//     }
// }

//типо мутация, но под капотом возвращается все равно новый стейт(обьект)
//если со стора прилетает новый обьект, то компоненты от него зависящие делают ререндер, в другом случае нет
// store -> components -> action -> reducer -> store