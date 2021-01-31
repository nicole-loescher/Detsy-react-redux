import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../SignupFormPage/Signup.css';
import Container from 'react-bootstrap/Container'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    return (
        <Container className='signup'>
            <h1 className='signup__header'>Log in, and play!</h1>
                <form className='signup__form'onSubmit={handleSubmit}>
                    <ul>
                            {errors.map((error, idx) => <li className='signup__error' key={idx}>{error}</li>)}
                    </ul>
                <label>Username or Email </label>
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='signup__submit' type="submit">Log In</button>
            </form>
                <button className='signup__submit'>Cancel</button>
            <p>Don't have an account
                <Link className='signup__submit' to='/signup'>Sign up here</Link>
            </p>
        </Container>
    );
}

export default LoginFormPage;