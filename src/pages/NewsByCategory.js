import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewsByCategory() {
    const [Headlines, setHeadlines] = useState([]);
    const { uri } = useParams();
    const fetchHeadlines = async () => {
        const response = await axios.post(" http://eventregistry.org/api/v1/article/getArticles", { apiKey: "f334d5ba-70bd-4a8d-b9de-c16baf7905b4", uri });
        setHeadlines(response.data.articles.results);
    }
    useEffect(() => {
        fetchHeadlines();
    }, []);
    return (
        <div className='container my-5'>
            <div className='row'>
                {
                    Headlines.map((article, index) => {
                        return (
                            <div className='col-4'>
                                <link to={`./news/${article.uri}`}>
                                    <div className='card p-2'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <img src={ article.image} alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-12 my-2'>
                                                <h5 className='h5'>{article.title}</h5>
                                                <p><small>By : <span className='text-danger'>{article.source.title}</span> | On : <span className='text-muted'>{}</span></small></p>
                                            </div>
                                        </div>
                                    </div>
                                </link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
