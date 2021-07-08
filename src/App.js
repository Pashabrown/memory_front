// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };
  
  const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://memory-api-pasha.herokuapp.com/memory1s/";

  // State to Hold The List of Posts
  // State to Hold The List of Posts
  const [posts, setPosts] = useState([]);

  const nullMemory = {
  img: "",
  details: "",
  level: "",
};

const [targetMemory, setTargetMemory] = useState(nullMemory)
  //////////////
  // Functions
  //////////////
  const getMemory1s = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};

// Function to add todo from form data
  const addMemory1s = async (newMemory) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMemory),
    });

  // get updated list of todos
    getMemory1s();
  }; 

  // Function to select memory to edit
  const getTargetMemory = (memory) => {
    setTargetMemory(memory);
    props.history.push("/edit");
  };

  // Function to edit memory on form submission
  const updateMemory = async (memory) => {
    const response = await fetch(url + memory.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memory),
    });

  // get updated list of memories
  getMemory1s();
  };
  
  const deleteMemory = async (memory) => {
    const response = await fetch(url + memory.id + "/", {
      method: "delete"
    })
    // get updated list of memories
  getMemory1s();
  props.history.push("/");
};



  //////////////
  // useEffects
  //////////////
  //takes a function and a array
  //when page loads i ask use effect its purpose is to get todos. schedualing to run it one time 
  //and everytime something changes on the page. 
  useEffect(() => {
  getMemory1s();
  }, []);
  /////////////////////
  // returned JSX
  /////////////////////

  //a switch means only one route will be rendered at a time
  //the route is a stand  alone component but in side we pass props 
  //im passing in a path prop (/)
  //also the render prop "render" in order to show all the 
  //it becomes allposots {defined in a curly brackets to be spreadby the spread operator 
  // all its properties are passed in to the history of the consolein our devtolls ot check it}
  return (
    <div>
      <h1 style={h1}>Memories</h1>
      <Link to="/new"><button style={button}>Create New Memory</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          //this route will render whatever this function returns = which is AllPosts
          // all the router props are passed through AllPosts by the ...rp
          render={(rp) => <AllPosts {...rp} posts={posts} />}
        />
      <Route
        path="/post/:id"
        render={(rp) => <SinglePost 
          posts={posts} 
          edit={getTargetMemory}
          deleteMemory={deleteMemory}
          {...rp}/>}
      />
      <Route
        path="/new"
        render={(routerProps) => (    
          <Form
            {...routerProps}
            initialMemory={nullMemory}
            handleSubmit={addMemory1s}
            buttonLabel="create memory"
          />
        )}
      />
      <Route
        path="/edit"
        render={(rp) => <Form 
          initialMemory={targetMemory}
          handleSubmit={updateMemory}
          buttonLabel="update Memory"
          {...rp}/>}
      />
      </Switch>
    </div>
  );
}

export default App;