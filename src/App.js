import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { Link, Route, Routes } from "react-router-dom";
import OrdersReview from "./Components/OrdersReview/OrdersReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/home" element={<Home></Home>}>
          Home
        </Route>
        <Route
          path="/orderreview"
          element={<OrdersReview></OrdersReview>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
