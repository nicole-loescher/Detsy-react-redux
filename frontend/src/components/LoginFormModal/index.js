import { useState } from "react";
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


function LoginFormModal() {
    const [showModal, setShowModal] = useState()

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClick={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>   
            )}
        </>
    )
}

export default LoginFormModal;