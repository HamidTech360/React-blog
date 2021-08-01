import React, { Component, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import './css/featuredPost.css'
import {apiUrl}  from '../../../config.json'

class FeaturedPost extends Component{
    state={
        apiData:[]
    }

    componentDidMount(){
        axios.get(`${apiUrl}/getPost.php`)
            .then((response)=>{
                // console.log(response.data);
                
              this.setState({
                  apiData:response.data
              })
            //   console.log(this.state.apiData);
            })
           
    }

    render(){
        return(
            <div className="featured_post_wrapper container">

                <div className="heading">
                    Featured post
                </div>
               


                <div className="grid row " id="featured_post_row">
                    <div className="col-3 text-center">
                        <img src="images/images-3.jpeg"  alt="" />
                    </div>
                    <div className="col-9 ">
                        <div className="title-text">
                            A dummy post. You can post a new article
                        </div>
                        <div className="date-posted">
                            posted Tuesday 23, 2019
                        </div>
                        <div className="readMore">
                            read more
                        </div>
                    </div>
                </div>

               
       
                    {this.state.apiData.map((item, i)=>{
                        return(
                            
                            <div key={i} className="grid row " id="featured_post_row">
                              
                                <div className="col-3 text-center">
                                        <img src={`${apiUrl}/imgUploads/${item.image}`}    alt="" />
                                    </div>
                                    
                                    <div className="col-9 ">
                                    <NavLink to={`/singlepost/${item.id}`} style={{textDecoration:'none'}} >
                                        <div className="title-text">
                                        {item.title}
                                        </div>
                                        <div className="date-posted">
                                            posted {item.date}
                                        </div>
                                        <div className="readMore">
                                            read more
                                        </div>
                                        </NavLink>
                                    </div>

                            </div>
                          
                
                        )
                    })}
                    
             
                
            </div>
        )
    }

 

    // useEffect(()=>{
    //     axios.get('http://localhost/blog/backend/getPost.php')
    //     .then((response)=>{
    //         console.log(response.data);
    //         setApiData(response.data)
    //         console.log(ApiData);

    //     })
    // },[])



}

export default FeaturedPost