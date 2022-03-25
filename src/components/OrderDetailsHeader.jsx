//NPM Packages
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

//Project files
import deliveryPhoto from "../assests/deliveryPhoto.png";


export default function OrderDetailsHeader({ status }) {

    //Properties
    const navigate= useNavigate();

  return (
    <div>
    <nav>
    <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
    <span>Order details</span>
    </nav>
    <header>
      <img src={deliveryPhoto} alt="a man delivering a parcel"/>
      <h1>{status}</h1>
    </header></div>
  )
}
