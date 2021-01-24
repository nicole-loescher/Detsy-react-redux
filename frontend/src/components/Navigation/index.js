import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';

export function Navigation({isLoaded}){
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if(sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    }
    else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to='/signup'>Sign Up</NavLink>
            </>
        )
    }
    return (
        <ul>
            <li>
                <NavLink to='/' exact>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    )

}