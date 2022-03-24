//NPM Packages
import { Routes, Route } from "react-router-dom";

//Project files
import OrdersListPage from "./pages/OrdersListPage"

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OrdersListPage/>} />
      </Routes>
    </div>
  );
}
