import React, { useState, useEffect } from "react";
import { deleteseller, findallseller } from "../Service/SellerService";
import { Link, useNavigate } from "react-router-dom";

const ListSellerComponent = () => {
  const [estate_seller, setEstate_Seller] = useState([]);
  const navigate = useNavigate();

  const deleteSeller = (sellerId) => {
    deleteseller(sellerId).then(() => {
      setEstate_Seller(estate_seller.filter((seller) => seller.sellerId !== sellerId));
    });
  };

  const viewseller = (sellerId) => {
    // Assuming you have a route for viewing a single seller
    navigate(`/view-seller/${sellerId}`);
  };

  const editseller = (sellerId) => {
    navigate(`/add-seller/${sellerId}`);
  };

  useEffect(() => {
    findallseller().then((res) => {
      setEstate_Seller(res.data);
    });
  }, []);

  const addestate_seller = () => {
    navigate("/insert");
  };

  return (
    <div>
      <h2 className="text-center">Seller List</h2>
      <div className="row">
        <button className="btn btn-primary">
          <Link to="/CreateSellerComponent">Add Seller</Link>
        </button>
      </div>
      <br></br>
      <div className="row">
        <table border={3} className='table'>
          <thead>
            <tr>
              <th>Seller First Name</th>
              <th>Seller Last Name</th>
              <th>Seller PhoneNo</th>
              <th>Seller MobileNo</th>
              <th>Seller Addres</th>
              <th>Seller Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {estate_seller.map((estate_seller) => (
              <tr key={estate_seller.sellerId}>
                <td>{estate_seller.sellerFirstName}</td>
                <td>{estate_seller.sellerLastName}</td>
                <td>{estate_seller.sellerPhoneNo}</td>
                <td>{estate_seller.sellerMobileNo}</td>
                <td>{estate_seller.sellerAddres}</td>
                <td>{estate_seller.sellerEmail}</td>
                <td>
                <button onClick={() => editseller(estate_seller.sellerId)} className="btn btn-info">
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteseller(estate_seller.sellerId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewseller(estate_seller.sellerId)}
                    className="btn btn-info"
                  >
                    View
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

export default ListSellerComponent;