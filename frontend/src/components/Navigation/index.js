import { NavLink } from 'react-router-dom'
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logoPhoto from '../images/d20-logo.png';
import { ShoppingCart } from '../ShoppingCart';

export function Navigation({isLoaded}){
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if(sessionUser) {
        sessionLinks = (
            <div>
                <div>
                    <ProfileButton user={sessionUser} />
                </div>
                <div>
                    <ShoppingCart />
                </div>
                <div>
                    <NavLink to='/add-product'>Add product</NavLink>
                </div>
            </div>
        );
    }
    else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink className='nav__signup' to='/signup'>Sign Up</NavLink>
            </>
        )
    }
    return (
        <nav>
            <ul className='nav'>
                <li>
                     <NavLink to='/' exact>
                        <div className='nav__logo'>
                            <img className='nav__logo--photo ' alt='logo' src={logoPhoto} />
                            <h2 className='nav__logo--title'>Detsy
                                <p className='nav__logo--snip'>Where the good times roll.</p>
                            </h2>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <div>
                        {isLoaded && sessionLinks}
                        {/* <ShoppingCart /> */}
                    </div>

                </li>
            </ul>
        </nav>

    )

}