import React, { useState,useEffect } from "react";
import axios from "axios"
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  
  
  const onSubmit = async data => {
    setData(data);
    axios
      .post("http://localhost:3333/smurfs/", {
        name: data.name,
        age: data.age,
        height: data.height,
        id: data.id,

      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

    }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name*</label>
          <input
            name="name"
            placeholder="Enter your name here"  
            required="required"
            ref={register({ required: true, maxLength: 12 })} //max length was too short
          />
          {errors.name && (
            <p>Looks like there was an error: {errors.name.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="age">Age*</label>
          <input
            name="age"
            placeholder="luo"
            required
            ref={register({ required: true })}
          />
          {errors.age && (
            <p>Looks like there was an error: {errors.age.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Height*</label>
          <input
            name="height"
            placeholder="Enter your height"
            required
            ref={register({ required: true })}
          />
          {errors.height && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
   
     {/*    {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )} */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm
