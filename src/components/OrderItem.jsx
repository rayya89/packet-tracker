//NPM Packages
import {Link} from 'react-router-dom'

//Project files
import parcelIcon from "../assests/parcelPhoto.png"

export default function OrderItem({ order }) {
const { sender, status, parcel_id } = order;

//Properties

  return (
    <Link className="item-link" to={`/parcel/${parcel_id}`} state={{orderData: order}}>
      <li className="order-item">
       <img src={parcelIcon} alt="parcel icon"/>
       <article className='item-text'>
        <p className="sender-name">{sender}</p>
        <span className="parcel-status">{status}</span> 
        </article>
      </li>
    </Link>
  )
}
