import FlightsBottomBox from "../../components/flight/FlightsBottomBox";
import PriceDetailsSection from "../../components/flight-details/PriceDetailsSection";
import FlightDetailsListSection from "../../components/flight-details/FlightDetailsListSection";
import FareRulesSection from "../../components/flight-details/FareRulesSection";
import BaggageInfoSection from "../../components/flight-details/BaggageInfoSection";
import TravelProtectionSection from "../../components/flight-details/TravelProtectionSection";
import FlexibleTicketFlightWatcherSection from "../../components/flight-details/FlexibleTicketFlightWatcherSection";
import TravelerDetailsSection from "../../components/flight-details/TravelerDetailsSection";

const FlightTravelerDetails = (): JSX.Element => {
    return (
        <>
            <section className="elight-details_bet">
                <div className="container t_top">
                    <div className="row">
                        
                        <div className="col-md-4 col-lg-9">
                            {/* FlightDetailsListSection */}
                            <FlightDetailsListSection />

                            {/* FareRulesSection */}
                            <FareRulesSection />

                            {/* BaggageInfoSection */}
                            <BaggageInfoSection />

                            {/* TravelProtectionSection */}
                            <TravelProtectionSection />

                            {/* FlexibleTicketFlightWatcherSection */}
                            <FlexibleTicketFlightWatcherSection />

                            {/* TravelerDetailsSection */}
                            <TravelerDetailsSection />
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