// Built-in imports
import React, { useState } from 'react';

// External imports
import {
    faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import {
    Backdrop,
    Box,
    Modal,
    Fade,
} from '@mui/material';
import { useSelector } from 'react-redux';

// Internal imports
import { CloseModal } from '../Buttons/index';
import './placeorder.css';

const ItemImagePreview = () => {
    return (
        <div className="modal_widget_preview">
            <div className="item__image"></div>
            <div className="preview_seperator"></div>
        </div>
    );
}
const ModalItemContent = (props) => {
    return (
        <div className="widget_modal_content">
            <div className="widget_modal_header py-3">
                <div className="col display_flex align_items_center">
                    <h2>Place Order</h2>
                </div>
                <div className="col-auto">
                    <CloseModal onClick={props.onClick} />
                </div>
            </div>
            <div className="widget_modal_body"></div>
            <div className="widget_modal_actions"></div>
        </div>
    );
};
const PlaceOrder = () => {
    // State variables
    const [open, setOpen] = useState(false);
    const { user } = useSelector(state => state.auth);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Custom Modal styling
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        user ?
            <div className="place_order">
            <div className="place_order_button" role="button"
                title="place_order_button" onClick={handleOpen}>
                <div className="big_button">
                    <FontAwesomeIcon icon={faSquarePlus} />
                </div>
                <div className="big_button_text">Place Order</div>
            </div>
            <Modal
                className="modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                container={() => document.body.getElementsByClassName('place_order')[0]}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className="widget_modal"
                        sx={style}>
                        <ItemImagePreview />
                        <ModalItemContent onClick={handleClose} />
                    </Box>
                </Fade>
            </Modal>
        </div> : null
    )
}

export default PlaceOrder;