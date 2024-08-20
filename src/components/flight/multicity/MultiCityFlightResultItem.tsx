import { Link } from "react-router-dom";
import { FlightOption } from "../../../types/common";

const MultiCityFlightResultItem = ({ flight }: { flight: FlightOption }): JSX.Element => {

    return (
        <>
            <div className="bg_bcolor">
                <ul className="stops_t2 plt_padd">
                    <li className="fd_1">
                        <div className="po_brt123">
                            <div className="p_absut_123 search_return">
                                <input type="radio" id={`departure-${flight.id}`} name={`flight-${flight.id}`} />
                                <label className="ret1" htmlFor={`departure-${flight.id}`}></label>
                            </div>
                            {flight?.details.images.map((src, index) => (
                                <div className={`n_img ${index > 0 ? 'mt-5' : ''}`} key={index}>
                                    <img src={src} alt="" />
                                </div>
                            ))}
                            <div className="p_seond1 search_return">
                                <input type="radio" id={`return-${flight.id}`} name={`flight-${flight.id}`} />
                                <label className="ret1" htmlFor={`return-${flight.id}`}></label>
                            </div>
                        </div>
                    </li>
                    <li className="fd_2">
                        {flight?.details.stops.map((stop, index) => (
                            <div className={`n_text1 ${index > 0 ? 'mt-5' : ''}`} key={index}>
                                <h5>2 stops</h5>
                                <p>{stop.airline} <span className="q_1">{stop.additional}</span></p>
                            </div>
                        ))}
                    </li>
                    <li className="fd_3">
                        {flight?.details.durations.map((duration, index) => (
                            <div className={`m_1 ${index > 0 ? 'mt-5 pt-4' : ''}`} key={index}>
                                <h6>{duration}</h6>
                            </div>
                        ))}
                    </li>
                    <li className="fd_4">
                        {flight?.details.times.map((time, index) => (
                            <div className={`time_b1 ${index > 0 ? 'mt-5' : ''}`} key={index}>
                                <div className="dac_box12">
                                    <h6>{time.departure.time} <span className="dac_1">{time.departure.airport}</span></h6>
                                </div>
                                <div className="bom">
                                    <span className="bom_1">
                                        <em className="rhombues1"><i className="fa-solid fa-rhombus"></i></em>
                                        <em className="rhombues2"><i className="fa-solid fa-rhombus"></i></em>
                                    </span>
                                </div>
                                <div className="dac_box12">
                                    <p>{time.arrival.nextDay ? 'next day' : time.arrival.plusDays ? `+${time.arrival.plusDays} days` : ''}</p>
                                    <h6>{time.arrival.time}<span className="dac_1">{time.arrival.airport}</span></h6>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        ))}
                    </li>
                    <li className="fd_5">
                        <div className="fl_tr">
                            <Link className="sl_14" to={flight?.links.selectDeparture}>
                                <img src="assets/images/icon/f.png" alt="" />
                                <span className="fe1">Select this<br /> Departure</span>
                            </Link>
                        </div>
                        <div className="fl_tr mt-5">
                            <Link className="sl_14" to={flight?.links.selectReturn}>
                                <img src="assets/images/icon/f.png" alt="" />
                                <span className="fe1">Select this <br /> Return</span>
                            </Link>
                        </div>
                    </li>
                    <li className="fd_6">
                        <div className="book_t1">
                            <h5>{flight?.details.price}</h5>
                            <p className="pb-1">Price per person (incl. taxes & fees)</p>
                            <Link className="book_t2" to={flight?.links.book}>BOOK</Link>
                        </div>
                        <div className="book_t1 text-start">
                            <p>As low as {flight?.details.paymentPlan} with <img className="img_01" src="assets/images/show/a1.png" alt="" /></p>
                            <Link className="more_12" to={flight?.links.learnMore}>Learn more</Link>
                        </div>
                    </li>
                </ul>
                <div className="fl_bg_box">
                    <div className="fl_left">
                        <Link to="/flight-details">Flight Details <i className="fa-solid fa-angle-down"></i></Link>
                    </div>
                    <div className="rt_right">
                        <ul>
                            <li><Link className="fare_1" to={flight?.links.fareRules}> Fare Rules</Link></li>
                            <li>
                                <Link className="fare_2" to="#">REFUNDABLE</Link>
                            </li>
                            <li>
                                <Link to="#">ECONOMY</Link>
                            </li>
                            {flight?.details.additionalInfo.map((info, index) => (
                                <li key={index}>
                                    <div className="bg">
                                        <span><i className={`fa ${info.icon}`}></i></span>
                                        {info.text}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </>
    );
};

export default MultiCityFlightResultItem;