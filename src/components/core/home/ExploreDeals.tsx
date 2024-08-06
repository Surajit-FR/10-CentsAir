import { Link } from "react-router-dom";
import { Deal } from "../../../types/common";

const deals: Array<Deal> = [
    {
        id: 1,
        city: "San Diego",
        airportCode: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99*",
        tripType: "Round Trip",
        imageUrl: "assets/images/found/1.png"
    },
    {
        id: 2,
        city: "San Diego",
        airportCode: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99*",
        tripType: "Round Trip",
        imageUrl: "assets/images/found/2.png"
    },
    {
        id: 3,
        city: "San Diego",
        airportCode: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99*",
        tripType: "Round Trip",
        imageUrl: "assets/images/found/3.png"
    },
    {
        id: 4,
        city: "San Diego",
        airportCode: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99*",
        tripType: "Round Trip",
        imageUrl: "assets/images/found/1.png"
    },
    {
        id: 5,
        city: "San Diego",
        airportCode: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99*",
        tripType: "Round Trip",
        imageUrl: "assets/images/found/2.png"
    },
    {
        id: 6,
        city: "San Diego",
        airportCode: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99*",
        tripType: "Round Trip",
        imageUrl: "assets/images/found/3.png"
    },
];

const ExploreDeals = (): JSX.Element => {
    return (
        <>
            <section className="found_section explore_deals">
                <div className="container">
                    <div className="found_box mt1">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="low_text">
                                    Explore Deals from San Jose
                                    <Link to="#">
                                        <i className="fa-solid fa-location-dot"></i> Map View
                                    </Link>
                                </h2>
                            </div>
                            {deals.map(deal => (
                                <div className="col-md-6 col-lg-4" key={deal.id}>
                                    <div className="found_smail_box">
                                        <div className="found_img">
                                            <img src={deal.imageUrl} alt={deal.city} />
                                        </div>
                                        <div className="found_text">
                                            <div className="san_text">
                                                <h4>{deal.city}</h4>
                                                <h5>{deal.airportCode}</h5>
                                                <p>{deal.dates}</p>
                                            </div>
                                            <div className="san_price">
                                                <h6>{deal.price}</h6>
                                                <p className="trip">{deal.tripType}</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="similar_tript">
                                                <span className="cost_prics"></span>
                                                <p>Similar trip cost to {deal.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExploreDeals;