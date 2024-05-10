import React from 'react'
import { Link } from 'react-router-dom';

const MainHeadlingSingleItem = (props) => {
  return (
    <div className='col-12 p-1'>
      <Link to={`news/${props.uri}`}>
        <img src={props.img} alt="" className="breaking_news_img img-fluid" />
        <h3 className='news_headline mt-2'>{props.headline}</h3>
        <p><small><span className='text-danger'>{props.source}</span> | <span className='text-muted'>Published : {props.date}</span></small></p>
      </Link>

    </div>
  )
}

export default MainHeadlingSingleItem;