//NPM Packages
import {Link} from 'react-router-dom'

//Project files
import parcelIcon from "../assests/parcelPhoto.png"

export default function OrderItem({ order }) {
const { sender, status, parcel_id } = order;

//Properties

  return (
    <li className="order">
       <img src={parcelIcon} alt="parcel icon"/>
        <Link to={`/parcel/${parcel_id}`} state={{orderData: order}}>
        <p>{sender}</p>
        <p>{status}</p> 
        </Link>
    </li>
  )
}
