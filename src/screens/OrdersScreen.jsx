import Order from "../components/Order.jsx"

export default function OrdersScreen({ orders }) {

    // Components
  const OrdersList = orders.map((order) => <Order key={order.id} order={order}/>);

  return (
    <div>
        <h1>HI</h1>
      <ul>{OrdersList}</ul>
    </div>
  )
}
