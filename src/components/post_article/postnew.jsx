import React, {Component, Fragment} from 'react'
import axios from 'axios'
import PostArticleTemplate from './post_article_template'
import './css/post_article.css'
import {apiUrl} from '../../config.json'

class PostNew_2 extends Component{
    state={
       data:{
        post:'',
        password:'',
        file:null,
        fileUrl:'',
        title:''     
      }
    }
    
    handleChangeImGSeelect=(e)=>{
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onloadend=()=>{
            const data = {...this.state.data}
            data['file'] = file
            data['fileUrl'] = reader.result
            this.setState({
               data
            })
        }
        reader.readAsDataURL(file)
    }


    handleChange=(e)=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value
        this.setState({
            data
        })
    }


     onSubmit= async (e)=>{
        e.preventDefault() 
        const formData = new FormData();    
        formData.append('avatar',this.state.data.file)
        formData.append('post',this.state.data.post )
        formData.append('title',this.state.data.title )

       let res = await axios.post(`${apiUrl}/postnew.php`, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
       
        if(res.data.post_status==='saved'){
            alert('Your post has been uploaded')
            this.props.history.push('/');
        }
        // console.log(res.data);
        // console.log(this.state.data);
    }


  

    render(){
        
        return(
           <Fragment>
               <PostArticleTemplate
                    data = {this.state.data}
                    handleChange={this.handleChange}
                    handleFileChange = {this.handleChangeImGSeelect}
                    handleSubmit={this.handleSubmit}
                    onSubmit= {this.onSubmit}
               />
           </Fragment>
        )
    }
}

export default PostNew_2