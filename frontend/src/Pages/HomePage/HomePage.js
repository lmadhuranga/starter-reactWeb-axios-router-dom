import { useEffect, useState } from 'react';
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import utils from '../../helpers/utils';

import axios from 'axios';
import swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getGoals } from '../../features/goals/goalSlice';
// import { getByLabelText } from '@testing-library/react';

const  HomePage = () => { 
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )
  
  const [formData, setFormData] = useState({
    fullName:'Madhuranga Senadheera',
    address:'Dubai',
    email:'lilan.maduranga@gmail.com',
  }) 
  const { address, email, fullName } = formData
  const hostUrl = process.env.REACT_APP_API_BASE_URL; 
  
  useEffect(() => {
    dispatch(getGoals()) 
  }, [])
  
  
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
  const onChange = (e)=> {
    e.preventDefault();
 
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  } 
  
  return (
    <div className="HomePage">
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
               <label>{goal.text}</label> 
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>

      <form className="form-signin user" onSubmit={(e)=>{RegisterCustomerApi(e)}}> 
        <input type="text" name='address' value={address} onChange={(e) => onChange(e)}  className="form-control-cus" placeholder="Address " required />
        <input type="text" name='fullName' value={fullName} onChange={(e) => onChange(e)}  className="form-control-cus" placeholder="Full Name " required />
        <input type="email" name='email' value={email} onChange={(e) => onChange(e)}  className="form-control-cus" placeholder="Email " required />
        <input type="submit" alt="Submit" className='btnRegister' /> 
      </form>
    </div>
  );
}

export default HomePage;
