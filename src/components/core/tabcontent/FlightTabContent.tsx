import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/Store';
import { SabreSerchGeoLocation } from '../../../store/reducers/SabreSearchReducers';

const FlightTabContent = (): JSX.Element => {
    const [selectedFareType, setSelectedFareType] = useState<string>('Regular');
    const [selectedTripType, setSelectedTripType] = useState<string>('One-way');
    const [searchQuery, setsearchQuery] = useState<string>('');
    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const {data}= useSelector((state: RootState)=> state.sabreGeolocationSlice)

    const fareTypes: Array<string> = [
        'Regular',
        'Senior Citizen',
        'Student',
        'Armed Forces',
        'Doctors & Nurses'
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
    let timer: any=0

function debounce(val: string) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    // setsearchQuery(val)
    dispatch(SabreSerchGeoLocation({ query: val, }))
  }, 1000)
}
useEffect(()=>{
    if(searchQuery.length>3){
        dispatch(SabreSerchGeoLocation({ query: searchQuery, }));
        // debounce(searchQuery)    
    }
},[searchQuery])
console.log({data})
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
                        <input type="text" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
                        <div>{data && data.doclist && data.doclist.docs && data.doclist.docs.length>0 && data.doclist.docs.map((airPorts:any)=>(
                            <div key={airPorts.id}>
                                {airPorts.name}, <span>{airPorts.iataCityCode}</span>
                            </div>
                        )
                        )}</div>
                    </div>
                    <ul className="form_and_to">
                        <li className="same_wdth_1">
                            <div className="from_text">
                                <h5>From</h5>
                                <h4>DAC</h4>
                                <p>Dhaka <span className="b1">Bangladesh</span></p>
                            </div>
                        </li>
                        <li className="same_wdth_1 second_1">
                            <div className="from_text">
                                <h5>To</h5>
                                <h4>Destination</h4>
                                <p>Dhaka <span className="b1">Bangladesh</span></p>
                            </div>
                            <div className="exchanges">
                                <Link to="#">
                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                </Link>
                            </div>
                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h5 className="de1">Departure <i className="fa-regular fa-angle-down"></i></h5>
                                <h4 className="tr_1">21 <em>Dec'23</em></h4>
                                <p className="satu1">Saturday</p>
                            </div>

                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h5 className="de1">Return <i className="fa-regular fa-angle-down"></i></h5>
                                <p className="tap1">Tap to add a <br />return date for bigger<br /> discounts</p>
                            </div>
                        </li>
                        <li className="same_wdth_3">
                            <div className="from_text">
                                <h5 className="de1">Travellers & Class <i className="fa-regular fa-angle-down"></i></h5>
                                <h4 className="tr_1">1 <em>Traveller</em></h4>
                                <p className="economy">Economy/Premium Economy</p>
                            </div>
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
                    <ul className="search_return">
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
                </div>
                <div className="text-center mt_top">
                    <input className="search_bt" type="submit" value="Search" onClick={() => navigate('/flights-search-result')} />
                </div>
            </form>
        </>
    );
};

export default FlightTabContent;