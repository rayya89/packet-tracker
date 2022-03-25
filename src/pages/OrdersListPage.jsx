//NPM Packages
import {useEffect, useState} from "react"

//Project files
import OrdersScreen from "../screens/OrdersScreen";
import LoadingScreen from "../screens/LoadingScreen";
import ErrorScreen from "../screens/ErrorScreen";

export default function OrdersListPage() {

    //Local state
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0);

  //Properties
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //Methods
  useEffect (() => loadData(url,setOrders,setStatus),[]);


  async function loadData(url,setState,setStatus) {
    try{
    const response = await fetch(url);
    const json= await response.json();
    setState(json);
    // Safeguards
    if (json.length === 0) return <p>No orders to show...</p>;
    setStatus(1);
    console.log(json);}
    catch(error){
      console.error("Loading error",error);
      setStatus(2);
    }
  }


  return (
    <div><div className="App">
      {status === 0 && <LoadingScreen/>}
      {status === 1 && <OrdersScreen orders={orders}/>}
      {status === 2 && <ErrorScreen/>}
    </div></div>
  )
}
