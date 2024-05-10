import React from 'react'
import { Link } from 'react-router-dom'

const LeftSingleArtical = (props) => {
  return (
    <div className='row'>
      <div className='col-12'>
        <Link to={`../news/${props.uri}`}>
          <div className='row'>
            <div className='col-4'>
              <img src={props.img} alt="" className='img-fluid w-100' style={{ height: 90 }} />
            </div>
            <div className='col-8'>
              <h4 className='h5'>{props.headline.substr(0, 150)}...</h4>
              <p><small><span className='text-danger'>{props.source}</span> | <span className='text-muted'>{props.date}</span></small></p>
            </div>{console.log(props)}
          </div>
        </Link>
      </div>
    </div>
  )
}
export default LeftSingleArtical;