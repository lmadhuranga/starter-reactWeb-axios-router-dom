import { useEffect, useState } from 'react';
import './HomePage.css';
import { useNavigate } from "react-router-dom";
 
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../features/blogs/blogSlice'; 

const  HomePage = () => { 
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  ) 
  
  
  useEffect(() => {
    dispatch(getBlogs()) 
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
    <div className="BlogPage">
      <section className='content'>
        {blogs.length > 0 ? (
          <div className='blogs'>
            {blogs.map((blog) => (
               <label>{blog.content}</label> 
            ))}
          </div>
        ) : (
          <h3>You have not set any blogs</h3>
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
