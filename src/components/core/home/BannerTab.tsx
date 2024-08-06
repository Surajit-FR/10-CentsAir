import { useState } from "react";
import FlightTabContent from "./FlightTabContent";
import { TabData } from "../../../types/common";

const tabData: Array<TabData> = [
    {
        id: "tab-1",
        icon: "assets/images/tabs/1.png",
        title: "Flights",
        content: (<FlightTabContent />),
    },
    {
        id: "tab-2",
        icon: "assets/images/tabs/2.png",
        title: "Flight +<em>Hotel</em>",
        content: <div className="tabs_bg_color">Lorem ipsum dolor sit</div>,
    },
    {
        id: "tab-3",
        icon: "assets/images/tabs/3.png",
        title: "Hotels",
        content: <div className="tabs_bg_color">Lorem ipsum dolor sit</div>,
    },
    {
        id: "tab-4",
        icon: "assets/images/tabs/4.png",
        title: "Rental<em>Cars</em>",
        content: <div className="tabs_bg_color">Lorem ipsum dolor sit</div>,
    },
    {
        id: "tab-5",
        icon: "assets/images/tabs/5.png",
        title: "Group<em>Travel</em>",
        content: <div className="tabs_bg_color">Lorem ipsum dolor sit</div>,
    },
    {
        id: "tab-6",
        icon: "assets/images/tabs/6.png",
        title: "Holiday<em>Packages</em>",
        content: <div className="tabs_bg_color">Lorem ipsum dolor sit</div>,
    },
];

const BannerTab = (): JSX.Element => {
    // State to track the currently active tab
    const [activeTab, setActiveTab] = useState("tab-1");

    // Function to handle tab clicks
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <div className="banner_tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="tabs">
                                {tabData?.map(({ id, icon, title }) => (
                                    <li
                                        key={id}
                                        className={`tab-link ${activeTab === id ? "current" : ""}`}
                                        data-tab={id}
                                        onClick={() => handleTabClick(id)}
                                    >
                                        <span className="tans_img"><img src={icon} alt="" /></span>
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