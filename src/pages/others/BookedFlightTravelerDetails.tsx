import FlightsBottomBox from "../../components/common/BottomInfoBox";
import PriceDetailsSection from "../../components/flight-details/PriceDetailsSection";
import FlightDetailsListSection from "../../components/flight-details/FlightDetailsListSection";
import SeatsSection from "../../components/seats/SeatsSection";
import { useEffect, useState } from "react";
import PaymentSection from "../../components/payment/PaymentSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { InstaFlightSearchByTag } from "../../store/reducers/InstaFlightSearchReducer";
import GlowLoader from "../../components/shared/GlowLoader";

const BookedFlightTravelerDetails = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>()
    const [activeStep, setActiveStep] = useState<number>(1);
    const booked_flight_id = localStorage.getItem("bookedFlightId")
    // const {booked_flight_id} = useParams()
    const { singleSearchData, type } = useSelector((state: RootState) => state.instaFlightSearchSlice)
    const handleStepClick = (step: number) => {
        setActiveStep(step);
    };
    useEffect(() => {
        if (booked_flight_id
            // && 
            // booked_flight_id !==singleSearchData.TPA_Extensions.TagID 
        ) {
            dispatch(InstaFlightSearchByTag({ tagId: booked_flight_id }))
        }
    }, [booked_flight_id,])
    return (
        <>
            <section className="elight-details_bet">

                <div className="container t_top">

                    {/* Progressbar section */}
                    <div className="text-center">
                        <ul className="step_mullit_123">
                            <li className={activeStep >= 1 ? "active" : ""}>
                                <div className="step_m1">
                                    <span className="step_1"><em>1</em></span>
                                    <span className="step_2">Flight & Traveler Details</span>
                                </div>
                            </li>
                            <li className={activeStep >= 2 ? "active" : ""}>
                                <div className="step_m1">
                                    <span className="step_1"><em>2</em></span>
                                    <span className="step_2">Seats</span>
                                </div>
                            </li>
                            <li className={activeStep >= 3 ? "active" : ""}>
                                <div className="step_m1">
                                    <span className="step_1"><em>3</em></span>
                                    <span className="step_2">Review & Book</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="row">

                        <div className="col-md-4 col-lg-9">
                            {type === 'instaFlightSearchSlice/InstaFlightSearchByTag' ? <GlowLoader /> :
                                <>
                                    {activeStep === 1 && singleSearchData.TPA_Extensions.TagID && <FlightDetailsListSection handleStepClick={handleStepClick} data={singleSearchData}/>}
                                    {activeStep === 2 && <SeatsSection handleStepClick={handleStepClick} />}
                                    {activeStep === 3 && <PaymentSection />}
                                </>}


                        </div>

                        {/* PriceDetailsSection */}
                        <PriceDetailsSection data={singleSearchData.AirItineraryPricingInfo}/>
                    </div>
                </div>
            </section>

            {/* Bottom Box */}
            <FlightsBottomBox />
        </>
    );
};

export default BookedFlightTravelerDetails;