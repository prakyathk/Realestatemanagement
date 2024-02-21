import React, { useState, useEffect } from 'react';
import { updateEstateSeller, insertseller, fetchbyid, deleteseller, findallseller } from '../Service/SellerService';

const ViewSellerComponent = (props) => {
  const [sellerId, setSellerId] = useState(props.match.params.sellerId);
  const [seller, setSeller] = useState({});

  useEffect(() => {
    fetchbyid.fetchbyid(sellerId).then((res) => {
      setSeller(res.data);
    });
  }, [sellerId]);

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Seller Details</h3>
        <div className="card-body">
          <div className="row">
            <label> seller First Name: </label>
            <div> {seller.sellerFirstName}</div>
          </div>
          <div className="row">
            <label> seller Last Name: </label>
            <div> {seller.sellerLastName}</div>
          </div>
          <div className="row">
            <label> Seller PhoneNo : </label>
            <div> {seller.sellerPhoneNo}</div>
          </div>
          <div className="row">
            <label> Seller MobileNo : </label>
            <div> {seller.sellerMobileNo}</div>
          </div>
          <div className="row">
            <label> Seller Addres : </label>
            <div> {seller.sellerAddres}</div>
          </div>
          <div className="row">
            <label> Seller Email : </label>
            <div> {seller.sellerEmail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSellerComponent;

