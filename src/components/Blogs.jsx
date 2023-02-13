import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBlogsQuery } from '../services/blogApi';
import BlogCard from './BlogCard';

const Blogs = () => {
    const {data : blog} = useGetBlogsQuery();
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <h3 className='text-primary'>Blogs</h3>
            <button onClick={() => navigate('/create')} className="btn btn-outline-info my-3">Create New Blog</button>
        </div>
        <div className='d-flex flex-wrap gap-4'>
            {blog?.map(blog => <BlogCard key={blog?.id} blog={blog} />)}
        </div>
    </div>
  )
}

export default Blogs
