import FlightsBottomBox from "../../components/flight/FlightsBottomBox";
import PriceDetailsSection from "../../components/flight-details/PriceDetailsSection";
import FlightDetailsListSection from "../../components/flight-details/FlightDetailsListSection";
import SeatsSection from "../../components/seats/SeatsSection";
import { useState } from "react";

const FlightTravelerDetails = (): JSX.Element => {
    const [activeStep, setActiveStep] = useState<number>(1);

    const handleStepClick = (step: number) => {
        setActiveStep(step);
    };

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
                            {activeStep === 1 &&
                                <FlightDetailsListSection
                                    handleStepClick={handleStepClick}
                                />}
                            {activeStep === 2 && <SeatsSection />}
                        </div>

                        {/* PriceDetailsSection */}
                        <PriceDetailsSection />
                    </div>
                </div>
            </section>

            {/* Bottom Box */}
            <FlightsBottomBox />
        </>
    );
};

export default FlightTravelerDetails;