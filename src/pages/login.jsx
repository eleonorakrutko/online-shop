import React, {useState} from "react";
import { loginWithGoogle, appSignOut, createUser, signIn } from "../firebase";

const defaultState = {
    email:'',
    password: ''
}

export const Login = () => {
    const [formData, setFormData] = useState(defaultState)

    const submitHandler = (e) => {
        e.preventDefault()
        
        
        //redux!
        const {email, password} = formData
        createUser(email, password)
    }
    const onInputChange = ({target: {name, value}}) => {
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }))
    }

    const signInHandler = () => {
        const {email, password} = formData
        signIn(email, password)
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="email" name='email' onChange={onInputChange}/>
                </div>
                <div>
                    <input type="password" name='password' onChange={onInputChange}/>
                </div>
                <button onClick={signInHandler}>Sign in</button>
                 <button type="submit" onClick={submitHandler}>Create account</button>
            </form>

            <button onClick={loginWithGoogle}>Login with google</button>
            <button onClick={appSignOut}>Sign out</button>
        </div>
    )
}