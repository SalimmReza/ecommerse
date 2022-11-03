import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {

    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)


        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                form.reset();
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });


    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <h4>{error}</h4>
            <form onSubmit={handleLogin} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/register'>Create a New Account</Link></p>
        </div>
    );
};

export default Login; <h1>this is login</h1>