import { Link, useNavigate } from 'react-router-dom';
// import { FlightItemsType } from '../../../types/common';
import { InstaFlightResultObject } from '../../../types/sabreReturnTypes';
import { diffIntimeByElapsedTime, 
    // getTimeDifference,
     ParseDate } from '../../../helper/DateHelper';
import { getSingleAirline } from '../../../helper/GetAirlinesStatic';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../../store/Store';
// import { InstaFlightSearchByTag } from '../../../store/reducers/InstaFlightSearchReducer';

const OneWayFlightItem = ({ flight }: { flight: InstaFlightResultObject }) => {
    // const dispatch= useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const onClickBookButton = (flightTagId: string) => {
        localStorage.setItem('bookedFlightId', flightTagId)
        // dispatch(InstaFlightSearchByTag({tagId:flightTagId, navigate}))
        navigate('/booked-flight-details')
    }
    return (
        <>
            <div className="bg_bcolor">
                {flight?.AirItinerary?.OriginDestinationOptions && flight?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption.length > 0 &&
                    flight?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption.map(((item, index) => (
                        <ul className="stops_t2" key={index}>

                            <li className="fd_1">
                                <div className="n_img">
                                    <img src={ getSingleAirline(item?.FlightSegment[0].OperatingAirline.Code)?.logo
                                        } alt="" />
                                          
                                </div>
                            </li>
                            <li className="fd_2">
                                <div className="n_text1">
                                    <h5>{item.FlightSegment.length >1 ?  `${item.FlightSegment.length} Stops`: `${item.FlightSegment.length} Stop`} </h5>
                                    <p>
                                        {getSingleAirline(item?.FlightSegment[0].OperatingAirline.Code)?.name}
                                         <br />
                                        {/* <span className="q_1">(with others)</span> */}
                                    </p>
                                </div>
                            </li>
                            <li className="fd_3">
                                <div className="m_1">
                                    {diffIntimeByElapsedTime(item.ElapsedTime)}
                                </div>
                            </li>
                            {/* <div className="column-style"> */}
                                <div key={index}
                                    style={index !== flight?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption.length - 1 ? { marginBottom: '20px', borderBottom: '2px dotted #6c757d', flexGrow:1.5, } : {flexGrow:1.5} } className='col'
                                >{
                                        item.FlightSegment.map(((dataToShow, i) => (

                                            <div className="time_b1" key={i}>
                                                <div className="dac_box12">
                                                    <h6>
                                                        <span>{ParseDate(new Date(dataToShow.DepartureDateTime))}</span>
                                                        <span>{new Date(dataToShow.DepartureDateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                                                        <span>{dataToShow.DepartureAirport.LocationCode}</span>
                                                    </h6>
                                                </div>
                                                <div className="bom">
                                                    <span className="bom_1">
                                                        <em className="rhombues1">
                                                            <i className="fa-solid fa-rhombus"></i>
                                                            <span>{dataToShow.DepartureAirport.LocationCode}</span>
                                                        </em>
                                                        <em className="rhombues2">
                                                            <i className="fa-solid fa-rhombus"></i>
                                                            <span>{dataToShow.ArrivalAirport.LocationCode}</span>
                                                        </em>
                                                    </span>
                                                </div>
                                                <div className="dac_box12">
                                                    <h6>
                                                        <span>{ParseDate(new Date(dataToShow.ArrivalDateTime))}</span>
                                                        <span>{new Date(dataToShow.ArrivalDateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                                                        <span>{dataToShow.ArrivalAirport.LocationCode}</span>
                                                    </h6>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        )))
                                    }
                                </div>
                            {/* </div> */}
                            <li className="fd_6">
                            {index === 0 && (
                                <>
                                    {/* <li className="fd_5">
                                        <div className="fl_tr">
                                            <Link className="sl_14" to="#">
                                                <img src="assets/images/icon/f.png" alt="" />
                                                <span className="fe1">Select this<br /> Departure</span>
                                            </Link>
                                        </div>
                                    </li> */}
                                        <div className="book_t1">
                                            <button className="book_t2" onClick={() => onClickBookButton(flight?.TPA_Extensions?.TagID)}>BOOK</button>
                                            <h5>
                                                {flight?.AirItineraryPricingInfo.ItinTotalFare.TotalFare.CurrencyCode + ' '}{String(flight?.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount.toFixed(2)).split('.')[0]}
                                                <em>.{String(flight?.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount.toFixed(2)).split('.')[1]}</em>
                                            </h5>
                                            <p>Price per person (incl. taxes & fees)</p>
                                        </div>
                                </>
                            )}
                                    </li>               

                        </ul>
                    )))

                }


                {/* <div className="fl_bg_box"> */}
                    {/* <div className="fl_left">
                        <Link to="#">Flight Details <i className="fa-solid fa-angle-down"></i></Link>
                    </div> */}
                    {/* <div className="rt_right">
                        <ul>
                            <li><Link className="fare_1" to="#"> Fare Rules</Link></li>
                            <li><Link className="fare_2" to="#">REFUNDABLE</Link></li>
                            <li><Link to="#">ECONOMY</Link></li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    2 Checked Bags
                                </div>
                            </li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-solid fa-person-seat"></i></span>
                                    8 Seats
                                </div>
                            </li>
                        </ul>
                    </div> */}
                {/* </div> */}
                <div className="clearfix"></div>
            </div>
        </>
    );
};

export default OneWayFlightItem;
