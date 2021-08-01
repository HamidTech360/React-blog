import React from 'react'

const postArticleTemplate = (props)=>{
    const {password, post, file, fileUrl} = props.data
    return(
        <div className="container post_article_wrapper">
        <form method="post" onSubmit={(e)=>props.onSubmit(e)}>
            <div className="text-center img_placeholder">
                <img
                  src={file== null?"images/img_placeholder.jpg" : fileUrl}
                  className="myImg"
                  alt=""
                 />
               
               
                <input 
                    type="file" 
                    name="imgfile"  
                     onChange={(e)=>props.handleFileChange(e)} 
                />

               
                <input 
                    type="text" 
                    name="password" 
                     value={password} 
                     placeholder="PERMIT CODE" 
                     onChange={(e)=>props.handleChange(e)} />
            </div>
            
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                placeholder="POST TITLE"
                onChange={(e)=>props.handleChange(e)}
                name ="title"
             />
            </div>

            <div className="form-group">
                <textarea name="post" 
                    value={post} 
                    id="" cols="30" rows="10" className="form-control textField"
                     onChange={(e)=>props.handleChange(e)} autoFocus
                />   
            </div>


            <div className="form-group">
                <button  className="btn btn-danger form-control publish_btn">PUBLISH NEW POST</button>
            </div>
        </form>
    </div>
    )
}

export default postArticleTemplate