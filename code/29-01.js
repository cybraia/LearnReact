//making api calls using axios
//app.js
import "./styles.css";
import React from "react";
import PostForm from "./api/postForm"

class App extends React.Component {
  
  render() {
    
    return (
      <div>
        <PostForm></PostForm>
      </div>
    );
  }
}

export default App;
//postForm.js
import React, { Component } from 'react';
import axios from 'axios'

class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmitt = (e) => {
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then((response) => {
     console.log(response)
    });
  }

  render(){
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmitt}>
          <div>
            <label>UserId</label>
            <input 
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange} ></input>
          </div>
          <div>
            <label>Title</label>
            <input 
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange} ></input>
          </div>
          <div>
          <label>Body</label>
            <input 
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange} ></input>
          </div>
          <div>
          <button type='submit'>Submit</button>
          </div>
        </form> 
      </div>
    )
  }
}

export default PostForm;
//postList.js
import React from "react";
import axios from 'axios';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        posts: response.data
      });
      console.log(response.data);
    });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
       <h3>List of Posts</h3>
        {posts.map(post => <div key={post.id}>{post.title}</div>)}
      </div>
    );
  }
}

export default PostList;
