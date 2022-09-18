import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopService from "../../services/ShopService";
import { Link } from "react-router-dom";

const ShopsList = () => {
  const [Shop, setShop] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    ShopService.getAll()
      .then((response) => {
        console.log("Print Data", response.data);
        setShop(response.data);
      })
      .catch((error) => {
        console.log("something went wrong!", error);
      });
  };

  const handleDelete =id=> {
    ShopService.remove(id)
      .then((response) => {
        console.log("shop id deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };
  return (
    <div className="container">
      <h3>List Of Shops </h3>
      <hr></hr>
      <div>
        <Link to="/add" className="btn btn-primary" mb-2>
          Add Shops
        </Link>
        <table
          border="1"
          cellPadding="10"
          className="table table-bordered table-striped"
        >
          <thead className="thead-dark">
            <tr>
              <th>Shop Id</th>
              <th> Category</th>
              <th>Shop Name</th>
              <th>Customers</th>
              <th>Shop Status </th>
              <th> Shop Owner</th>
              <th>Lease Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Shop.map((shop) => (
              <tr key={shop.shop_id}>
                <td> {shop.shop_id}</td>
                <td> {shop.shop_category}</td>
                <td> {shop.shop_name}</td>
                <td> {shop.customers}</td>
                <td>{shop.shop_status}</td>
                <td>{shop.shop_owner}</td>
                <td>{shop.lease_status}</td>
                <td>
                  <Link
                    className="btn btn-info ml-2"
                    to={"/shop/edit/${shop.id}"}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={(e) => {
                      handleDelete(shop.shop_id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShopsList;
