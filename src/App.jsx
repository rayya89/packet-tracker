//NPM Packages
import { Routes, Route } from "react-router-dom";

//Project files
import OrdersListPage from "./pages/OrdersListPage"
import OrderDetailsPage from "./pages/OrderDetailsPage";
import "./styles/styles.css";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OrdersListPage/>} />
        <Route path="parcel/:parcel_id" element={<OrderDetailsPage/>} />
      </Routes>
    </div>
  );
}
