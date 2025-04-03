import { Link } from "react-router-dom";
import { InstaFlightResultObject } from "../../types/sabreReturnTypes";
import { diffIntimeByElapsedTime, getTimeDifference, ParseDate } from "../../helper/DateHelper";

interface ListedFlightProps {
    flightsdata: InstaFlightResultObject
}


const ListedFlightSection = ({ flightsdata }: ListedFlightProps): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                {/* <h6 className="skip_1">Skip</h6> */}
                <div className="green_box_123">
                    <h4>This flight is on an alternate date. Please verify the dates.</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="f_light123">
                            <h5>Flight Details</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text_usd text-end">
                            <h4>{
                            // flightsdata?.AirItineraryPricingInfo?.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.CurrencyCode ||
                             "USD"}{" "}

                                {String(flightsdata?.AirItineraryPricingInfo?.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount.toFixed(2)).split(".")[0]}
                                <span>
                                    .{String(flightsdata?.AirItineraryPricingInfo?.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount.toFixed(2)).split(".")[1]}
                                </span></h4>
                            <p>Price Per Preson (incl. taxes & fees)</p>
                        </div>
                    </div>
                </div>
                {/* <ul className="hand_ul">
                    <li>
                        <i className="fa-solid fa-thumbs-up me-1"></i>
                        Great Job! This flight comes with our Price Match Promise
                    </li>
                    <li>
                        <i className="fa-regular fa-clock de2 me-1"></i>
                        and 24 hours cancellation, for a fee
                        <i className="fa-regular fa-clock de2 mx-1"></i>
                    </li>
                </ul> */}
                <ul className="depart_1325">
                    <li>Depart  {ParseDate(new Date(flightsdata?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime),'dayDate')}</li>
                    {/* <li><Link to="#">This is an alternate date itinerary.</Link></li> */}
                </ul>
                {flightsdata?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment.map((flight, index) => (
                    <div className="mi_bov_142" key={index}>
                        <ul className="stops_t2 stops_t3">
                            <li className="fd_1">
                                <div className="n_img">
                                    <img src="assets/images/show/1.png" alt="" />
                                </div>
                            </li>
                            <li className="fd_2">
                                <div className="n_text1">
                                    <h5>{flight.OperatingAirline.CompanyShortName || flight.OperatingAirline.Code} </h5>
                                    <p>Flight {flight.FlightNumber} <span className="q_1">Aircraft {flight.Equipment.AirEquipType}</span></p>
                                </div>
                            </li>
                            <li className="fd_3">
                                <div className="m_1">
                                    <h6 className="fri_dec12 h_3">{ParseDate(new Date(flight?.DepartureDateTime),'dayDate')}</h6>
                                </div>
                            </li>
                            <li className="fd_5">
                                <div className="dac_box12">
                                    <h6>{ParseDate(new Date(flight?.DepartureDateTime),'timeOnly')}<span className="dac_1">{flight?.DepartureAirport.LocationCode}</span></h6>
                                </div>
                            </li>
                            <li className="fd_5">
                                <div className="dac_box12">
                                    <h6>{ParseDate(new Date(flight?.ArrivalDateTime),'timeOnly')}<span className="dac_1">{flight?.ArrivalAirport.LocationCode}</span></h6>
                                </div>
                            </li>
                            <li className="fd_3">
                                <div className="m_1">
                                    <h6 className="h_3">{ParseDate(new Date(flight?.ArrivalDateTime),'dayDate')}</h6>
                                </div>
                            </li>
                            <li className="fd_6">
                                <div className="book_t1 text-start">
                                    <p className="cabin_12">Cabin: {flightsdata?.AirItineraryPricingInfo?.FareInfos.FareInfo[index].TPA_Extensions.Cabin.Cabin}</p>
                                    {/* <p className="cabin_12">Brand Name: Flex</p> */}
                                </div>
                            </li>
                        </ul>
                        {index !== flightsdata?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment.length-1 && (

                        <div className="lay_box">
                            <div className="lay_1">
                                <h3 className="">Layover: {getTimeDifference(new Date(flight?.ArrivalDateTime),new Date(flightsdata?.AirItinerary?.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[index+1].DepartureDateTime)
                                )
                                }</h3>
                            </div>
                        </div>

                        )}
                    </div>
                )
                )}
                <div className="row">
                    <div className="col-md-5">
                        <h4 className="tatal_112">Total Trip Duration : {diffIntimeByElapsedTime(flightsdata?.AirItinerary?.OriginDestinationOptions?.OriginDestinationOption[0].ElapsedTime)}</h4>
                    </div>
                    <div className="col-md-7">
                        {/* <ul className="per_123">
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    1 Personal Item
                                </div>
                            </li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    1 Carry-on bag
                                </div>
                            </li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    2 Checked Bags
                                </div>
                            </li>
                        </ul> */}
                        <ul className="non_reff">
                            <li>{flightsdata?.AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.Endorsements.NonRefundableIndicator? "NON-REFUNDABLE": <div style={{color:'green'}}>REFUND- ELIGIBLE</div>}</li>
                            <li>
                                <Link to="#">{flightsdata?.TPA_Extensions.ValidatingCarrier.Code}</Link>
                            </li>
                            {/* <li>
                                <Link to="#">Baggage Policy</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListedFlightSection;