import React from 'react';
import { Link } from 'react-router-dom';

const RightSingleArtical = (props) => {
    return (
        <div className='row'>
            <div className='col-12 my-2'>
                <Link to={`../news/${props.uri}`}>
                    <div className='row' style={{ borderBottom: "1px solid #ccc" }}>
                        <div className='col-4'>
                            <img src={props.img} alt="" className='img-fluid w-100 h-75' />
                        </div>
                        <div className='col-8'>
                            <h4 className='h6 fw-bold'>{(props.headline).substr(0, 60)}...</h4>
                            <p><small>By : <span className='text-denger'>{props.source}</span> | On : <span className='text-muted'>{props.date}</span> </small></p>
                        </div>
                        <div className='col-12 '>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default RightSingleArtical;