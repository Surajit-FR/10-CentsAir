import React from "react";
import { Location, useLocation } from "react-router-dom";
import LandingPageFooter from "./components/common/LandingPageFooter";
import HeaderTop from "./components/common/HeaderTop";
import AllRoutes from "./routes/AllRoutes";
import CommonFooter from "./components/common/CommonFooter";
import CommonHeaderTop from "./components/common/CommonHeaderTop";
import SpeakTravelExpertModal from "./components/SpeakTravelExpertModal";
import HeaderTopWithSubNav from "./components/common/HeaderTopWithSubNav";

const App: React.FC = (): JSX.Element => {
  const location: Location = useLocation();

  // Function to determine which header to render based on the pathname
  const renderHeader = (): JSX.Element => {
    if (location.pathname === "/") {
      return <HeaderTop />;
    } else if (location.pathname.startsWith("/hotels-search-result")) {
      return <HeaderTopWithSubNav />
    }
    return <CommonHeaderTop />;
  };

  // Function to determine which footer to render based on the pathname
  const renderFooter = (): JSX.Element => {
    if (location.pathname === "/") {
      return <LandingPageFooter />;
    }
    return <CommonFooter />;
  };

  return (
    <>
      {/* Conditional Header */}
      {renderHeader()}
      {/* All component's route */}
      <AllRoutes />
      {/* Conditional Footer */}
      {renderFooter()}

      {/* SpeakTravelExpertModal */}
      <SpeakTravelExpertModal />
    </>
  );
};

export default App;