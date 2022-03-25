//NPM Packages
import { useLocation } from "react-router-dom";

//Project files
import OrderDetailsHeader from "../components/OrderDetailsHeader"
import DeliveryInformation from "../components/DeliveryInformation";
import ParcelInformation from "../components/ParcelInformation";

export default function OrderDetailsPage() {

  //Properties
  const location = useLocation();
  
  console.log(location.state.orderData);

  const { status, sender, location_name, location_coordinate_latitude, location_coordinate_longitude, parcel_id, verification_required, notes } = location.state.orderData;
  const location_lat = location_coordinate_latitude;
  const location_long = location_coordinate_longitude

  return (
    <div>
    <OrderDetailsHeader status={status}/>
    <section>
    <DeliveryInformation location_name={location_name} location_lat={location_lat} location_long={location_long} /> 
    <ParcelInformation sender={sender} parcel_id={parcel_id} verification_required={verification_required}/>
    {(notes)!=null && <article><h2>Additional Information</h2><p>{notes}</p></article>}
    </section>
    </div>
  )
}
