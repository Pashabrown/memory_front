import React from "react";
//import the link component because i want to link to another route
import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <img src={post.img} alt="post"/>
      </Link>
      <h2>{post.details}</h2>
      <h2>{post.level}</h2>
    </div>
  );
};

export default Post;