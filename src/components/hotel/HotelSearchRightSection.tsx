import { Link } from "react-router-dom";
import { Hotel } from "../../types/common";

const HotelSearchRightSection = (): JSX.Element => {
    const hotels: Array<Hotel> = [
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
        {
            image: "assets/images/hand/r1.png",
            name: "Ramada Plaza by Wyndham Calgary",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Queen Room with Two Queen Beds - Non-Smoking",
            bedType: "2 queen beds",
            breakfastIncluded: true,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
        },
        {
            image: "assets/images/hand/r2.png",
            name: "Tastoria Collection - SHA Extra Plus",
            location: "Southwest Calgary, Calgary",
            distance: "4.1 miles from center",
            sustainableLevel: "Travel Sustainable Level 1",
            roomType: "Superior King Room",
            bedType: "Multiple bed types",
            breakfastIncluded: false,
            freeCancellation: true,
            noPrepayment: true,
            rating: 7.6,
            reviewCount: 1888,
            totalPrice: 1320,
            taxesAndCharges: 162,
            availabilityMessage: "Only 1 room left at this price on our site",
        },
    ];

    return (
        <>
            <div className="col-lg-9 col-md-8">
                <div className="cle_1">
                    <h3>Calgary: 190 properties found</h3>
                    <p>
                        <i className="fa-thin fa-arrow-up-arrow-down"></i>
                        Sort by : Top picks for long stays
                        <i className="fa-light fa-angles-up-down"></i>
                    </p>
                </div>
                
                {hotels?.map((hotel, index) => (
                    <div className="ramada_boxsd" key={index}>
                        <ul className="ramada_list">
                            <li>
                                <div className="ramada_img">
                                    <img src={hotel?.image} alt={hotel?.name} />
                                </div>
                                <div className="ramada_text">
                                    <h4>{hotel?.name}</h4>
                                    <ul className="southwest">
                                        <li><Link to="#">{hotel?.location}</Link></li>
                                        <li><Link to="#">Show on map</Link></li>
                                        <li>{hotel?.distance}</li>
                                    </ul>
                                    <h5><img src="assets/images/icon/leaf.png" alt="Sustainable Icon" /> {hotel?.sustainableLevel}</h5>
                                    <p>{hotel?.roomType}</p>
                                    <p>{hotel?.bedType}</p>
                                    {hotel?.breakfastIncluded && <h6>Breakfast included</h6>}
                                    {hotel?.freeCancellation && <h6>Free cancellation</h6>}
                                    {hotel?.noPrepayment && <h6>No prepayment needed</h6>}
                                    <ul className="good_list">
                                        <li><span className="siven1">{hotel?.rating}</span></li>
                                        <li><span className="gd_good"> Good</span></li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            {hotel?.reviewCount} Reviews
                                        </li>
                                    </ul>
                                </div>
                                <div className="ramada_prices">
                                    <div className="text-center">
                                        <h2>USD {hotel?.totalPrice}</h2>
                                        <p>2 weeks, 2 adults</p>
                                        <p>+US${hotel?.taxesAndCharges} taxes and charges</p>
                                        {hotel?.availabilityMessage && <p className="site_col">{hotel?.availabilityMessage}</p>}
                                        <Link to="#">Book</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )).slice(0, 2)}

                <div className="ramada_boxsd your_own">
                    <ul className="ramada_list">
                        <li>
                            <div className="mini_img">
                                <img src="assets/images/hand/gh1.png" alt="" />
                            </div>
                            <div className="mini_text">
                                <h4>Looking for a space of your own?</h4>
                                <p>Find privacy and peace of mind with an entire home or apartment to yourself</p>
                                <Link to="#">Show entire homes & apartments</Link>
                            </div>
                            <span className="xmark_cl"><i className="fa-solid fa-xmark"></i></span>
                        </li>
                    </ul>
                </div>

                {hotels?.map((hotel, index) => (
                    <div className="ramada_boxsd" key={index}>
                        <ul className="ramada_list">
                            <li>
                                <div className="ramada_img">
                                    <img src={hotel?.image} alt={hotel?.name} />
                                </div>
                                <div className="ramada_text">
                                    <h4>{hotel?.name}</h4>
                                    <ul className="southwest">
                                        <li><Link to="#">{hotel?.location}</Link></li>
                                        <li><Link to="#">Show on map</Link></li>
                                        <li>{hotel?.distance}</li>
                                    </ul>
                                    <h5><img src="assets/images/icon/leaf.png" alt="Sustainable Icon" /> {hotel?.sustainableLevel}</h5>
                                    <p>{hotel?.roomType}</p>
                                    <p>{hotel?.bedType}</p>
                                    {hotel?.breakfastIncluded && <h6>Breakfast included</h6>}
                                    {hotel?.freeCancellation && <h6>Free cancellation</h6>}
                                    {hotel?.noPrepayment && <h6>No prepayment needed</h6>}
                                    <ul className="good_list">
                                        <li><span className="siven1">{hotel?.rating}</span></li>
                                        <li><span className="gd_good"> Good</span></li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            {hotel?.reviewCount} Reviews
                                        </li>
                                    </ul>
                                </div>
                                <div className="ramada_prices">
                                    <div className="text-center">
                                        <h2>USD {hotel?.totalPrice}</h2>
                                        <p>2 weeks, 2 adults</p>
                                        <p>+US${hotel?.taxesAndCharges} taxes and charges</p>
                                        {hotel?.availabilityMessage && <p className="site_col">{hotel?.availabilityMessage}</p>}
                                        <Link to="#">Book</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                ))?.slice(2)}
            </div>
        </>
    );
};

export default HotelSearchRightSection;