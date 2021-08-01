import React from 'react'
import axios from 'axios';

class FileUploadForm extends React.Component {

    // UPLOAD_ENDPOINT = 'http://localhost/blog/backend/fileUpload.php';
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //       file:null
    //     }
    //     this.onSubmit = this.onSubmit.bind(this)
    //     this.onChange = this.onChange.bind(this)
    //     this.uploadFile = this.uploadFile.bind(this)
    // }

    state ={
        file:null
        }
     onSubmit = async(e)=>{
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
    }
    onChange=(e)=> {
        this.setState({file:e.target.files[0]})
    }
     uploadFile= async(file)=>{
        

        const formData = new FormData();
        
        formData.append('avatar',file)
    
        
        return  await axios.post('http://localhost/blog/backend/fileUpload.php', formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
      }
    
      render() {
        return (
          <form onSubmit={ this.onSubmit }>
            <h1> React File Upload Example</h1>
            <input type="file" onChange={ this.onChange } />
            <button type="submit">Upload File</button>
          </form>
       )
      }
        
}

export default FileUploadForm;