import React from 'react';
import { TabData } from "../../../types/common";
import FlightTabContent from "../tabcontent/FlightTabContent";
import FlightHotelTabContent from "../tabcontent/FlightHotelTabContent";
import HotelsTabContent from "../tabcontent/HotelsTabContent";
import RenalCarsTabContent from "../tabcontent/RenalCarsTabContent";
import GroupTravelTabContent from "../tabcontent/GroupTravelTabContent";
import HolidayPackagesTabContent from "../tabcontent/HolidayPackagesTabContent";

const tabData: Array<TabData> = [
    {
        id: "flights",
        icon: "assets/images/tabs/1.png",
        altIcon: "assets/images/tabs/f1.png",
        title: "Flights",
        content: (<FlightTabContent />),
    },
    {
        id: "flights_hotels",
        icon: "assets/images/tabs/2.png",
        altIcon: "assets/images/tabs/f2.png",
        title: "Flight +<em>Hotel</em>",
        content: (<FlightHotelTabContent />),
    },
    {
        id: "hotels",
        icon: "assets/images/tabs/3.png",
        altIcon: "assets/images/tabs/f3.png",
        title: "Hotels",
        content: (<HotelsTabContent />),
    },
    {
        id: "rental_cars",
        icon: "assets/images/tabs/4.png",
        altIcon: "assets/images/tabs/f4.png",
        title: "Rental<em>Cars</em>",
        content: (<RenalCarsTabContent />),
    },
    {
        id: "group_travel",
        icon: "assets/images/tabs/5.png",
        altIcon: "assets/images/tabs/f5.png",
        title: "Group<em>Travel</em>",
        content: (<GroupTravelTabContent />),
    },
    {
        id: "holiday_packages",
        icon: "assets/images/tabs/6.png",
        altIcon: "assets/images/tabs/f6.png",
        title: "Holiday<em>Packages</em>",
        content: (<HolidayPackagesTabContent />),
    },
];

type BannerTabProps = {
    activeTab: string,
    onTabClick: (tabId: string) => void,
}

const BannerTab = ({ activeTab, onTabClick }: BannerTabProps): JSX.Element => {
    return (
        <>
            <div className="banner_tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="tabs">
                                {tabData?.map(({ id, icon, altIcon, title }) => (
                                    <li
                                        key={id}
                                        className={`tab-link ${activeTab === id ? "current" : ""}`}
                                        data-tab={id}
                                        onClick={() => onTabClick(id)}
                                    >
                                        <span className="tans_img">
                                            <img src={activeTab === id ? altIcon : icon} alt={title.replace(/<[^>]*>?/gm, "")} />
                                        </span>
                                        <span className="flig_text" dangerouslySetInnerHTML={{ __html: title }} />
                                    </li>
                                ))}
                            </ul>
                            {tabData?.map(({ id, content }) => (
                                <div
                                    key={id}
                                    id={id}
                                    className={`tab-content ${activeTab === id ? "current" : ""}`}
                                >
                                    {content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerTab;