import ErrorScreen from "../screens/ErrorScreen";

export default function Order({ order }) {
const { sender, status } = order;

  return (
    <li className="order">
        <button onClick={() => <ErrorScreen/>}>
        <p>{sender}</p>
        <p>{status}</p> 
        </button>
    </li>
  )
}
