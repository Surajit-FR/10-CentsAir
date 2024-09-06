import { Routes, Route } from 'react-router-dom';
import {
    Flights,
    BookedFlightTravelerDetails,
    Home
} from '../pages/AllPages';
import HotelSearchResult from '../pages/others/HotelSearchResult';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/flights-search-result' element={<Flights />} />
                <Route path='/hotels-search-result' element={<HotelSearchResult />} />
                <Route path='/booked-flight-details' element={<BookedFlightTravelerDetails />} />
            </Routes>
        </>
    );
};

export default AllRoutes;