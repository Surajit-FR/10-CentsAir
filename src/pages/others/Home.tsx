import AgentSupport from "../../components/core/home/AgentSupport";
import BannerTab from "../../components/core/home/BannerTab";
import BookNowSection from "../../components/core/home/BookNowSection";
import DownloadAppSection from "../../components/core/home/DownloadAppSection";
import ExploreDeals from "../../components/core/home/ExploreDeals";
import FoundSection from "../../components/core/home/FoundSection";
import CarouselSection from "../../components/core/home/HandpickedSection";
import HereSection from "../../components/core/home/HereSection";
import CheckFlightStatusSection from "../../components/core/home/CheckFlightStatusSection";
import { CarouselItem } from "../../types/common";
import CheckBoxSection from "../../components/core/home/CheckBoxSection";
import EarnBoxSection from "../../components/core/home/EarnBoxSection";
import SinupBoxSection from "../../components/core/home/SinupBoxSection";

const handpickedData: Array<CarouselItem> = [
    {
        imageUrl: "assets/images/hand/1.png",
        rank: "Top 8",
        title: "Stays in & Around Maldives for a Week-Long Retreat"
    },
    {
        imageUrl: "assets/images/hand/2.png",
        rank: "Top 8",
        title: "Stays in & Around Bali for a Week-Long Retreat"
    },
    {
        imageUrl: "assets/images/hand/3.png",
        rank: "Top 10",
        title: "Beach Getaways"
    },
    {
        imageUrl: "assets/images/hand/4.png",
        rank: "Top 10",
        title: "Hill-station Getaways"
    },
    {
        imageUrl: "assets/images/hand/5.png",
        rank: "Top 12",
        title: "Weekend Getaways"
    }
];

const internationalData: Array<CarouselItem> = [
    {
        imageUrl: "assets/images/hand/h2.png",
        destination: "Greece",
        price: "Starting at $1500 per person"
    },
    {
        imageUrl: "assets/images/hand/h3.png",
        destination: "Japan",
        price: "Starting at $1000 per person"
    },
    {
        imageUrl: "assets/images/hand/h4.png",
        destination: "India",
        price: "Starting at $1000 per person"
    },
    {
        imageUrl: "assets/images/hand/h5.png",
        destination: "Thailand",
        price: "Starting at $1000 per person"
    },
    {
        imageUrl: "assets/images/hand/h1.png",
        destination: "Turkey",
        price: "Starting at $500 per person"
    }
];

const Home = (): JSX.Element => {
    return (
        <>
            {/* banner_tabs */}
            <BannerTab />
            {/* agent_support */}
            <AgentSupport />
            {/* here_section */}
            <HereSection />
            {/* found_section */}
            <FoundSection />
            {/* handpicked_section */}
            <CarouselSection data={handpickedData} dataType="Handpicked" />
            <CarouselSection data={internationalData} dataType="International" />
            {/* booknow_section */}
            <BookNowSection />
            {/* download_app_section */}
            <DownloadAppSection />
            {/* explore_deals */}
            <ExploreDeals />
            {/* check_flight_status_section */}
            <CheckFlightStatusSection />
            {/* check_boxt_section */}
            <CheckBoxSection />
            {/* earn_box_section */}
            <EarnBoxSection />
            {/* sinup_box_section */}
            <SinupBoxSection />
        </>
    );
};

export default Home;