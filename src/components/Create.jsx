import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAddBlogMutation } from '../services/blogApi';

const Create = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const [addBlog] = useAddBlogMutation();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const newBlog = {id: Date.now(), title, desc, image};
        addBlog(newBlog);
        navigate('/');
    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <div className="form-group mb-3">
                <label className="form-label">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Description</label>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="form-group mb-4">
                <label className="form-label">Image</label>
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" className="form-control" />
            </div>
            <button type='submit' className="btn btn-primary">Create</button>
            <Link to='/'>
                <button className="btn btn-outline-danger ms-3">Cancel</button>
            </Link>
        </form>
    </div>
  )
}

export default Create