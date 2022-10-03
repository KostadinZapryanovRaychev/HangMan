import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import useApplicationContext from '../context/ApplicationContext';

const CustomModal = (props) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const changeState = () => setPreserveGameState((prevState) => !prevState);
    const { modalContent, setPreserveGameState } = useApplicationContext();
    const reloadPage = window.location.reload(true)





    return (<>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalContent.mainContent}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Exit
                </Button>
                <Button variant="primary" onClick={reloadPage}>
                    New Game
                </Button>
            </Modal.Footer>
        </Modal>
    </>

    )
}

export default CustomModal