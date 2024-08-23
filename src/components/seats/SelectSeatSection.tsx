import React, { useEffect } from "react";
import { FlightDataTwo } from "../../types/common";
import { Link } from "react-router-dom";

interface SeatType {
    className: string;
    label: string;
    icon?: JSX.Element;
};

interface SelectSeatSectionProps {
    activeId: string,
    flightData: Array<FlightDataTwo>,
    handleSeatsVisibility: React.MouseEventHandler,
    showSeats: boolean,
    isCheckinOpens: boolean,
    handleNextSeatSelection: React.MouseEventHandler,
    carouselRef: any,
    selectSeat: boolean
};

const seatTypes: Array<SeatType> = [
    { className: "ps_seat_12", label: "Preferred Seat", icon: <i className="fa-solid fa-star"></i> },
    { className: "ps_seat_12 av_1", label: "Available seat" },
    { className: "ps_seat_12 un_1", label: "Unavailable seat", icon: <i className="fa-solid fa-x"></i> },
    { className: "ps_seat_12 se_1", label: "Selected seat" },
    { className: "ps_seat_12 pr_1", label: "Premium seat" },
];

const SelectSeatSection = ({
    activeId,
    flightData,
    handleSeatsVisibility,
    showSeats,
    isCheckinOpens,
    handleNextSeatSelection,
    carouselRef,
    selectSeat
}: SelectSeatSectionProps): JSX.Element => {

    useEffect(() => {
        (window as any).$ = (window as any).jQuery = require('jquery');
        require('owl.carousel');

        (window as any).$('#seats_e2').owlCarousel({
            autoplay: false,
            rewind: false,
            loop: true,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            margin: 0,
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
                    items: 5
                },
                1366: {
                    items: 5
                }
            }

        });

        // Store the carousel instance in the ref
        carouselRef.current = (window as any).$('#seats_e2').data('owl.carousel');
    }, [carouselRef]);

    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>

                {/* THIS PART WILL BE HANDLED AFTER SEAT SELACTION */}
                {
                    !selectSeat ?
                        <>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="f_light123">
                                        <h5>Select Seats</h5>
                                    </div>
                                </div>
                            </div>
                            <ul className="in_bocdt dis_l1 mt-3 mb-3">
                                <li><i className="fa-solid fa-check"></i> Get peace of mind by selecting your preferred seat now
                                </li>
                                <li><i className="fa-solid fa-check"></i> Request a seat next to friends and family</li>
                                <li><i className="fa-solid fa-check"></i> Select from mostly window and aisle seats</li>
                            </ul>

                            <div className="hide_show_12 text-end"
                                onClick={handleSeatsVisibility}
                                style={{ cursor: "pointer" }}
                            ><p>Hide Seats
                                    <i className={`fa-solid mx-1 ${showSeats ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </p>
                            </div>
                        </>
                        :
                        <>
                            <ul className="hand_ul mb-4">
                                <li>
                                    Yay! Your seats have been selected.
                                </li>
                            </ul>
                            <div className="kevin_vo mb-4">
                                <Link to="#">
                                    <span className="k_q1">
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                    <div className="vo_1">
                                        <p>1 Kevin Vo</p>
                                    </div>
                                </Link>
                            </div>
                        </>
                }

                <div className="sea_box1">
                    <div id="seats_e2" className="owl-carousel">
                        {flightData?.map((flight) => (
                            <div className="item" key={flight?.id}>
                                <div className={`seats_e1 ${activeId === flight?.id ? "active" : ""}`}>
                                    <div className="seats_img">
                                        <img src={flight?.imgSrc} alt="" />
                                    </div>
                                    <div className="seats_text">
                                        <p>{flight?.flightNumber} <span>{flight?.route}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* THIS PART WILL BE HANDLED AFTER SEAT SELACTION */}
                    {
                        !selectSeat ?
                            <>
                                {
                                    isCheckinOpens ?
                                        <>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <div className="vi_rt">
                                                        <h5><b>Vistara</b>Airbus Industries A320 120-180 STD </h5>
                                                        <p>SEATS</p>

                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <ul className="preferred_seat_124">
                                                        {seatTypes?.map((seat, index) => (
                                                            <li key={index}>
                                                                <span className={seat?.className}>
                                                                    {seat?.icon}
                                                                </span>
                                                                {seat?.label}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-4">
                                                    <ul className="search_return sec_top_12">
                                                        <li>
                                                            <div className="form-group">
                                                                <input type="radio" id="handicapped" name="handicapped" />
                                                                <label className="ret1 han_q2" htmlFor="handicapped">Show Handicapped Accessible
                                                                    Seats</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="text-end">
                                                        <p>For using our seatmap, the Enhanced Seat Assignment (ESA) fee applies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <ul className="airbus_q1">
                                                <li>Air Canada</li>
                                                <li>AIRBUS INDUSTRIE 330 JET 200-345 STD SEATS</li>
                                            </ul>
                                            <ul className="check_in_seat_12">
                                                <li
                                                    style={{
                                                        border: "1px solid black",
                                                        padding: "3px",
                                                        marginRight: "10px",
                                                        borderRadius: "5px",
                                                    }}
                                                >
                                                    <div className="regu_bet">
                                                        <span className="fa_clock_1"><i className="fa-regular fa-clock de2"></i></span>
                                                        <div className="text assignment_1">
                                                            <h5> Check-in Seat Assignment</h5>
                                                            <p>You can select your seat for this flight when check-in opens, which is
                                                                usually within 24 hours of departure.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link className="go_to" to="#" onClick={handleNextSeatSelection}>Go To Next Flight</Link>
                                                </li>
                                            </ul>
                                            <p className="note_w mt-4">Note: Your seat request(s) will be transmitted to the airline(s). Please
                                                contact your airline(s) directly to confirm these request(s) prior to your departure date.
                                            </p>
                                        </>
                                }
                            </>
                            :
                            <>
                                <div className="text-end" onClick={handleSeatsVisibility}>
                                    <Link className="modify_1" to="#">Modify Seats
                                        <i className={`fa-solid mx-1 ${showSeats ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                    </Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default SelectSeatSection;