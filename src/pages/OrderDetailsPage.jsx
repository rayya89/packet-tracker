//NPM Packages
import { useLocation } from "react-router-dom";

//Project files
import OrderDetailsHeader from "../components/OrderDetailsHeader"
import DeliveryInformation from "../components/DeliveryInformation";
import ParcelInformation from "../components/ParcelInformation";
import AppData from "../components/AppData";

export default function OrderDetailsPage() {

  //Properties
  const location = useLocation();
  const { eta, status, sender, location_name, location_coordinate_latitude, location_coordinate_longitude, parcel_id, verification_required, notes, last_updated } = location.state.orderData;
  const locationCoordinates = [location_coordinate_latitude,location_coordinate_longitude];
  const deliveryTime=eta;

  return (
    <div className="details-page">
    <OrderDetailsHeader status={status}/>
    <section className="details-information">
    <DeliveryInformation deliveryTime={deliveryTime} location_name={location_name} locationCoordinates={locationCoordinates} /> 
    <ParcelInformation sender={sender} parcel_id={parcel_id} verification_required={verification_required}/>
    {(notes)!=null && <article className="details-article"><h2>Additional Information</h2><p>{notes}</p></article>}
    <AppData last_updated={last_updated} />
    </section>
    </div>
  )
}
