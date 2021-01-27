import { useState } from "react";
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../SignupFormPage/Signup.css'


function LoginFormModal() {
    const [showModal, setShowModal] = useState()

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClick={() => setShowModal(false)}>
                    {/* <Link to='/' className='login__cancel' onClick={() => setShowModal(false)}>Cancel</Link> */}
                    <LoginForm showModal={showModal} setShowModal={setShowModal} />
                </Modal>   
            )}
        </>
    )
}

export default LoginFormModal;