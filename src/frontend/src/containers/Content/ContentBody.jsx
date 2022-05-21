// Internal imports
import './contentbody.css';


const ListingsSell = () => {
    return (
        <div className='listings_sell'>
            <div className="listings__header">
                <div className="order_type_marker sell">Want to Sell</div>
            </div>
            <div className="listings_data">
                <div className="data_item">
                    <div>
                        <span>Orders not found</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
const ListingsBuy = () => {
    return (
        <div className='listings_buy'>
            <div className="listings__header">
                <div className="order_type_marker buy">Want to Buy</div>
            </div>
            <div className="listings_data">
                <div className="data_item">
                    <div>
                        <span>Orders not found</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContentBody = () => {
    return (
        <div className='content_body__container flex__root'>
            <div className='flex__left'></div>
            <div className='container recent_orders'>
                <div className='orders'>
                    <ListingsSell />
                    <ListingsBuy />
                </div>
                <div className='show__more__less'></div>
            </div>
            <div className='flex__right'></div>
        </div>
    );
}

export default ContentBody;