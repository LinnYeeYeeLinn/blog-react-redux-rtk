import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../services/blogApi'

const BlogCard = ({blog: {image, title, desc, id}}) => {
    const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className='card' style={{width: '18rem'}}>
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body">
            <h4 className=' text-capitalize'>{title}</h4>
            <p>{desc}</p>
            <Link to={`/detail/${id}`}>
                <button className="btn btn-primary">Detail</button>
            </Link>
            <button onClick={() => deleteBlog(id)} className="btn btn-danger ms-2">Delete</button>
        </div>
    </div>
  )
}

export default BlogCard