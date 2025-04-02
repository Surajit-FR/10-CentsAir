import { useEffect, useState } from "react";
// import BaggageInfoSection from "./BaggageInfoSection";
import FareRulesSection from "./FareRulesSection";
// import FlexibleTicketFlightWatcherSection from "./FlexibleTicketFlightWatcherSection";
import ListedFlightSection from "./ListedFlightSection";
import TravelerDetailsSection from "./TravelerDetailsSection";
// import TravelProtectionSection from "./TravelProtectionSection";
import { InstaFlightResultObject } from "../../types/sabreReturnTypes";

interface DetailListProps {
    handleStepClick: Function
    data: InstaFlightResultObject
}
const FlightDetailsListSection = ({ handleStepClick,data }: DetailListProps): JSX.Element => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
const [dataToDispatch, setDataToDispatch] = useState<any>({})
console.log({dataToDispatch})
    return (
        <>
            {/* ListedFlightSection */}
            <ListedFlightSection flightsdata={data} setData={setDataToDispatch}/>

            {/* FareRulesSection */}
            <FareRulesSection />

            {/* BaggageInfoSection */}
            {/* <BaggageInfoSection /> */}

            {/* TravelProtectionSection */}
            {/* <TravelProtectionSection /> */}

            {/* FlexibleTicketFlightWatcherSection */}
            {/* <FlexibleTicketFlightWatcherSection /> */}

            {/* TravelerDetailsSection */}
            <TravelerDetailsSection
                handleStepClick={handleStepClick}
                setData = {setDataToDispatch}
                flightsdata={data}
            />
        </>
    );
};

export default FlightDetailsListSection;