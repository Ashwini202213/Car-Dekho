import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import '../../pages/carServices.css';

function CustomModal({ modalBtnName, data, modalTitle, component, className }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={className} onClick={handleShow}>
                {modalBtnName}{component}
            </Button>

            {/* <Button className='modal-btn btn' name={modalBtnName} onClick={handleShow} arrow={arrow} /> */}

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        data.map((item, i) => (
                            <div key={i}>
                                <h6 className='fontColor'>{item.head}</h6>
                                <p>{item.content}</p>
                            </div>

                        ))
                    }
                </Modal.Body>

            </Modal >
        </>
    );
}

export default CustomModal;