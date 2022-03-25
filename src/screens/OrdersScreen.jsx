
//Project files
import OrderItem from "../components/OrderItem.jsx";
import NoOrdersScreen from "./NoOrdersScreen.jsx";
import OrdersScreenHeader from "../components/OrdersScreenHeader.jsx";

export default function OrdersScreen({ orders }) {

  // Safeguards
  if (orders.length === 0) return <NoOrdersScreen/>;

  // Properties
  const onGoingOrders = orders.filter(order => order.status !== "delivered" );
  const DeliveredOrders = orders.filter(order => order.status === "delivered" );
  const onGoingOrdersExist = onGoingOrders.length!==0;
  const DeliveredOrdersExist = DeliveredOrders.length!==0;

  // Components
  const OngoingList = onGoingOrders.map((order) => <OrderItem key={order.id} order={order}/>); 
  const DeliveredList = DeliveredOrders.map((order) => <OrderItem key={order.id} order={order}/>); 


  return (
    <div>
      <OrdersScreenHeader/>
      <section>
        <h2>Ongoing orders</h2>
        { onGoingOrdersExist ? <ul>{OngoingList}</ul> : <p>You don't have any ongoing orders</p>}
        </section>
        <section>
        <h1>Delivered orders</h1>
        { DeliveredOrdersExist ? <ul>{DeliveredList}</ul> : <p>You don't have any delivered orders</p>}
        </section>
    </div>
  )
}
