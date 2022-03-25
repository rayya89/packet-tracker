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
  
  console.log(location.state.orderData);

  const { eta, status, sender, location_name, location_coordinate_latitude, location_coordinate_longitude, parcel_id, verification_required, notes, last_updated } = location.state.orderData;
  const location_lat = location_coordinate_latitude;
  const location_long = location_coordinate_longitude

  return (
    <div>
    <OrderDetailsHeader status={status}/>
    <section>
    <DeliveryInformation eta={eta} location_name={location_name} location_lat={location_lat} location_long={location_long} /> 
    <ParcelInformation sender={sender} parcel_id={parcel_id} verification_required={verification_required}/>
    {(notes)!=null && <article><h2>Additional Information</h2><p>{notes}</p></article>}
    <AppData last_updated={last_updated} />
    </section>
    </div>
  )
}
