import { Link } from "react-router-dom";
import SelectSeatSection from "./SelectSeatSection";
import AircraftSeats from "./AircraftSeats";
import ViewSelectedSeats from "./ViewSelectedSeats";
import MealsBaggageSection from "./MealsBaggageSection";
import { useRef, useState } from "react";
import { FlightDataTwo } from "../../types/common";

const flightData: Array<FlightDataTwo> = [
    { id: "1", isActive: true, flightNumber: "Flight 184", route: "DAC - BOM", imgSrc: "assets/images/show/1.png" },
    { id: "2", isActive: false, flightNumber: "Flight 184", route: "BOM - LHR", imgSrc: "assets/images/show/2.png" },
    { id: "3", isActive: false, flightNumber: "Flight 184", route: "LHR - YYC", imgSrc: "assets/images/show/3.png" },
    { id: "4", isActive: false, flightNumber: "Flight 184", route: "YYC - LHR", imgSrc: "assets/images/show/4.png" },
    { id: "5", isActive: false, flightNumber: "Flight 184", route: "LHR - BOM", imgSrc: "assets/images/show/5.png" },
    { id: "6", isActive: false, flightNumber: "Flight 184", route: "BOM - DAC", imgSrc: "assets/images/show/6.png" },
];

const SeatsSection = (): JSX.Element => {
    const carouselRef = useRef<any>(null);
    const [showSeats, setShowSeats] = useState<boolean>(true);
    const [isCheckinOpens, setIsCheckinOpens] = useState<boolean>(true);

    // this state also will be changed as per the further logic of seat selection changed.
    const [selectSeat, setSelectSeat] = useState<boolean>(false);
    // active flight Id in the carousel
    const [activeId, setActiveId] = useState<string>("1");

    // handleSeatsVisibility function
    const handleSeatsVisibility = () => {
        setShowSeats(!showSeats);
    }

    // handleNextSeatSelection function
    const handleNextSeatSelection = () => {
        const currentIndex = flightData.findIndex(flight => flight.id === activeId);
        const nextIndex = (currentIndex + 1) % flightData.length;
        setActiveId(flightData[nextIndex].id);

        // This needs to be removed because it will be controlled by original status from api
        setIsCheckinOpens(!isCheckinOpens);
        scrollToActiveItem();
    };

    // scrollToActiveItem function
    const scrollToActiveItem = () => {
        if (carouselRef.current) {
            // Find the index of the active item
            const index = flightData.findIndex(flight => flight.id === activeId);
            if (index !== -1) {
                carouselRef.current.to(index);
            }
        }
    };

    // handleSelectSeats function
    const handleSelectSeats = () => {
        setSelectSeat(true);
    };

    return (
        <>
            {/* SelectSeatSection */}
            <SelectSeatSection
                activeId={activeId}
                flightData={flightData}
                handleSeatsVisibility={handleSeatsVisibility}
                showSeats={showSeats}
                isCheckinOpens={isCheckinOpens}
                handleNextSeatSelection={handleNextSeatSelection}
                carouselRef={carouselRef}
                selectSeat={selectSeat}
            />

            {
                !selectSeat ?
                    <>
                        {/* AircraftSeats */}
                        {isCheckinOpens && showSeats && <AircraftSeats handleSelectSeats={handleSelectSeats} />}

                        {/* ViewSelectedSeats */}
                        {isCheckinOpens && <ViewSelectedSeats handleNextSeatSelection={handleNextSeatSelection} />}

                        {/* Skip Seat Selection */}
                        <div className="text-center">
                            <Link className="seat_selection_12" to="#">Skip Seat Selection <i
                                className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="text-center">
                            <Link className="pay_a" to="#">Continue To Payment</Link>
                        </div >
                    </>
            }


            {/* MealsBaggageSection */}
            <MealsBaggageSection />
        </>
    );
};

export default SeatsSection;