import React from 'react'
import './css/pageImg.css'


const PageImg = ()=>{
    return (
        <div className="page-img" style={{
            background:`url('./images/gal_2.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="overlay">
                <div className="container">

                    <div>Welcome to</div>
                    <div className="biggest-text">
                        MEDAWEB BLOG PAGE
                    </div>
                    <div>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean
                    </div>
                    <h6 className="small-text">
                        Refill your pen with the arabian ink
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default PageImg