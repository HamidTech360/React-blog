import React, { Fragment } from 'react'
import PageImg from './widgets/pageImg'
import Posts from './widgets/posts'
import FeaturedPost from './widgets/featuredPosts'
import './widgets/css/Home.css'
import About from './widgets/about'

const Home = ()=>{
    return(
        <div className="Home_wrapper">
           <PageImg/>
           <Posts/>
           <FeaturedPost/>
            <About/>
        </div>
    )
}

export default Home