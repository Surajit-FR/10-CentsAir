import { Routes, Route } from 'react-router-dom';
import {
    Flights,
    BookedFlightTravelerDetails,
    Home
} from '../pages/AllPages';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/flights' element={<Flights />} />
                <Route path='/booked-flight-details' element={<BookedFlightTravelerDetails />} />
            </Routes>
        </>
    );
};

export default AllRoutes;