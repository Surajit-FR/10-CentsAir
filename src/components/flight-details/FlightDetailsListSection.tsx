import { useEffect } from "react";
import BaggageInfoSection from "./BaggageInfoSection";
import FareRulesSection from "./FareRulesSection";
import FlexibleTicketFlightWatcherSection from "./FlexibleTicketFlightWatcherSection";
import ListedFlightSection from "./ListedFlightSection";
import TravelerDetailsSection from "./TravelerDetailsSection";
import TravelProtectionSection from "./TravelProtectionSection";

const FlightDetailsListSection = ({ handleStepClick }: { handleStepClick: Function }): JSX.Element => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            {/* ListedFlightSection */}
            <ListedFlightSection />

            {/* FareRulesSection */}
            <FareRulesSection />

            {/* BaggageInfoSection */}
            <BaggageInfoSection />

            {/* TravelProtectionSection */}
            <TravelProtectionSection />

            {/* FlexibleTicketFlightWatcherSection */}
            <FlexibleTicketFlightWatcherSection />

            {/* TravelerDetailsSection */}
            <TravelerDetailsSection
                handleStepClick={handleStepClick}
            />
        </>
    );
};

export default FlightDetailsListSection;