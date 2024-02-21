import axios from 'axios';

const baseurl = 'http://localhost:8081/seller';


    export const insertseller = (seller)  => {
    return axios.post(`${baseurl}/insert`, seller); 
  };

  export const deleteseller = (sellerId) =>{
    return axios.delete(`${baseurl}/delete/${sellerId}`); 
  }

  export const findallseller =()=> {
    return axios.get(`${baseurl}/fetch`);
  }

  export const updateEstateSeller = (sellerId, updatedSeller) =>{
    return axios.put(`${baseurl}/update/${sellerId}`, updatedSeller); 
  }





  export const fetchbyid = (sellerId) => {
    return axios.get(baseurl + '/' + sellerId);
}