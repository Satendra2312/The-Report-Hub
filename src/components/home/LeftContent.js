import React, { useState, useEffect } from 'react'
import MainHeadlingSingleItem from './MainHeadlingSingleItem'
import LeftSingleArtical from './LeftSingleArtical';
import axios from 'axios';
import loadingImg from "../../images/loading.gif";
// import Slider from '../Slider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeftContent = () => {

    const [data, setData] = useState([]);
    const [subHeadlines, setsubHeadline] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMainHeadlines = async () => {
        const response = await axios.post(" http://eventregistry.org/api/v1/article/getArticles", { apiKey: "f334d5ba-70bd-4a8d-b9de-c16baf7905b4", keyword: "breaking", lang: "hin", articlesCount: 6 });
        setLoading(false);
        setData(response.data.articles.results);
    }
    const fetchSubHeadlines = async () => {
        const response = await axios.post(" http://eventregistry.org/api/v1/article/getArticles", { apiKey: "f334d5ba-70bd-4a8d-b9de-c16baf7905b4", keyword: "india", lang: "hin", articlesCount: 6 });
        setLoading(false);
        setsubHeadline(response.data.articles.results);
    }
    useEffect(() => {
        fetchMainHeadlines();
        fetchSubHeadlines();

    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (

        <div className="col-12 col-md-8 my-2">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className='card-header bg-dark text-warning fw-bold'>Breaking News </div>
                        <div className="card-body">
                            <Slider className='row' {...settings}>
                                {
                                    loading ? <div className="col-12 text-center"><img src={loadingImg} alt="" height={'50px'} width={'50px'} /></div> : data.map((article, index) => {
                                        return (
                                            <MainHeadlingSingleItem key={index} source={article.source.title} date={article.date} uri={article.uri} img={article.image} headline={article.title} />
                                        )
                                    })
                                }
                            </Slider>

                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card mt-2">
                        <div className="card-body">
                            {
                                loading ? <div className="col-12 text-center"><img src={loadingImg} alt="" height={'50px'} width={'50px'} /></div> : subHeadlines.map((article, index) => {
                                    return (
                                        <LeftSingleArtical key={index} source={article.source.title} date={article.date} uri={article.uri} img={article.image} headline={article.title} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LeftContent;