import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import deliveryPhoto from "../assests/deliveryPhoto.png";


export default function OrderDetailsPage() {

  const location = useLocation();
  const navigate= useNavigate();

  console.log(location.state.orderData);

  const { status, sender, location_name, location_coordinate_latitude, location_coordinate_longitude, parcel_id, verification_required, notes } = location.state.orderData;
  console.log(sender);

  return (
    <div>
    <nav>
    <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
    <span>Order details</span>
    </nav>
    <header>
      <img src={deliveryPhoto} alt="a man delivering a parcel"/>
      <h1>{status}</h1>
    </header>


    <section>

      <article>
      <h2>Delivery information</h2>
      <h3>Delivery address</h3>
        <p>
          {location_name}
        </p>
        <a href={`https://maps.google.com/?q=${location_coordinate_latitude},${location_coordinate_longitude}`}>Delivery address</a>
    </article>

    <article>
      <h2>Parcel information</h2>
      <ul>
      <li><h3>From</h3><p>{sender}</p></li>
      <li><h3>Parcel ID</h3><p>{parcel_id}</p></li>
      <li><h3>Identity verification</h3><p>{verification_required ? "No identity verfication is required to collect this parcel" : "You need an identity verification to collect this parcel"}</p></li>
      </ul>
      </article>

    {(notes)!=null && <article><h2>Additional Information</h2><p>{location.state.orderData.notes}</p></article>}

    </section>
    </div>
  )
}
