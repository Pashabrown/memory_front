import React from "react";
import Post from "../components/post";

const AllPosts = (props) => {
  // For each post in the array render a Post component
  //in the map passing a function that is recieving a post 
  //i will then return the post as a prop
  //generating one post component for evey item in the array
  return props.posts.map((post) => <Post post={post} key={post.id} />);
};

export default AllPosts;