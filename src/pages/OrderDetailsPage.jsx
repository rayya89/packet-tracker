import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function OrderDetailsPage() {

  const location = useLocation();
  const navigate= useNavigate();

  console.log(location.state.data);

  return (
    <button onClick={() => navigate(-1)}>Go Back</button>
  )
}
