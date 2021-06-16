import React from 'react'

export default function Login(){

    return<div>
        <h3>Login Here!</h3>
        <form>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />

            <button type="submit">LOGIN</button>
        </form>
    </div>
}