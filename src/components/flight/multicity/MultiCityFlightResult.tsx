import { useState } from "react";
import { FlightOption, RecommendationsItemsType } from "../../../types/common";
import CustomPagination from "../../../util/CustomPagination";
import MultiCityFlightResultItem from "./MultiCityFlightResultItem";

const MultiCityFlightResult = ({ recommendations }: { recommendations: Array<RecommendationsItemsType> }): JSX.Element => {
    const flightDummyData: Array<FlightOption> = [
        {
            details: {
                images: [
                    "assets/images/show/1.png",
                    "assets/images/show/2.png"
                ],
                stops: [
                    { airline: "Vistara", additional: "(with others)" },
                    { airline: "Air Canada", additional: "(with others)" }
                ],
                durations: ["40h 15m", "25h 55m"],
                times: [
                    {
                        departure: { time: "11:45 AM", airport: "DAC" },
                        arrival: { time: "3:00 PM", airport: "YYC", nextDay: true }
                    },
                    {
                        departure: { time: "6:20 PM", airport: "YYC" },
                        arrival: { time: "9:15 AM", airport: "DAC", plusDays: 2 }
                    }
                ],
                price: "USD 1,937.99",
                paymentPlan: "$138/mo",
                additionalInfo: [
                    { icon: "fa-suitcase-rolling", text: "2 Checked Bags" },
                    { icon: "fa-person-seat", text: "8 Seats" }
                ]
            },
            links: {
                selectDeparture: "#",
                selectReturn: "#",
                book: "#",
                learnMore: "#",
                flightDetails: "#",
                fareRules: "#"
            }
        },
        {
            details: {
                images: [
                    "assets/images/show/3.png",
                    "assets/images/show/4.png"
                ],
                stops: [
                    { airline: "Vistara", additional: "(with others)" },
                    { airline: "Air Canada", additional: "(with others)" }
                ],
                durations: ["40h 15m", "25h 55m"],
                times: [
                    {
                        departure: { time: "11:45 AM", airport: "DAC" },
                        arrival: { time: "3:00 PM", airport: "YYC", nextDay: true }
                    },
                    {
                        departure: { time: "6:20 PM", airport: "YYC" },
                        arrival: { time: "9:15 AM", airport: "DAC", plusDays: 2 }
                    }
                ],
                price: "USD 1,937.99",
                paymentPlan: "$138/mo",
                additionalInfo: [
                    { icon: "fa-suitcase-rolling", text: "2 Checked Bags" },
                    { icon: "fa-person-seat", text: "8 Seats" }
                ]
            },
            links: {
                selectDeparture: "#",
                selectReturn: "#",
                book: "#",
                learnMore: "#",
                flightDetails: "#",
                fareRules: "#"
            }
        },
        {
            details: {
                images: [
                    "assets/images/show/5.png",
                    "assets/images/show/6.png"
                ],
                stops: [
                    { airline: "Vistara", additional: "(with others)" },
                    { airline: "Air Canada", additional: "(with others)" }
                ],
                durations: ["40h 15m", "25h 55m"],
                times: [
                    {
                        departure: { time: "11:45 AM", airport: "DAC" },
                        arrival: { time: "3:00 PM", airport: "YYC", nextDay: true }
                    },
                    {
                        departure: { time: "6:20 PM", airport: "YYC" },
                        arrival: { time: "9:15 AM", airport: "DAC", plusDays: 2 }
                    }
                ],
                price: "USD 1,937.99",
                paymentPlan: "$138/mo",
                additionalInfo: [
                    { icon: "fa-suitcase-rolling", text: "2 Checked Bags" },
                    { icon: "fa-person-seat", text: "8 Seats" }
                ]
            },
            links: {
                selectDeparture: "#",
                selectReturn: "#",
                book: "#",
                learnMore: "#",
                flightDetails: "#",
                fareRules: "#"
            }
        },
        {
            details: {
                images: [
                    "assets/images/show/1.png",
                    "assets/images/show/2.png"
                ],
                stops: [
                    { airline: "Vistara", additional: "(with others)" },
                    { airline: "Air Canada", additional: "(with others)" }
                ],
                durations: ["40h 15m", "25h 55m"],
                times: [
                    {
                        departure: { time: "11:45 AM", airport: "DAC" },
                        arrival: { time: "3:00 PM", airport: "YYC", nextDay: true }
                    },
                    {
                        departure: { time: "6:20 PM", airport: "YYC" },
                        arrival: { time: "9:15 AM", airport: "DAC", plusDays: 2 }
                    }
                ],
                price: "USD 1,937.99",
                paymentPlan: "$138/mo",
                additionalInfo: [
                    { icon: "fa-suitcase-rolling", text: "2 Checked Bags" },
                    { icon: "fa-person-seat", text: "8 Seats" }
                ]
            },
            links: {
                selectDeparture: "#",
                selectReturn: "#",
                book: "#",
                learnMore: "#",
                flightDetails: "#",
                fareRules: "#"
            }
        },
        {
            details: {
                images: [
                    "assets/images/show/3.png",
                    "assets/images/show/4.png"
                ],
                stops: [
                    { airline: "Vistara", additional: "(with others)" },
                    { airline: "Air Canada", additional: "(with others)" }
                ],
                durations: ["40h 15m", "25h 55m"],
                times: [
                    {
                        departure: { time: "11:45 AM", airport: "DAC" },
                        arrival: { time: "3:00 PM", airport: "YYC", nextDay: true }
                    },
                    {
                        departure: { time: "6:20 PM", airport: "YYC" },
                        arrival: { time: "9:15 AM", airport: "DAC", plusDays: 2 }
                    }
                ],
                price: "USD 1,937.99",
                paymentPlan: "$138/mo",
                additionalInfo: [
                    { icon: "fa-suitcase-rolling", text: "2 Checked Bags" },
                    { icon: "fa-person-seat", text: "8 Seats" }
                ]
            },
            links: {
                selectDeparture: "#",
                selectReturn: "#",
                book: "#",
                learnMore: "#",
                flightDetails: "#",
                fareRules: "#"
            }
        },
        {
            details: {
                images: [
                    "assets/images/show/5.png",
                    "assets/images/show/6.png"
                ],
                stops: [
                    { airline: "Vistara", additional: "(with others)" },
                    { airline: "Air Canada", additional: "(with others)" }
                ],
                durations: ["40h 15m", "25h 55m"],
                times: [
                    {
                        departure: { time: "11:45 AM", airport: "DAC" },
                        arrival: { time: "3:00 PM", airport: "YYC", nextDay: true }
                    },
                    {
                        departure: { time: "6:20 PM", airport: "YYC" },
                        arrival: { time: "9:15 AM", airport: "DAC", plusDays: 2 }
                    }
                ],
                price: "USD 1,937.99",
                paymentPlan: "$138/mo",
                additionalInfo: [
                    { icon: "fa-suitcase-rolling", text: "2 Checked Bags" },
                    { icon: "fa-person-seat", text: "8 Seats" }
                ]
            },
            links: {
                selectDeparture: "#",
                selectReturn: "#",
                book: "#",
                learnMore: "#",
                flightDetails: "#",
                fareRules: "#"
            }
        },
    ];

    const [pageNumber, setPageNumber] = useState<number>(0);
    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="col-md-4 col-lg-9">
                <div className="stoy_by_box">
                    <div className="t_sory">
                        <h3>Sort by</h3>
                    </div>
                    <ul className="stoy_list">
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
                    </ul>

                    {flightDummyData?.map((flight, index) => (
                        <MultiCityFlightResultItem flight={flight} key={index} />
                    ))}

                    <div className="row">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiCityFlightResult;