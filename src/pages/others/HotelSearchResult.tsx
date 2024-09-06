import { Link } from "react-router-dom";
import BottomInfoBox from "../../components/common/BottomInfoBox";
import HotelSearchRightSection from "../../components/hotel/HotelSearchRightSection";
import HotelSearchLeftSection from "../../components/hotel/HotelSearchLeftSection";

const HotelSearchResult = (): JSX.Element => {
    return (
        <>
            <section className="calgarey_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul className="alberta_menu">
                                <li><Link to="#">Home</Link><i className="fa-solid fa-chevron-right"></i></li>
                                <li><Link to="#">Canada</Link><i className="fa-solid fa-chevron-right"></i></li>
                                <li><Link to="#">Alberta</Link><i className="fa-solid fa-chevron-right"></i></li>
                                <li><Link to="#">Calgary</Link><i className="fa-solid fa-chevron-right"></i></li>
                                <li>Search results</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        {/* HotelSearchLeftSection */}
                        <HotelSearchLeftSection />

                        {/* HotelSearchRightSection */}
                        <HotelSearchRightSection />
                    </div>
                </div>
            </section>

            {/* BottomInfoBox Section */}
            <BottomInfoBox />
        </>
    );
};

export default HotelSearchResult;