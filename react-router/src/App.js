import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopsList from "./components/pages/ShopList";
import PageNotFound from "./components/pages/PageNotFound";
import AddShops from "./components/CRUD/AddShops";

function App() {
  return (
    <Router>
      <div className="App">
        <h3 class="heading">
          <u>
            <b>
              <i>SHOPPING MALL MANAGEMENT SYSTEM</i>
            </b>
          </u>
        </h3>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/shoplist" component={ShopsList}></Route>
          <Route exact path="/add" component={AddShops}></Route>
          <Route
            exact
            path="/shop/edit/${shop_id}"
            component={AddShops}
          ></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
