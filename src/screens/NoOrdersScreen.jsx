import NoOrders from "../assests/NoOrders.png"

export default function NoOrdersScreen() {
  return (
    <div className="no-order-screen">
        <img src={NoOrders} alt="empty List"/>
        <h1>You don't have any orders to show..</h1>
    </div>
  )
}
