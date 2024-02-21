import React, { useState, useEffect } from 'react';
import { updateEstateSeller, insertseller, fetchbyid, deleteseller, findallseller } from '../Service/SellerService';

const UpdateSellerComponent = (props) => {
  const [sellerId, setSellerId] = useState(props.match.params.sellerId);
  const [sellerFirstName, setSellerFirstName] = useState('');
  const [sellerLastName, setSellerLastName] = useState('');
  const [sellerPhoneNo, setSellerPhoneNo] = useState('');
  const [sellerMobileNo, setSellerMobileNo] = useState('');
  const [sellerAddres, setSellerAddres] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');

  useEffect(() => {
   fetchbyid(sellerId).then((res) => {
      const seller = res.data;
      setSellerFirstName(seller.sellerFirstName);
      setSellerLastName(seller.sellerLastName);
      setSellerPhoneNo(seller.sellerPhoneNo);
      setSellerMobileNo(seller.sellerMobileNo);
      setSellerAddres(seller.sellerAddres);
      setSellerEmail(seller.sellerEmail);
    });
  }, [sellerId]);

  const updateSeller = (e) => {
    e.preventDefault();
    const updatedSeller = {
      sellerFirstName,
      sellerLastName,
      sellerPhoneNo,
      sellerMobileNo,
      sellerAddres,
      sellerEmail,
    };
  
    updateEstateSeller(sellerId, updatedSeller).then((res) => {
      props.history.push('/estate_seller');
    });
  };
    

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Seller</h3>
            <div className="card-body">
              <form>
              <div className="form-group">
                   <label> First Name: </label>
                   <input
                     placeholder="Seller First Name"
                     name="firstName"
                     className="form-control"
                     value={sellerFirstName}
                     onChange={(e) => setSellerFirstName(e.target.value)}
                   />
                 </div>
                 <div className="form-group">
                   <label>Seller Last Name: </label>
                   <input
                     placeholder="Seller Last Name"
                     name="sellerlastName"
                     className="form-control"
                     value={sellerLastName}
                     onChange={(e) => setSellerLastName(e.target.value)}
                   />
                 </div>
                 <div className="form-group">
                   <label> Seller PhoneNo: </label>
                  <input
                    placeholder="Seller PhoneNo"
                     name="sellerPhoneNo"
                     className="form-control"
                     value={sellerPhoneNo}
                     onChange={(e) => setSellerPhoneNo(e.target.value)}
                   />
                 </div>
                 <div className="form-group">
                   <label> Seller Mobile No: </label>
                  <input
                    placeholder="Seller Mobile No"
                     name="sellerMobileNo"
                     className="form-control"
                     value={sellerMobileNo}
                     onChange={(e) => setSellerMobileNo(e.target.value)}
                   />
                 </div>

                 <div className="form-group">
                   <label> Seller Addres: </label>
                  <input
                    placeholder="Seller Addres"
                     name="sellerAddres"
                     className="form-control"
                     value={sellerAddres}
                     onChange={(e) => setSellerAddres(e.target.value)}
                   />
                 </div>
                 <div className="form-group">
                   <label> Seller Email: </label>
                  <input
                    placeholder="Seller Email"
                     name="sellerEmail"
                     className="form-control"
                     value={sellerEmail}
                     onChange={(e) => setSellerEmail(e.target.value)}
                   />
                 </div>

                <button
                  className="btn btn-success"
                  onClick={updateSeller}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => props.history.push('/seller')}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSellerComponent;

