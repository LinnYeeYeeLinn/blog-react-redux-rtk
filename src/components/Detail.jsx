import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleDetailQuery } from '../services/blogApi';

const Detail = () => {
    const {id} = useParams();
    const {data: blogDetail} = useGetSingleDetailQuery(id);

  return (
    <div>
        <img src={blogDetail?.image} height='200px' alt="" />
        <div className="mt-3">
            <h4 className='text-capitalize text-primary'>{blogDetail?.title}</h4>
            <p className="text-capitalize">{blogDetail?.desc}</p>
            <div className="d-flex gap-2">
                <Link to='/'>
                    <button className="btn btn-outline-danger">Go Back</button>
                </Link>
                <Link to={`/edit/${blogDetail?.id}`}>
                    <button className="btn btn-warning">Edit</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Detail