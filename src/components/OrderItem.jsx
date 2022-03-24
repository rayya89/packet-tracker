import {Link} from 'react-router-dom'

export default function OrderItem({ order }) {
const { sender, status, parcel_id } = order;

//Properties

  return (
    <li className="order">
        <Link to={`/parcel/${parcel_id}`} state={{data: order}}>
        <p>{sender}</p>
        <p>{status}</p> 
        </Link>
    </li>
  )
}
