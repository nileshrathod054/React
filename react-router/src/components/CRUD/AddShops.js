import ShopService from "../../services/ShopService";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const AddShops = () => {
  const [shop_id, setShop_id] = useState([]);
  const [shop_category, setShop_category] = useState([]);
  const [shop_name, setShop_name] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [shop_status, setShop_status] = useState([]);
  const [shop_owner, setShop_owner] = useState([]);
  const [lease_status, setLease_status] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const saveShops = (e) => {
    e.preventdefault();

    const shop = {
      shop_id,
      shop_category,
      shop_name,
      customers,
      shop_status,
      shop_owner,
      lease_status,
    };
    if (id) {
      //Update the records
      ShopService.update(shop)
        .then((response) => {
          console.log("Shop data updated successfully", response.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
          
        });
    } else {
      //Create new Record
      ShopService.create(shop)
        .then((response) => {
          console.log("Shop data added successfully", response.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    }
  };
  useEffect(() => {
    if (id) {
      ShopService.get(id)
        .then((shop) => {
          setShop_id(shop.data.shop_id);
          setShop_category(shop.data.shop_category);
          setShop_name(shop.data.shop_name);
          setCustomers(shop.data.customers);
          setShop_status(shop.data.shop_status);
          setShop_owner(shop.data.shop_owner);
          setLease_status(shop.data.lease_status);
        })
        .catch((error) => {
          console.log("Something went wrong!", error);

        });
    }
  }, []);
  return (
    <div className="container">
      <h3>Add New Shop</h3>
      <hr />
      <form>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control col-4"
            id="shop_id"
            value={shop_id}
            onChange={(e) => setShop_id(e.target.value)}
            placeholder="Enter Id"
          />
        </div>
        <p />
        <div className="form-groupmb-2">
          <input
            type="text"
            className="form-control col-4"
            id="shop_category"
            value={shop_category}
            onChange={(e) => setShop_category(e.target.value)}
            placeholder="Enter Shop Category"
          />
        </div>
        <p />
        <div className="form-groupmb-2">
          <input
            type="text"
            className="form-control col-4"
            id="shop_name"
            value={shop_name}
            onChange={(e) => setShop_name(e.target.value)}
            placeholder="Enter Shop Name"
          />
        </div>
        <p />
        <div className="form-groupmb-2">
          <input
            type="text"
            className="form-control col-4"
            id="customers"
            value={customers}
            onChange={(e) => setCustomers(e.target.value)}
            placeholder="Enter Customers Name"
          />
        </div>
        <p />
        <div className="form-groupmb-2">
          <input
            type="text"
            className="form-control col-4"
            id="shop_status"
            value={shop_status}
            onChange={(e) => setShop_status(e.target.value)}
            placeholder="Enter Shop Status"
          />
        </div>
        <p />
        <div className="form-groupmb-2">
          <input
            type="text"
            className="form-control col-4"
            id="shop_owner"
            value={shop_owner}
            onChange={(e) => setShop_owner(e.target.value)}
            placeholder="Enter Shop Owners Name"
          />
        </div>
        <p />
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control col-4"
            id="lease_status"
            value={lease_status}
            onChange={(e) => setLease_status(e.target.value)}
            placeholder="Enter Lease Status"
          />
        </div>
        <p />
        <div>
          <button className="btn btn-primary" onClick={(e) => saveShops(e)}>
            Save
          </button>
        </div>
      </form>
      <p />
      <Link to="/shoplist"> Back to List</Link>
    </div>
  );
};
export default AddShops;
