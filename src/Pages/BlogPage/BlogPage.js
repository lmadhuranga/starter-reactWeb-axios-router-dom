import { useEffect, useState } from 'react';
// import './BlogPage.css';
import { useNavigate } from "react-router-dom";
 
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, createArticle, loadArticle, deleteArticle } from '../../features/blogs/blogSlice'; 

const  BlogPage = () => { 
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, isSuccess, needToRefresh, message, blog, isEdit } = useSelector(
    (state) => {
      console.log(`msg_ state.blogs`,state.blogs);
      return state.blogs
    }
  ) 

  const [formData, setFormData] = useState({
    title:'',
    content:'',
    author:'',
  }) 

  const { title, content, author } = formData;
  
  
  useEffect(() => { 
    dispatch(getBlogs()); 
  }, []) 
  
  
  useEffect(() => { 
    if(!needToRefresh){
      dispatch(getBlogs());
    } 
  }, []) 
  
  
  //register user api
  function onSubmit(e) { 
    e.preventDefault();
    console.log(`msg_ formData`,formData); 
    dispatch(createArticle(formData));
  } 
  //register user api
  function loadEdit(e, id) {
    navigate(`/articleEdit/${id}`)
  } 
  function clickDeleteArticle(e, id) { 
    dispatch(deleteArticle(id)); 
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
      <h1>hi blogs page</h1>
      <section className='content'>
        {blogs.length > 0 ? ( 
          <ul  className='artcles'>
            {blogs.map((blog) => (
              <li key={blog.id}>{blog.content}
               <button onClick={(e)=>loadEdit(e, blog.id)}>Edit</button>
               <button onClick={(e)=>clickDeleteArticle(e, blog.id)}>Delete</button>
              </li> 
            ))}
          </ul> 
        ) : (
          <h3>You have not set any blogs</h3>
        )}
      </section>
      <hr />
      <h2>New post</h2>
      <form className="form-signin user" onSubmit={(e)=>{onSubmit(e)}}> 
        <input type="text" name='title' value={title} onChange={(e) => onChange(e)}  className="form-control" placeholder="Address " required /> <br/>
        <textarea name='content' value={content} onChange={(e) => onChange(e)}  className="form-control" placeholder="Full Name "></textarea>  <br/>
        <input type="text" name='author' value={author} onChange={(e) => onChange(e)}  className="form-control" placeholder="Address " required /> <br/>
        <input type="submit" alt="Submit" className='btnRegister' /> 
      </form>
      <ul>
        <li>{isLoading.toString()}</li>
        <li>{isError.toString()}</li>
        <li>{message}</li>
      </ul>
    </div>
  );
}

export default BlogPage;
