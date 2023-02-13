import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetSingleDetailQuery, useUpdateBlogMutation } from '../services/blogApi';

const Edit = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const {data: blog} = useGetSingleDetailQuery();
    const [updateBlog] = useUpdateBlogMutation(id);

    const navigate = useNavigate();

    useEffect(() => {
        setTitle(blog?.title);
        setDesc(blog?.desc);
        setImage(blog?.image);
    }, [blog])

    const submitHandler = (e) => {
        e.preventDefault();
        const newBlog = {id, title, desc, image};
        updateBlog(newBlog);
        navigate('/');
    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <div className="form-group mb-3">
                <label className="form-label">Title</label>
                <input defaultValue={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Description</label>
                <input defaultValue={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="form-group mb-4">
                <label className="form-label">Image</label>
                <input defaultValue={image} onChange={(e) => setImage(e.target.value)} type="text" className="form-control" />
            </div>
            <button type='submit' className="btn btn-primary">Update</button>
            <Link to='/'>
                <button className="btn btn-outline-danger ms-3">Cancel</button>
            </Link>
        </form>
    </div>
  )
}

export default Edit