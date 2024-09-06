import FlightFilter from "../../components/flight/FlightFilter";
import { useEffect, useState } from "react";
import FlightsBottomBox from "../../components/common/BottomInfoBox";
import CommonSearchSection from "../../components/flight/CommonSearchSection";
import OneWayTab from "../../components/flight/oneway/OneWayTab";
import RoundTripTab from "../../components/flight/roudtrip/RoundTripTab";
import MultiCityTab from "../../components/flight/multicity/MultiCityTab";
import OneWayFlightResult from "../../components/flight/oneway/OneWayFlightResult";
import MultiCityFlightResult from "../../components/flight/multicity/MultiCityFlightResult";
import RoundTripFlightResult from "../../components/flight/roudtrip/RoundTripFlightResult";
import { RecommendationsItemsType } from "../../types/common";

type carousel_OneItemType = {
    image: string,
    airline: string,
    price: string,
    stops: string,
};
type carousel_TwoItemType = {
    price: string,
    date: string,
    className?: string,
};

const recommendations: Array<RecommendationsItemsType> = [
    {
        icon: "fa-solid fa-star",
        title: "Recommended",
        price: "USD 1,746.08",
        image: "",
    },
    {
        icon: "",
        title: "Cheapest",
        price: "USD 1,746.08",
        image: "assets/images/show/p1.png",
    },
    {
        icon: "fa-regular fa-clock",
        title: "Shortest",
        price: "USD 1,746.08",
        image: "",
    },
    {
        icon: "fa-solid fa-calendar-days",
        title: "Alternate Dates",
        price: "USD 1,746.08",
        image: "",
    },
];

const Flights = (): JSX.Element => {
    const carouselOneItems: Array<carousel_OneItemType> = [
        { image: "1.png", airline: "Vistara", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "2.png", airline: "Air Canada", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "3.png", airline: "Air India", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "4.png", airline: "American Airlines", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "5.png", airline: "British Airways", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "6.png", airline: "Emirates", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "6.png", airline: "Lufthansa", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "6.png", airline: "Qatar Airways", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "6.png", airline: "Singapore Airlines", price: "USD 1,937.99", stops: "1+ Stops" },
        { image: "6.png", airline: "United Airlines", price: "USD 1,937.99", stops: "1+ Stops" }
    ];
    const carouselTwoItems: Array<carousel_TwoItemType> = [
        { price: "$430", date: "03, Thu" },
        { price: "$430", date: "04, Thu" },
        { price: "$600", date: "05, Thu", className: "thu_5" },
        { price: "$430", date: "06, Thu" },
        { price: "$430", date: "07, Thu" },
        { price: "$430", date: "08, Wed" },
        { price: "$430", date: "09, Wed" },
        { price: "$430", date: "10, Fri", className: "fri_10" },
        { price: "$430", date: "11, Sat" },
        { price: "$560", date: "12, Sat" },
        { price: "$560", date: "13, Mon" },
        { price: "$460", date: "14, Tue" },
        { price: "$480", date: "15, Tue" },
        { price: "$430", date: "16, Tue" },
        { price: "$430", date: "25, Thu", className: "fri_10" },
        { price: "$430", date: "26, Thu", className: "fri_10" },
    ];
    const [selectedTravelType, setSelectedTravelType] = useState<string>('one-way');

    const handleTravelTypeChange = (type: string) => {
        setSelectedTravelType(type);
    };

    // Function to Return the Specific Component based on selected tab
    const renderTripTypeComponent = (): JSX.Element => {
        if (selectedTravelType === "one-way") {
            return <OneWayTab />
        } else if (selectedTravelType === "round-trip") {
            return <RoundTripTab />
        } else if (selectedTravelType === "multi-city") {
            return <MultiCityTab />
        }
        return <OneWayTab />
    };

    // Function to Return the Specific Component based on selected tab
    const renderFlightResultComponent = (): JSX.Element => {
        if (selectedTravelType === "one-way") {
            return <OneWayFlightResult recommendations={recommendations} />
        } else if (selectedTravelType === "round-trip") {
            return <RoundTripFlightResult recommendations={recommendations} />
        } else if (selectedTravelType === "multi-city") {
            return <MultiCityFlightResult recommendations={recommendations} />
        }
        return <OneWayFlightResult recommendations={recommendations} />
    };

    useEffect(() => {
        (window as any).$ = (window as any).jQuery = require('jquery');
        require('owl.carousel');

        (window as any).$('#show-all-fares').owlCarousel({
            autoplay: false,
            rewind: false,
            loop: true,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                },
                1024: {
                    items: 7
                },
                1366: {
                    items: 9
                }
            }
        });
        (window as any).$('#dce_calder').owlCarousel({
            autoplay: false,
            rewind: false,
            loop: true,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                },
                1024: {
                    items: 7
                },
                1366: {
                    items: 15
                }
            }
        });
    }, []);

    return (
        <>
            {/* Flight Page TopSection */}
            <div className="one_way_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="one_way">
                                <li
                                    className={selectedTravelType === 'one-way' ? 'active' : ''}
                                    onClick={() => handleTravelTypeChange('one-way')}
                                >
                                    One-way
                                </li>
                                <li
                                    className={selectedTravelType === 'round-trip' ? 'active' : ''}
                                    onClick={() => handleTravelTypeChange('round-trip')}
                                >
                                    Round-trip
                                </li>
                                <li
                                    className={selectedTravelType === 'multi-city' ? 'active' : ''}
                                    onClick={() => handleTravelTypeChange('multi-city')}
                                >
                                    Multi-city
                                </li>
                            </ul>

                            {/* Render the specific component based on selected trip type */}
                            {renderTripTypeComponent()}

                            {/* CommonSearchSection */}
                            <CommonSearchSection />
                        </div>
                    </div>
                </div>
            </div >

            <div className="show_all_fares_banner">
                <div className="container pa_top">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="show-all-fares" className="owl-carousel bt_border">
                                <div className="item">
                                    <div className="show_text_box">
                                        <div className="show_text">
                                            <h5>Show All Fares</h5>
                                            <h6>1+ Stops</h6>
                                        </div>
                                    </div>
                                </div>
                                {
                                    carouselOneItems?.map((item, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <div className="show_text_box">
                                                    <div className="show_img">
                                                        <img src={`assets/images/show/${item?.image}`} alt={item?.airline} />
                                                    </div>
                                                    <div className="show_text">
                                                        <h5>{item?.airline}</h5>
                                                        <p>(with others)</p>
                                                        <h4>{item?.price}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className="col-lg-12">
                            <div className="dce_box">
                                <div className="bd_dec">
                                    <h4>
                                        <i className="fa-solid fa-calendar-day"></i>
                                        <br />
                                        Dec
                                    </h4>
                                </div>
                                <div id="dce_calder" className="owl-carousel">
                                    {carouselTwoItems?.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className={`price_calder ${item?.className || ''}`}>
                                                <div className="text-center mx-auto">
                                                    <h5>{item?.price}</h5>
                                                    <h6>{item?.date}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="filter_box">
                        <div className="row">
                            {/* Flight Filter */}
                            <FlightFilter />

                            {/* Render the specific component based on selected trip type */}
                            {renderFlightResultComponent()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Box */}
            <FlightsBottomBox />
        </>
    );
};

export default Flights;