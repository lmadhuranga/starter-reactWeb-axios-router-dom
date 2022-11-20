import { useEffect, useState } from 'react';
// import './articleEdit.css';
import { useNavigate, useParams } from "react-router-dom";
 
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, updateArticle, loadArticle } from '../../features/blogs/blogSlice'; 

const  ArticleEdit = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, message, blog } = useSelector(
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

  useEffect(() => { 
    if(blog) {
      setFormData({...blog})
    } 
  }, [blog]) 
  
  
  //register user api
  function onSubmit(e) { 
    e.preventDefault(); 
    dispatch(updateArticle(formData));
    navigate('/blog')
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

  const { title, content, author } = formData; 
  
  return (
    <div className="ArticleEdit"> 
        <div className=''>
            <h2>Edit post {title}</h2>
            <form className="form-signin user" onSubmit={(e)=>{onSubmit(e)}}> 
                <input type="text" name='title' value={title} onChange={(e) => onChange(e)}  className="form-control" placeholder="Address " required /> <br/>
                <textarea name='content' value={content} onChange={(e) => onChange(e)}  className="form-control" placeholder="Full Name "></textarea>  <br/>
                <input type="text" name='author' value={author} onChange={(e) => onChange(e)}  className="form-control" placeholder="Address " required /> <br/>
                <input type="submit" alt="Submit" className='btnRegister' /> 
            </form>
        </div>
      <ul>
        <li>{isLoading.toString()}</li>
        <li>{isError.toString()}</li>
        <li>{message}</li>
      </ul>
    </div>
  );
}

export default ArticleEdit;
