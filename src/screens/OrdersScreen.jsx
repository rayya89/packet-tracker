import Order from "../components/Order.jsx"

export default function OrdersScreen({ orders }) {

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
           const key = obj[property];
           if (!acc[key]) {
              acc[key] = [];
           }
           // Add object to list for given key's value
           acc[key].push(obj);
           return acc;
        }, {});
     }

     const delivery_status = groupBy (orders, 'status');
     console.log(delivery_status.delivered)

    // Components
//   const OrdersList = orders.map((order) => <Order key={order.id} order={order}/>);

const DeliveredList = delivery_status.delivered.map((order) => <Order key={order.id} order={order}/>);
const OnTheWayList = delivery_status["on-the-way"].map((order) => <Order key={order.id} order={order}/>);
const OrderRecievedList = delivery_status["order-info-received"].map((order) => <Order key={order.id} order={order}/>);
const ReadyList = delivery_status["ready-for-pickup"].map((order) => <Order key={order.id} order={order}/>);


  return (
    <div>
        <h1>HI</h1>
      <ul>{DeliveredList}</ul>
      <ul>{OnTheWayList}</ul>
      <ul>{OrderRecievedList}</ul>
      <ul>{ReadyList}</ul>
    </div>
  )
}
