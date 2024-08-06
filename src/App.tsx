import Footer from "./components/common/Footer";
import HeaderTop from "./components/common/HeaderTop";
import AllRoutes from "./routes/AllRoutes";

const App = (): JSX.Element => {
  return (
    <>
      {/* Navber */}
      <HeaderTop />
      {/* All component's route */}
      <AllRoutes />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
