import React from 'react';

export default function Register(){

    return <div>
        <h3>Register Here!</h3>
        <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">
                SUBMIT
            </button>
        </form>
    </div>
}