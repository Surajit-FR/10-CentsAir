import { Link } from "react-router-dom";
import CustomPagination from "../../CustomPagination";
import { useState } from "react";
import OneWayFlightResultItem from "./OneWayFlightResultItem";
import { FlightItemsType, RecommendationsItemsType } from "../../../types/common";

const OneWayFlightResult = ({ recommendations }: { recommendations: Array<any> }): JSX.Element => {
    const flightDummyData: Array<FlightItemsType> = [
        {
            imageSrc: "assets/images/show/1.png",
            stops: "2 stops",
            airline: "Vistara",
            duration: "40h 15m",
            departureTime: "11:45 AM",
            arrivalTime: "3:00 PM",
            departureAirport: "DAC",
            arrivalAirport: "YYC",
            price: "USD 1,937"
        },
        {
            imageSrc: "assets/images/show/2.png",
            stops: "1 stop",
            airline: "Emirates",
            duration: "22h 10m",
            departureTime: "4:00 PM",
            arrivalTime: "8:10 AM",
            departureAirport: "DAC",
            arrivalAirport: "JFK",
            price: "USD 1,500"
        },
        {
            imageSrc: "assets/images/show/3.png",
            stops: "Direct",
            airline: "Qatar Airways",
            duration: "15h 25m",
            departureTime: "8:00 AM",
            arrivalTime: "10:25 PM",
            departureAirport: "DAC",
            arrivalAirport: "LHR",
            price: "USD 1,200"
        },
        {
            imageSrc: "assets/images/show/4.png",
            stops: "3 stops",
            airline: "Singapore Airlines",
            duration: "50h 45m",
            departureTime: "6:30 AM",
            arrivalTime: "5:15 AM",
            departureAirport: "DAC",
            arrivalAirport: "SYD",
            price: "USD 2,200"
        },
        {
            imageSrc: "assets/images/show/5.png",
            stops: "1 stop",
            airline: "British Airways",
            duration: "19h 05m",
            departureTime: "9:30 AM",
            arrivalTime: "8:35 AM",
            departureAirport: "DAC",
            arrivalAirport: "LHR",
            price: "USD 1,350"
        },
        {
            imageSrc: "assets/images/show/6.png",
            stops: "2 stops",
            airline: "Cathay Pacific",
            duration: "32h 40m",
            departureTime: "12:15 PM",
            arrivalTime: "7:55 PM",
            departureAirport: "DAC",
            arrivalAirport: "SFO",
            price: "USD 1,800"
        },
    ];

    const [pageNumber, setPageNumber] = useState<number>(0);
    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };
console.log(recommendations)
    return (
        <>
            <div className="col-md-4 col-lg-9">
                <div className="stoy_by_box">
                    {/* <div className="t_sory">
                        <h3>Sort by</h3>
                    </div> */}
                    {/* <ul className="stoy_list">
                        {recommendations?.map((rec, index) => (
                            <li key={index}>
                                <div className="recommended">
                                    <span className="w1_img">
                                        {rec?.image ? (
                                            <img src={rec?.image} alt={rec?.title} />
                                        ) : (
                                            <i className={rec?.icon}></i>
                                        )}
                                    </span>
                                    <span className="w1_ret">
                                        <h5 className={rec?.title === "Cheapest" ? "a1" : ""}>
                                            {rec?.title}
                                            {rec?.title === "Recommended" && <i className="fa-light fa-circle-exclamation"></i>}
                                        </h5>
                                        <p>{rec?.price}</p>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul> */}

                    {/* {recommendations?.map((flight, index) => (
                        <OneWayFlightResultItem key={index} flight={flight} />
                    ))} */}

                    {/* <div className="instantly_box">
                        <h4>
                            <img src="assets/images/show/ir.png" alt="" />
                            Save instantly on your trip <span>Get upto USD 15 OFF our fees.<Link to="#"> Learn
                                more</Link></span>
                        </h4>
                        <form>
                            <ul className="v_input_12">
                                <li>
                                    <input className="in_textv" type="text" name="text" placeholder="Email Address" />
                                </li>
                                <li>
                                    <input className="code_12" type="submit" placeholder="Get Promo Code" />
                                </li>
                            </ul>
                        </form>
                        <p>By entering your email address you agree to 10 Cent Air’s <Link to="#"> Terms and
                            Conditions, Privacy Policy</Link> and to receive email marketing.</p>
                    </div> */}

                    {recommendations?.map((flight, index) => (
                        <OneWayFlightResultItem key={index} flight={flight} />
                    ))}

                    {/* <div className="row">
                        <div className="col-md-9">
                            <div className="pagination_123">
                                <CustomPagination
                                    pageCount={6}
                                    pageNumber={pageNumber}
                                    changePage={changePage}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="paginat_12">
                                <p>Show : 1-17</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default OneWayFlightResult;