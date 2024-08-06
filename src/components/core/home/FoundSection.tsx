import { FoundDeal } from "../../../types/common";

const deals: Array<FoundDeal> = [
    {
        destination: "San Diego",
        route: "SJC/SAN",
        dates: "Oct 28 – Oct 30",
        price: "$80.99",
        imageUrl: "assets/images/found/1.png",
        similarTripText: "Similar trip cost to San Diego"
    },
    {
        destination: "Seattle",
        route: "SJC/SEA",
        dates: "Oct 16 – Oct 24",
        price: "$107.99",
        imageUrl: "assets/images/found/2.png",
        similarTripText: "Similar trip cost to San Diego"
    },
    {
        destination: "Honolulu",
        route: "SJC/HNL",
        dates: "Oct 30 – Nov 03",
        price: "$272.99",
        imageUrl: "assets/images/found/3.png",
        similarTripText: "Similar trip cost to San Diego"
    }
];


const FoundSection = (): JSX.Element => {
    return (
        <>
            <section className="found_section">
                <div className="container">
                    <div className="found_box">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="low_text">Found these <span>low</span> fare deals for your next trip</h2>
                            </div>
                            {deals?.map((deal, index) => (
                                <div key={index} className="col-md-6 col-lg-4">
                                    <div className="found_smail_box">
                                        <div className="found_img">
                                            <img src={deal?.imageUrl} alt={deal?.destination} />
                                        </div>
                                        <div className="found_text">
                                            <div className="san_text">
                                                <h4>{deal?.destination}</h4>
                                                <h5>{deal?.route}</h5>
                                                <p>{deal?.dates}</p>
                                            </div>
                                            <div className="san_price">
                                                <h6>{deal?.price}<span>*</span></h6>
                                                <p className="trip">Round Trip</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="similar_tript">
                                                <span className="cost_prics"></span>
                                                <p>{deal?.similarTripText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-md-12">
                                <p className="fares">
                                    *All fares above were found in last 8 hours. Fares are round trip/one way. Fares incl. all fuel surcharges, taxes & fees and our service fees. Displayed fares are based on historical data, are subject to change and cannot be guaranteed at the time of booking. See all booking terms and conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundSection;
