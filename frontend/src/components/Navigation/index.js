import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import Container from 'react-bootstrap/Container';
import './Navigation.css';
import logoPhoto from '../images/d20-logo.png';

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
            <nav>
                <li>
                    <NavLink to='/' exact>
                    <div className='nav__logo'>
                        <img className='nav__logo--photo ' src={logoPhoto} />
                        <h2 className='nav__logo--title'>Many-Minis</h2>
                    </div>
                    </NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </nav>

    )

}