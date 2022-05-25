// Built-in imports
import { useEffect, useState } from 'react';

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
    RadioGroup,
} from '@mui/material';
import { useSelector } from 'react-redux';

// Internal imports
import {
    CloseModal,
    WantToSell,
    WantToBuy,
    OrderLadderButton,
    OrderNonLadderButton,
} from '../../Buttons/index';
import { DataProvider } from '../../Providers/DataProvider.jsx';
import ItemSeeker from './ItemSeeker/ItemSeeker.jsx';
import { useSearchData } from '../../../app/hooks/index';
import d2ItemData from './ItemSeeker/d2items';
import {
    D2ItemSuggestions,
} from '../../../app/structures/index';
import './placeorder.css';

const ItemImagePreview = () => {
    const { data } = useSearchData();
    const match = d2ItemData(data);

    const ItemName = () => {
        return (
            <div className="item__name">
                {match?.found && <h1>{match?.item.name}</h1>}
            </div>
        );
    };
    const ItemImage = () => {
        return (
            <div className="item__image">
                {match?.found &&
                    <img src={match?.item.image} alt={match?.item.name} />}
            </div>
        );
    };

    return (
        <div className="modal_widget_preview">
            <ItemImage />
            <ItemName />
            <div className="preview_seperator"></div>
        </div>
    );
}
const ModalItemContent = (props) => {
    const Header = () => {
        return (
            <div className="widget_modal_header py-3">
                <div className="col display_flex align_items_center">
                    <h2>Place Order</h2>
                </div>
                <div className="col-auto">
                    <CloseModal onClick={props.onClick} />
                </div>
            </div>
        );
    };
    const Body = () => {
        return (
            <div className="widget_modal_body">
                <div className="pt-3 col-12">
                    <div className="row compact widget_order_buttons">
                        <div className="widget_order_orderItemName col-12 col-sm-6">
                            <div className="form_group">
                                <label htmlFor="orderItemName">Order Type</label>
                                <div className="button__group flat">
                                    <RadioGroup
                                        row
                                        aria-labelledby='orderType_RadioGroup'
                                        defaultValue="wts">
                                        <WantToSell />
                                        <WantToBuy />
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className="widget_order_season col-12 col-sm-6">
                            <div className="form_group">
                                <label htmlFor="orderSeason">
                                    Ladder / Non&#45;ladder
                                </label>
                                <div className="button__group flat">
                                    <RadioGroup
                                        row
                                        aria-labelledby='orderSeason_RadioGroup'
                                        defaultValue="ladder">
                                        <OrderLadderButton />
                                        <OrderNonLadderButton />
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form_group">
                        <label htmlFor="orderItemName">Item Name</label>
                        <ItemSeeker data={D2ItemSuggestions} />
                    </div>
                </div>
                <div className="col-12"></div>
            </div>
        );
    };

    return (
        <div className="widget_modal_content">
            <Header />
            <Body />
            <div className="widget_modal_actions"></div>
        </div>
    );
};
const PlaceOrder = () => {
    // Custom Modal styling
    const ModelStyle = {
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

    // State variables
    const [open, setOpen] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const { user } = useSelector(state => state.auth);
    const { linkedAccounts } = useSelector(state => state.oauth);

    // Event handlers
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const HEADER = () => {
        return (
            <div className="place_order_button" role="button"
                title="place_order_button" onClick={handleOpen}>
                <div className="big_button">
                    <FontAwesomeIcon icon={faSquarePlus} />
                </div>
                <div className="big_button_text">Place Order</div>
            </div>
        );
    };
    const BODY = () => {
        return (
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
                }}>
                <Fade in={open}>
                    <Box className="widget_modal"
                        sx={ModelStyle}>
                        <ItemImagePreview />
                        <ModalItemContent onClick={handleClose} />
                    </Box>
                </Fade>
            </Modal>
        );
    };

    // React hook to check if a user has linked their battle.net account
    useEffect(() => {
        const hasBnetCredentials = linkedAccounts.some(account => account.bnet);
        if (hasBnetCredentials) {
            setIsAuthorized(true);
        }
        else {
            setIsAuthorized(false);
        }
    }, [linkedAccounts]);

    return (
        <DataProvider>
            {(user && isAuthorized) ?
                <div className="place_order">
                    <HEADER />
                    <BODY />
                </div> : null}
        </DataProvider>
    );
}

export default PlaceOrder;