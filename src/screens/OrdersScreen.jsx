//Project files
import OrderItem from "../components/OrderItem.jsx";
import NoOrdersScreen from "./NoOrdersScreen.jsx";
import OrdersScreenHeader from "../components/OrdersScreenHeader.jsx";

export default function OrdersScreen({ orders }) {
  // Safeguards
  if (orders.length === 0) return <NoOrdersScreen />;
  localStorage.setItem("orders", JSON.stringify(orders));

  // Properties
  const onGoingOrders = orders.filter((order) => order.status !== "delivered");
  const DeliveredOrders = orders.filter(
    (order) => order.status === "delivered"
  );
  const onGoingOrdersExist = onGoingOrders.length !== 0;
  const DeliveredOrdersExist = DeliveredOrders.length !== 0;

  // Components
  const OngoingList = onGoingOrders.map((order) => (
    <OrderItem key={order.id} order={order} />
  ));
  const DeliveredList = DeliveredOrders.map((order) => (
    <OrderItem key={order.id} order={order} />
  ));

  return (
    <div className="orders-screen">
      <OrdersScreenHeader />
      <section className="orders-section">
        <h2>Ongoing orders</h2>
        {onGoingOrdersExist ? (
          <div className="grid">{OngoingList}</div>
        ) : (
          <p>You don't have any ongoing orders</p>
        )}
      </section>
      <section className="orders-section">
        <h2>Delivered orders</h2>
        {DeliveredOrdersExist ? (
          <div className="grid">{DeliveredList}</div>
        ) : (
          <p>You don't have any delivered orders</p>
        )}
      </section>
    </div>
  );
}
