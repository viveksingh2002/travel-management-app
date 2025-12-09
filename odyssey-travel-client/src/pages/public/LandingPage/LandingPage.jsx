
import "./LandingPage.css";
import Navbar from "../../../components/Navbar/Navbar";
import Destination from "../../../components/Destinations/Destination";
import Itinerary from "../../../components/Itineraries/Itinerary";
import Footer from "../../../components/Footer/Footer";
import Packages from "../Packages/Packages";
// import Login from "../../auth/Login/Login";

function LandingPage() {

  return (
    <>
      <Navbar />

      <Destination />

      <Packages />

      <Itinerary />

      <Footer />
    </>
  );
}

export default LandingPage;
