import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam rem quibusdam aspernatur vitae
                placeat ipsam quisquam laudantium tempore, accusamus magnam deserunt. Maiores et harum consectetur,
                dolorum labore vero?
            </p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage;
