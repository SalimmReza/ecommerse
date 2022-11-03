import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Register.css'

const Register = () => {

    const [error , setError] = useState("")
    const {createUser} = useContext(AuthContext);
    

const handleSubmit = (e) =>{
    e.preventDefault();
    setError ('');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if(password !== confirm){
        setError ('Password didnot match');
        return;
    }

    console.log(email , password , confirm)


    createUser(email , password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        form.reset();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
    
}

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <h4 className='error'>{error}</h4>
        <form onSubmit={handleSubmit} >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p>Already Have an Account <Link to='/login'>Login</Link></p>
        <p className='text-error'></p>
    </div>
    );
};

export default Register;<h1>This is register</h1>