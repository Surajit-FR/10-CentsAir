import FlightFilter from "../../components/flight/FlightFilter";
import { useEffect, useState } from "react";
import FlightsBottomBox from "../../components/common/BottomInfoBox";
import OneWayFlightResult from "../../components/flight/oneway/OneWayFlightResult";
import MultiCityFlightResult from "../../components/flight/multicity/MultiCityFlightResult";
import RoundTripFlightResult from "../../components/flight/roudtrip/RoundTripFlightResult";
import { RecommendationsItemsType } from "../../types/common";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { InstaFlightSearch } from "../../store/reducers/InstaFlightSearchReducer";
import FlightTabContent from "../../components/core/tabcontent/FlightTabContent";
import GlowLoader from "../../components/shared/GlowLoader";
import { ParseDate } from "../../helper/DateHelper";

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
const StopFilter = [
    {label:"2 stops", value: 2},
    {label:"1 stop", value: 1},
    {label:"Non- Stop", value: 0},
]
const timeFilters = [
    {
        label:"Morning 6 AM - 12",value:"06001200", id: '1'
    },
    {
        label:"Noon 12 PM - 6",value:"12001800", id: '2'
    },
    {
        label:"Evening 6 PM - 12",value:"18000000", id: '3'
    },
    {
        label:"Night 12 AM - 6",value:"00000600", id: '4'
    },
]
const Flights = (): JSX.Element => {
    const flightParams = localStorage.getItem("flightParams") || ''

    const dispatch = useDispatch<AppDispatch>()
    const { data, type } = useSelector((state: RootState) => state.instaFlightSearchSlice)
    const [persistData, setPersistData] = useState<any>({})
    const [outboundWindow, setOutBoundWindow] = useState("")
    const [inboundWindow, setInBoundWindow] = useState("")
    const [outboundflightstops, setOutboundflightstops] = useState<string| number>('')
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


console.log({outboundWindow,inboundWindow})
    // Function to Return the Specific Component based on selected tab
    const renderFlightResultComponent = (): JSX.Element => {
        if (selectedTravelType === "one-way") {
            // return <OneWayFlightResult recommendations={recommendations} />
        } else if (selectedTravelType === "round-trip") {
            return <RoundTripFlightResult recommendations={recommendations} />
        } else if (selectedTravelType === "multi-city") {
            return <MultiCityFlightResult recommendations={recommendations} />
        }
        return <OneWayFlightResult recommendations={recommendations} />
    };

    useEffect(() => {
        if (flightParams) {
            const paramDataObject = JSON.parse(flightParams)
            const query: any = paramDataObject?.tripType === 'Round-trip' ? {
                origin: paramDataObject.sourceLocation.sourceCode,
                destination: paramDataObject.destination.sourceCode,
                departuredate: paramDataObject.departuredate,
                passengercount: (paramDataObject.passengercount.Adult + paramDataObject.passengercount.Child + paramDataObject.passengercount.infant),
                returndate: paramDataObject.returnDate,
                pointofsalecountry: paramDataObject.pontOfSaleCountry,
                enabletagging: true,
                outboundflightstops,
            } : {
                origin: paramDataObject.sourceLocation.sourceCode,
                destination: paramDataObject.destination.sourceCode,
                passengercount: (paramDataObject.passengercount.Adult + paramDataObject.passengercount.Child + paramDataObject.passengercount.infant),
                departuredate: paramDataObject.departuredate,
                pointofsalecountry: paramDataObject.pontOfSaleCountry,
                enabletagging: true,
                outboundflightstops,

            }
            if(inboundWindow){
                query.inbounddeparturewindow=inboundWindow
            }
            if(outboundWindow){
                query.outbounddeparturewindow=outboundWindow
            }
            dispatch(InstaFlightSearch({
                query: query
            }))
        }
    }, [dispatch, flightParams,outboundflightstops,inboundWindow,outboundWindow])
    return (
        <>
            {/* Flight Page TopSection */}
            <div className="banner_tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <FlightTabContent />

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
                                        {/* Dec */}
                                        {ParseDate(new Date(), "getMonth")}
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
                    {/* <div className="applied_filters"> */}
                    {/* <div className="filter_2"> */}
                        {/* <h4>Applied filters</h4> */}
                    {/* </div> */}
                        {/* <ul>
                        <li>Travel Stops: <span>{StopFilter.filter(stop=> stop.value === outboundflightstops)[0]?.label}</span>
                        <button onClick={()=>setOutboundflightstops('')}><i className="fi fi-br-cross"></i></button>
                        </li>
                        <li>Departure Time: <span className="m-2">{timeFilters.filter(time=> outboundWindow === time.value)[0]?.label}</span><button onClick={()=>setOutBoundWindow('')}><i className="fi fi-br-cross"></i></button></li>
                        <li>Arrival Time: <span className="m-2">{timeFilters.filter(time=> inboundWindow === time.value)[0]?.label}</span><button onClick={()=>setInBoundWindow('')}><i className="fi fi-br-cross"></i></button></li>
                        </ul> */}
                    {/* </div> */}
                    <div className="filter_box">
                        {
                            type === 'instaFlightSearchSlice/InstaFlightSearch' ?
                                <GlowLoader /> :
                                (
                                    <>
                                        <div className="row">
                                            {/* Flight Filter */}
                                            {
                                                data && data.PricedItineraries && data.PricedItineraries.length > 0
                                                    ?
                                                    (
                                                        <>
                                                            <FlightFilter 
                                                            setOutboundWindow={setOutBoundWindow} 
                                                            setInBoundWindow={setInBoundWindow}
                                                            setOutboundflightstops={setOutboundflightstops}
                                                            outboundflightstops={outboundflightstops}
                                                            totalFlights={data.Page.TotalTags}
                                                            />
                                                            <OneWayFlightResult recommendations={data.PricedItineraries} />
                                                        </>
                                                    )
                                                    :
                                                    (<div className="no-results">No Results Found....</div>)}
                                        </div>
                                    </>
                                )
                        }

                    </div>
                </div>
            </div>

            {/* Bottom Box */}
            <FlightsBottomBox />
        </>
    );
};

export default Flights;