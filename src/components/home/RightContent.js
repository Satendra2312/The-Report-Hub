import React, { useState, useEffect } from 'react'
import RightSingleArtical from './RightSingleArtical';
// import LeftSingleArtical from './LeftSingleArtical';
import axios from 'axios';
import loadingImg from '../../images/loading.gif'


const RightContent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchRightSingleArtical = async () => {
        const response = await axios.post(" http://eventregistry.org/api/v1/article/getArticles", { apiKey: "f334d5ba-70bd-4a8d-b9de-c16baf7905b4", keyword: "economy", lang: "hin", articlesCount: 8 });
        setLoading(false);
        setData(response.data.articles.results);
    }
    useEffect(() => {
        fetchRightSingleArtical();
    }, []);
    return (
        <div className='col-12 col-md-4 my-2'>
            <div className='card'>
                <div>Top News Headlines</div>
                <div className='card-body'>
                    <div className="row">
                        {
                            loading ? <div className="col-12 text-center"><img src={loadingImg} alt="" height={'50px'} width={'50px'} /></div> : data.map((article, index) => {
                                return (
                                    <RightSingleArtical key={index} source={article.source.title} date={article.date} uri={article.uri} img={article.image} headline={article.title} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default RightContent;