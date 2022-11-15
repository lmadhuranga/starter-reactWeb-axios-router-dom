import { useState } from 'react';
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import utils from '../../helpers/utils';

import axios from 'axios';
import swal from 'sweetalert2';
// import { getByLabelText } from '@testing-library/react';

const  HomePage = () => { 
  let navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const hostUrl = process.env.REACT_APP_API_BASE_URL; 
  //register user api
  function RegisterCustomerApi(e) { 
    e.preventDefault();
    
    // axios(`${hostUrl}/Customer/OTP`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${localStorage.getItem("token")}`},
    //   data: customerData,
    //   async: false,
    // })
    // .then(({data}) => { 
    //   localStorage.setItem("TransactionId", data.TransactionId);
    //   localStorage.setItem("nic", nic);
    //   navigate('/otp');
    // },
    // (err)=>{
    //   utils.sAlert('error', 'Error', 'Something went wrong');
    // });  
    
  } 
  
  return (
    <div className="HomePage">
      <form className="form-signin user" id="frmCreateAccount" onSubmit={(e)=>{RegisterCustomerApi(e)}}> 
        <input type="email" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control-cus" placeholder="Email | " required />
        <input id="btnRegister" type="submit" alt="Submit" className='btnRegister' /> 
      </form>
    </div>
  );
}

export default HomePage;
