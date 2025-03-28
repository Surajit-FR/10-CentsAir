import { useState } from 'react';
import { Link, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import "@flaticon/flaticon-uicons/css/all/all.css";
import PassengerPicker from '../others/PassengerPicker';
import CloseOnClickOutside from '../../shared/CloseOnClickOutside';
import DestinationPickerWrapper from './DestinationPickerWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/Store';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const FlightTabContent = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>()
    const locationHook = useLocation()
    const searchObjParams = localStorage.getItem("flightParams")
    const searchObj = searchObjParams ? JSON.parse(searchObjParams) : ''
    const { data } = useSelector((state: RootState) => state.instaFlightSearchSlice)
    const [selectedFareType, setSelectedFareType] = useState<string>('Regular');
    const [selectedTripType, setSelectedTripType] = useState<string>('One-way');
    const [showPassengerModal, setShowPassengerModal] = useState(false)
    const [isSourceVisible, setIsSourceVisible] = useState(false)
    const [isDestinationVisible, setIsDestinationVisible] = useState(false)
    const [departureDate, setDepartureDate] = useState<Value>(new Date('2025-04-02'))
    const [passenger, setPassenger] = useState(searchObj.passengercount || {
        Adult: 1,
        Child: 0,
        infant: 0
    })
    console.log(departureDate)
    const navigate: NavigateFunction = useNavigate();
    const [sourceocation, setSourceLocation] = useState(searchObj.sourceLocation  || {
        sourceName: 'Subhas Chandra Bose',
        sourceCode: 'CCU',
        sourceStateName: 'WB',
        sourceStateCity: 'Kolkata',
    })
    const handleSourcePicking = (name: string, code: string, state: string, city: string) => {
        setSourceLocation({
            sourceName: name,
            sourceCode: code,
            sourceStateName: state,
            sourceStateCity: city,
        })
        setIsSourceVisible(false)
        setIsDestinationVisible(false)
    }
    const [destinationLocation, setdestinationLocation] = useState(searchObj.destination || {
        sourceName: 'Indira Gandhi International',
        sourceCode: 'DEL',
        sourceStateName: 'Delhi',
        sourceStateCity: 'Delhi',
    })
    const handleDestinatioPicking = (name: string, code: string, state: string, city: string) => {
        setdestinationLocation({
            sourceName: name,
            sourceCode: code,
            sourceStateName: state,
            sourceStateCity: city,
        })
        setIsSourceVisible(false)
        setIsDestinationVisible(false)
    }

    const fareTypes: Array<string> = [
        'Regular',
        // 'Senior Citizen',
        'Student',
        // 'Armed Forces',
        // 'Doctors & Nurses'
    ];

    const tripTypes: Array<string> = [
        'One-way',
        'Round-trip',
        'Multi-city'
    ];

    const handleFareTypeClick = (fareType: string) => {
        setSelectedFareType(fareType);
    };

    const handleTripTypeClick = (tripType: string) => {
        setSelectedTripType(tripType);
    };
    const onClickSearch = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        localStorage.setItem("flightParams", JSON.stringify({
            sourceLocation: sourceocation,
            destination: destinationLocation,
            departuredate: departureDate,
            passengercount: passenger,
            enabletagging: true
        }))
        if(locationHook.pathname !== "/flights-search-result"){
            navigate('/flights-search-result')
        }
    }
    return (
        <>
            <form>
                <div className="tabs_bg_color">
                    <div className="row">
                        <div className="col-md-7">
                            <ul className="one_way">
                                {tripTypes?.map((tripType) => (
                                    <li
                                        key={tripType}
                                        className={selectedTripType === tripType ? 'active' : ''}
                                        onClick={() => handleTripTypeClick(tripType)}
                                    >
                                        {tripType}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <h5 className="book_1">Book International and Domestic Flights</h5>
                        </div>

                    </div>
                    <ul className="form_and_to">
                        <li className={`same_wdth_1 ${isSourceVisible ? "active" : ''}`}>
                            <div className="from_text_12">
                                <DestinationPickerWrapper
                                    isVisible={isSourceVisible}
                                    setIsVisible={setIsSourceVisible}
                                    locationCode={sourceocation.sourceCode}
                                    locationName={sourceocation.sourceName}
                                    handleLocationPick={handleSourcePicking}
                                    inputPlaceHolder={"From"}
                                />
                            </div>
                        </li>
                        <li className={`same_wdth_1 second_1 ${isDestinationVisible ? "active" : ''}`}>
                            <div className="from_text_12">
                                <DestinationPickerWrapper
                                    isVisible={isDestinationVisible}
                                    setIsVisible={setIsDestinationVisible}
                                    locationCode={destinationLocation.sourceCode}
                                    locationName={destinationLocation.sourceName}
                                    handleLocationPick={handleDestinatioPicking}
                                    inputPlaceHolder={"To"}
                                />
                            </div>
                            {selectedTripType === 'Round-trip' && (
                           <div className="exchanges">
                           <Link to="#">
                               <i className="fa-solid fa-arrow-right-arrow-left"></i>
                           </Link>
                       </div>
                        )}
                            
                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h5 className="de1">Departure <i className="fa-regular fa-angle-down"></i></h5>
                                <h4 className="tr_1">12 <em>Apr'25</em></h4>
                                <p className="satu1">Saturday</p>
                                
                            </div>

                        </li>
                        {selectedTripType === 'Round-trip' && (
                            <li className="same_wdth_2">
                                <div className="from_text">
                                    <h5 className="de1">Return <i className="fa-regular fa-angle-down"></i></h5>
                                    <p className="tap1">Tap to add a <br />return date for bigger<br /> discounts</p>
                                </div>
                            </li>
                        )}


                        <li className={`same_wdth_3 ${showPassengerModal ? "active" : ''}`}>
                            <div
                                className={`from_text ${showPassengerModal ? "pointer_events" : ''} `}
                                onClick={() => setShowPassengerModal(!showPassengerModal)}>
                                <h5 className="de1">Travellers & Class <i className="fa-regular fa-angle-down"></i></h5>
                                <h4 className="tr_1">{passenger.Adult + passenger.Child + passenger.infant} <em>

                                    {(passenger.Adult + passenger.Child + passenger.infant) > 1 ? 'Travellers' : 'Traveller'}
                                </em></h4>
                                <p className="economy">Economy/Premium Economy</p>
                            </div>
                            <CloseOnClickOutside show={showPassengerModal} setShow={setShowPassengerModal}>
                                <PassengerPicker passenger={passenger} setPassenger={setPassenger} showModal={setShowPassengerModal} />
                            </CloseOnClickOutside>
                        </li>

                    </ul>
                    <ul className="fare_type">
                        <li><em>Select A <br /> Fare Type:</em></li>
                        {fareTypes?.map((fareType) => (
                            <li
                                key={fareType}
                                className={selectedFareType === fareType ? 'active' : ''}
                                onClick={() => handleFareTypeClick(fareType)}
                            >
                                <i className="fa-solid fa-circle-check"></i> {fareType}
                            </li>
                        ))}
                    </ul>
                    <div className='custom-cal'>
                                <Calendar onChange={setDepartureDate} value={departureDate} />
                                </div>
                    {/* <ul className="search_return">
                        <li>
                            <input className="input-elevated" type="text" placeholder="Search Preferred Airline" />
                        </li>
                        <li>
                            <div className="form-group">
                                <input type="radio" id="city1" name="city" defaultChecked />
                                <label className="ret1" htmlFor="city1">Return to or from another city/airport?</label>
                            </div>
                        </li>
                        <li>
                            <div className="form-group">
                                <input type="radio" id="flights" name="city" />
                                <label className="ret1" htmlFor="flights">Direct Flights</label>
                            </div>
                        </li>
                    </ul>
                     */}
                </div>
                <div className="text-center mt_top">
                    <input className="search_bt" type="submit" value="Search" onClick={(e) => onClickSearch(e)

                        // navigate('/flights-search-result')

                    }

                    />
                </div>
            </form>
        </>
    );
};

export default FlightTabContent;