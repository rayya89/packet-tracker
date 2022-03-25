//Project files
import ErrorImage from "../assests/Error.png"


export default function ErrorScreen({ setStatus, orders } ) {

  //Properties
  const ordersBackup = JSON.parse(localStorage.getItem("orders"));

  //Methods
  const handleClick = () => {
    setStatus(1);
    orders = ordersBackup;
}

  return (
    <div>
      <img src={ErrorImage} alt="404 error"/>
      <p>An error occured while loading data.. Please try to refresh the page or try again in awhile..</p>
      <p>A backup local stored session is available for loading until the server is up again.. </p>
      <button onClick={handleClick}>Use Backup Data</button>
      </div>
  )
}
