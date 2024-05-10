import React, { useEffect } from 'react'
import LeftContent from '../components/home/LeftContent'
import RightContent from '../components/home/RightContent'

function Home() {
    useEffect(() => {
        document.title = 'Tej | Leatest News, breaking news'
    })
    return (
        <div className='container mb-3' style={{ marginTop: "100px" }}>
            <div className="row">
                <LeftContent />
                <RightContent />
            </div>
        </div>
    )
}
export default Home
