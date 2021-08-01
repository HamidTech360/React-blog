import React, {Component, Fragment} from 'react'
import axios from 'axios'
import PostArticleTemplate from './post_article_template'
import './css/post_article.css'


class PostNew extends Component{
    state={
       data:{
        post:'',
        password:'',
        file:'',
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
            data['file'] = file.name
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


    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.data);

        //POST DATA TO THE BACK END
        // let formData = new FormData()
        // formData.append('file', 'file')
        // console.log(formData);
        // bodyFormdata.append('name', 'my name')
        // console.log(bodyFormdata);
        axios({
            method: 'POST',
            url: 'http://localhost/blog/backend/savePost.php',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            data: {
                ...this.state.data
            }
          })
        .then((response)=>{
            console.log(response.data);
        })
    }
  

    render(){
        
        return(
           <Fragment>
               <PostArticleTemplate
                    data = {this.state.data}
                    handleChange={this.handleChange}
                    handleFileChange = {this.handleChangeImGSeelect}
                    handleSubmit={this.handleSubmit}
               />
           </Fragment>
        )
    }
}

export default PostNew