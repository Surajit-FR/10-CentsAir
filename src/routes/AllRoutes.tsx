import { Routes, Route } from 'react-router-dom';
import Home from '../pages/others/Home';
import Flights from '../pages/others/Flights';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/flights' element={<Flights />} />
            </Routes>
        </>
    );
};

export default AllRoutes;