import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/home'
import Header from './global/header/header'
import Footer from './global/footer/footer'
import PostNew from './components/post_article/post_article'
import FileUploadForm from './components/post_article/fileUpload'
import PostNew_2 from './components/post_article/postnew'
import SinglePost from './components/singlePost/post'
 // "apiUrl":"http://localhost/blog/backend"
const App = ()=>{
  return(
    <BrowserRouter>
      <Header/>
      
      <Switch>
        <Route path="/post_article" component={PostNew}/>
        <Route path="/file" component={FileUploadForm}/>
        <Route path="/postnew" component={PostNew_2}/>
        <Route path="/singlepost/:id?" component={SinglePost}/>
        <Route path="/" component={Home}/>
      </Switch>

      <Footer/>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))