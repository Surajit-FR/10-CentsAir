import { Routes, Route } from 'react-router-dom';
import {
    Flights,
    FlightTravelerDetails,
    Home
} from '../pages/AllPages';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/flights' element={<Flights />} />
                <Route path='/flight-details' element={<FlightTravelerDetails />} />
            </Routes>
        </>
    );
};

export default AllRoutes;