import { useState } from "react";
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'


function LoginFormModal() {
    const [showModal, setShowModal] = useState()

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClick={() => setShowModal(false)}>
                    <div className='login__exit'>
                        <form action='./' method='get'>
                            <button className='login__exit'> x </button>
                        </form>
                    </div>
                    <LoginForm />
                </Modal>   
            )}
        </>
    )
}

export default LoginFormModal;