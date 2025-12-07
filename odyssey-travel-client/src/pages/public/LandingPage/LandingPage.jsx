
import "./LandingPage.css";
import Navbar from "../../../components/Navbar/Navbar";
import Destination from "../../../components/Destinations/Destination";
import Itinerary from "../../../components/Itineraries/Itinerary";
import Footer from "../../../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <div className="h-[50px]">
        <Navbar />
      </div>
      <Destination />

      <Itinerary />

      <Footer />
    </>
  );
}

export default LandingPage;
