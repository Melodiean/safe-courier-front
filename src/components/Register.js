import React from 'react';
import { Link } from 'react-router-dom';

export default function Register(){

    return <div className="boxed">
        <h1>Register Here!</h1>
        <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">
                SUBMIT
            </button>
            <Link to="/login">Already a member? Login Here!</Link>
        </form>
    </div>
}