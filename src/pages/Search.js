import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loadingImg from "../images/loading.gif";
import {useParams,Link } from 'react-router-dom';


export default function Search() {
    const [data, setData] = useState([]);
    const { query } = useParams();
    const [loading, setLoading] = useState(true);
    const fetchNews = async () => {
        const response = await axios.post(" http://eventregistry.org/api/v1/article/getArticles", { apiKey: "f334d5ba-70bd-4a8d-b9de-c16baf7905b4", keyword: query, lang: "hin", articlesCount: 24 });
        setLoading(false);
        setData(response.data.articles.results);
    }
    useEffect(() => {
        document.title=`Search result for : ${query}`;
        fetchNews();
        setLoading(true);
    }, [query]);

    return (
        <div className='container mb-3' style={{ marginTop: "100px" }}>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h4 className='text-dark h3 fw-bold' style={{ textShadow: "2px 0px 0px arrange" }}>Showing result for: "{query}"</h4>
                    <hr />
                </div>
                {
                    data.length > 0 ?
                        !loading ? data.map((article, index) => {
                            return (
                                <div className='col-12 col-md-3 my-2' key={index}>
                                    <Link to={`../news/${article.uri}`}>
                                        <div className='card p-2'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <img src={article.image} alt="" className='img-fluid w-100' style={{ height: 100 }} />
                                                </div>
                                                <div className='col-12 my-2'>
                                                    <h5 className='h6 fw-bold'>{article.title.substr(0, 60)}...</h5>
                                                    <p><small>By : <span className='text-danger'>{article.source.title}</span> | On : <span className='text-muted'>{article.date }</span></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                            :
                            <div className='col-12 text-center'>
                                <img src={loadingImg} className='loading-img' alt="loader" /><br />
                                Loading...Please wait
                            </div>
                        :
                        <div className='col-12 text-center text-danger'>
                            Nothing found for your search.
                        </div >
                }
            </div>
        </div>

    )
}
