
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { updateEstateSeller, insertseller } from "../Service/SellerService";

const CreateSellerComponent = () => {
  const navigate = useNavigate();
  const { sellerId } = useParams();
  const [sellerFirstName, setSellerFirstName] = useState("");
  const [sellerLastName, setSellerLastName] = useState("");
  const [sellerPhoneNo, setSellerPhoneNo] = useState("");
  const [sellerMobileNo, setSellerMobileNo] = useState("");
  const [sellerAddres, setSellerAddres] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const saveOrUpdateSeller = async (e) => {
    e.preventDefault();
    const seller = {
      sellerFirstName,
      sellerLastName,
      sellerPhoneNo,
      sellerMobileNo,
      sellerAddres,
      sellerEmail,
    };

    if (sellerId === "_add") {
      insertseller(seller).then(() => {
        navigate("/insert");
      });
    } else {
      updateEstateSeller(seller, sellerId).then(() => {
        navigate("/insert");
      });
    }
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">
              {sellerId === "_add" ? "Add Seller" : "Update Seller"}
            </h3>
            <div className="card-body">
              <form>
                <div className='form-group'>
                  <label> First Name: </label>
                  <input
                    placeholder='Seller First Name'
                    name='sellerFirstName'
                    className='form-control'
                    value={sellerFirstName}
                    onChange={(e) => setSellerFirstName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Seller Last Name: </label>
                  <input
                    placeholder='Seller Last Name'
                    name='sellerLastName'
                    className='form-control'
                    value={sellerLastName}
                    onChange={(e) => setSellerLastName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label> Seller PhoneNo: </label>
                  <input
                    placeholder='Seller PhoneNo'
                    name='sellerPhoneNo'
                    className='form-control'
                    value={sellerPhoneNo}
                    onChange={(e) => setSellerPhoneNo(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label> Seller Mobile No: </label>
                  <input
                    placeholder='Seller Mobile No'
                    name='sellerMobileNo'
                    className='form-control'
                    value={sellerMobileNo}
                    onChange={(e) => setSellerMobileNo(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <label> Seller Addres: </label>
                  <input
                    placeholder='Seller Addres'
                    name='sellerAddres'
                    className='form-control'
                    value={sellerAddres}
                    onChange={(e) => setSellerAddres(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label> Seller Email: </label>
                  <input
                    placeholder='Seller Email'
                    name='sellerEmail'
                    className='form-control'
                    value={sellerEmail}
                    onChange={(e) => setSellerEmail(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateSeller}>
                  Save
                </button>
                <Link to="/insert" className="btn btn-danger" style={{ marginLeft: "10px" }}>
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSellerComponent;