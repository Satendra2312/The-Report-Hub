import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RightContent from '../components/home/RightContent';
import loadingImg from "../images/loading.gif";
export default function ArticaleDetails() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { uri } = useParams();
    const header = {
        'Content-type': 'application/json'
    }
    const setTitle=(title)=>{
        document.title=`${title}`;
    }

    const fetchArticleDetails = async () => {
        const response = await axios.post(" http://eventregistry.org/api/v1/article/getArticle", { articleUri: uri, apiKey: "f334d5ba-70bd-4a8d-b9de-c16baf7905b4" }, { header});
        const result = await response.data[uri].info;
        setData(result);
        setTitle(result.title);
        setLoading(false);
    }
    useEffect(() => {
        fetchArticleDetails();//eslint-disable-next-Line
        // document.title=`${data.title}`;
    }, [uri]);

    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-8 my-2'>
                    <div className='card'>
                        <div className='card-body'>
                            {!loading ?
                                <>
                                    <h3 className='fw-bold'>{data.title}</h3>
                                    <img src={data.image} className='my-2 img-fluid' alt={data.title} />
                                    <p><small>By : <span className='fw-bold text-danger'>{data.source['title']}</span> | Publish : <span className='text-danger fw-bold'>{data.date}</span></small></p>
                                    <hr/>
                                    <p>{data.body}</p>
                                </>
                                :
                                <div className='text-center'>
                                    <img src={loadingImg} className='loading-img' alt="loading" />
                                    <br />
                                    <span className='text-muted'>Loading...please wait a while</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <RightContent />
            </div>
        </div>
    )
}
