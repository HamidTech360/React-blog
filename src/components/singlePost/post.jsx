import axios from 'axios'
import React, {Component} from 'react'
import {apiUrl} from '../../config.json'
import './css/style.css'
class SinglePost extends Component{

    state={
        data:{
            name:'',
            email:'',
            Comment:''
        },
        comments:[],
        post:[],
        submit:true
    }
    handleChange = (e)=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value
        data['id'] = this.props.match.params.id
        this.setState({data})
        
    }

    getPost = async ()=>{
        const id = this.props.match.params.id
       
        const formdata = new FormData()
        formdata.append('id', id)
        const resp = await axios.post(`${apiUrl}/singlePost.php`, formdata,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        
        )
        this.setState({
            post:resp.data[0]
        })
        // console.log(this.state.post);
        // console.log(id);
    }

    async componentDidMount(){

        this.getPost()

        const comments = await axios.get(`${apiUrl}/fetchComment.php`)
        this.setState({
            comments:comments.data
        })
    //   console.log(this.state.comments);

    }

    saveComment = async (e)=>{
     // e.preventDefault()
        const response = await axios.post(`${apiUrl}/saveComment.php`, this.state.data, {
            headers:{
               'content-type': 'multipart/form-data'
            }
        } )
        this.setState({
            submit:true
        })
        console.log(this.state.data);
        // console.log(response.data);
    }

   

    render(){
        const {name, email, comment}= this.state.data;
        const filteredComment = this.state.comments.filter(el=>el.idx == this.props.match.params.id)
        return(
            <div className="single_post_wrapper">
                <div className="bg-img" style={{
                    backgroundImage:`url(${apiUrl}/imgUploads/${this.state.post.image})`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`
                    
                }}>
                    <div className="container">
                        <button className="btn btn-danger" >Posted on {this.state.post.date}</button>
                        <div className="title">
                        {this.state.post.title} 
                        </div>
                    </div>
                   
                </div>



                <div className="post_body">
                    <div className="container">
                        <div className="post_body_title">
                        {this.state.post.title} 
                        </div>
                      <div className="post_body_text" >
                            {this.state.post.post}
                          
                      </div>

                      <div className="comment">
                          <div className="container">

                              <div className="comments">
                                    <h1>{filteredComment.length} comments</h1>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="../images/avatar.png" className="avatar" alt="" />
                                        </div>
                                        <div className="comment-text col-9">
                                            <div className="name">
                                                Owolabi Hammed
                                            </div>
                                            <div className="time">
                                                posted on sunday 2019
                                            </div>
                                            <div className="text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                 Delectus fuga ut eaque quasi mollitia pariatur illum qui unde nemo quisquam!
                                            </div>
                                        </div>
                                    </div>
                                    {filteredComment.map((item, i)=>{
                                        return(
                                            <div className="row" key={i}>
                                                <div className="col-3">
                                                    <img src="../images/avatar.png" className="avatar" alt="" />
                                                </div>
                                                <div className="comment-text col-9">
                                                    <div className="name">
                                                      {item.name}
                                                    </div>
                                                    <div className="time">
                                                        posted on {item.date}
                                                    </div>
                                                    <div className="text">
                                                       {item.comment}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                              </div>
                    

                              <h1>Leave a Comment</h1>
                              <form onSubmit={this.saveComment}>
                                  <div className="form-group">
                                      <input 
                                        type="text" 
                                        name="name"  
                                        className="form-control" 
                                        placeholder="Your name"
                                        value={name}
                                        onChange={this.handleChange}
                                        />
                                  </div>
                                  <div className="form-group">
                                      <input type="email"
                                       name="email" 
                                       className="form-control" 
                                       placeholder="Email"
                                       value={email}
                                       onChange={this.handleChange}
                                       />
                                  </div>
                                  <div className="form-group">
                                      <textarea 
                                      type="text" 
                                      name="comment" 
                                      className="form-control" 
                                      placeholder="write your comment.." 
                                      value={comment}
                                      onChange={this.handleChange}
                                      />
                                  </div>
                                  <div className="form-group">
                                  <button className="btn btn-danger form-control">Submit </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePost;