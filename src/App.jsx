//NPM Packages
import {useEffect, useState} from "react"

//Project files
import Order from "./components/Order.jsx"

export default function App() {

  //Local state
  const [orders, setOrders] = useState([]);

  //Properties
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //Methods
  useEffect (() => loadData(url,setOrders),[]);

  async function loadData(url,setState) {
    const response = await fetch(url);
    const json= await response.json();
    setState(json);
    console.log(json);
  }

  // Components
  const OrdersList = orders.map((order) => <Order key={order.id} order={order}/>); 

  return (
    <div className="App">
      <h1>HI</h1>
      <ul>{OrdersList}</ul>
    </div>
  );
}
