import { useEffect, useState } from 'react';
// import './articleEdit.css';
import { useNavigate, useParams } from "react-router-dom";
 
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, updateArticle, loadArticle } from '../../features/blogs/blogSlice'; 

const  ArticleEdit = () => { 
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { blogs, isLoading, isError, message, blog, isEdit } = useSelector(
        (state) => { return state.blogs }
    ) 

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
    })

    let { id } = useParams(); 
    useEffect(() => { 
        dispatch(loadArticle(id)); 
    }, []) 
  
  
  //register user api
  function onSubmit(e) { 
    e.preventDefault(); 
    dispatch(updateArticle(formData));
  } 

  //register user api
  function loadEdit(e, id) { 
    navigate(`/articleEdit/${id}`)
  } 

  const onChange = (e)=> {
    e.preventDefault();
 
    setFormData((prevState) => {
        return({
            ...prevState,
            [e.target.name]: e.target.value,
        })
    });
  } 

  const loadForm = () => {
    
    const { title, content, author } = formData;

    return (
        <div className=''>
            <h2>Edit post {title}</h2>
            <form className="form-signin user" onSubmit={(e)=>{onSubmit(e)}}> 
                <input type="text" name='title' value={title} onChange={(e) => onChange(e)}  className="form-control" placeholder="Address " required /> <br/>
                <textarea name='content' value={content} onChange={(e) => onChange(e)}  className="form-control" placeholder="Full Name "></textarea>  <br/>
                <input type="text" name='author' value={author} onChange={(e) => onChange(e)}  className="form-control" placeholder="Address " required /> <br/>
                <input type="submit" alt="Submit" className='btnRegister' /> 
            </form>
        </div>
    );
  }
  
  return (
    <div className="ArticleEdit">
      <h1>hi blogs page</h1>
      <section className='content'>
        {blogs.length > 0 ? ( 
          <ul  className='artcles'>
            {blogs.map((blog) => (
               <li key={blog.id}>{blog.content} <button onClick={(e)=>loadEdit(e, blog.id)}>Edit</button> </li> 
            ))}
          </ul> 
        ) : (
          <h3>You have not set any blogs</h3>
        )}
      </section>
      <hr />
        {isLoading==false?loadForm(formData):<h1>loading..</h1>}
      <ul>
        <li>{isLoading.toString()}</li>
        <li>{isError.toString()}</li>
        <li>{message}</li>
      </ul>
    </div>
  );
}

export default ArticleEdit;
