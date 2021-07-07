import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({posts, match, edit, deleteMemory, history}) => {
    const id = parseInt(match.params.id)
    const post = posts.find((post) => {
        //gonna go thru each post to see if it matches the same id 
        //when it matches it takes it and displys it
        return post.id === id
    })

   //////////////////////
  // Styles
  //////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto"
  }
      return (
    <div style={div}>
      <h1>{post.img}</h1>
      <h2>{post.details}</h2>
      <h2>{post.level}</h2>
      <button onClick={(event) => edit(post)}>Edit</button>
      <button onClick={(event) => { 
        deleteMemory(post)
        history.push("/")}}>Delete</button>
      
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;