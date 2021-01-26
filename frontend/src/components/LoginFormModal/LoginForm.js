import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

function LoginForm({ setShowModal, showModal }){
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({credential, password})).catch(
            res => {
                if (res.data && res.data.errors) setErrors(res.data.errors)
            }
        )
    }

    return (
        <Container className='signup'>
            <h1 className='signup__header'>Log in, and play!</h1>
            <form className='signup__form' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li className='signup__error' key={idx}>{error}</li>
                        ))}
                </ul>
            <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                        placeholder='Email or Username'
                    />
            <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Password'
                        />
                <button className='signup__submit' type="submit">Log In</button>
                <Link to='/' className='signup__cancel' onClick={(showModal) => setShowModal(!showModal)} >Cancel</Link>
            </form>
        </Container>
    );
}

export default LoginForm;