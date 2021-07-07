// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialMemory, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialTodo state
  const [formData, setFormData] = useState(initialMemory);

  //////////////////////////
  // Functions
  //////////////////////////
//when inputs change it updates a state.
//it recieves the event- set form data
//create a new object and give it all the properities form data has 
//then update that name to match that value
  // Standard React Form HandleChange Function

  const handleChange = (event) => {
    // copy of the current
    // const newState = {...formData}
    // newState[event.target.name] = event.target.value
    // setFormData(newState)

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmission = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page adding history
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.img}
        name="img"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.details}
        name="details"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.level}
        name="level"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;