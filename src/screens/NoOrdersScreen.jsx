import NoOrders from "../assests/NoOrders.png"

export default function NoOrdersScreen() {
  return (
    <div>
        <img src={NoOrders} alt="empty List"/>
        <p>
         You don't have any orders to show
        </p>
    </div>
  )
}
