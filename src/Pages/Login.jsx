// import React, { useRef } from 'react'
// // import { userNavigate} from "react-router-dom";
// import axios from "../axiosConfig";
// // import { login } from "../../../controller/userController";
// import {Link, useNavigate} from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//   e.preventDefault();

//   const emailValue = emailDom.current.value;
//   const passValue = passwordDom.current.value;

//   if(!emailValue || !passwordDom){
//     alert("please provide all required information");
//     return;
//   }

//   try{
//     const { data } = await axios.post("/users/login",{
//       email: emailValue,
//       password: passValue,
//     });
//     alert("login successfull.");

//     navigate("/")


//     localStorage.setItem("token, data.token");

//     // Navigate("/");
//     console.log(data);
//   }
//   catch (error){
//       alert(error?.response?.data?.msg);
//       console.log(error.response.data);
//   }
//   }
//   return (
//     <section>
//       <from onSubmit={handleSubmit}>
//     <div>
//       <span>email :--- </span>
//       <input ref={emailDom} type='email' placeholder='email'/>
//     </div>
//     <br />
//     <div>
//       <span>password:--- </span>
//         <input 
//         ref={passwordDom} 
//         type= 'password' placeholder= 'password'
//         /> 
//     </div>
//     <button   type='submit'>Login</button>
//     </from>
//     <Link to={"/register"}>register</Link>
//     </section>
//   );
// }

// export default Login



import { useRef } from "react";
import axios from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!emailValue || !passValue) {
      alert("please provide all required information ");
      return
    }

    // so let us send request to the database
    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passValue,
      });
      alert("login successfull.  ");
      localStorage.setItem("token", data.token);
      
      console.log(data);
      // const response= await axios.post("/users/login", {
      //   email: emailValue,
      //   password: passValue,
      // });
      // alert("login successfull.  ");
      // console.log(response)

      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email:</span>
          <input type="email" ref={emailDom} placeholder="email" />
          <br />
          <br />
        </div>

        <div>
          <span>Password:</span>
          <input type="password" ref={passwordDom} placeholder="password" />
          <br />
          <br />
        </div>

        {/* <button type="Submit" value="Login" /> */}
        <button type="Submit" value ="login "> login</button>
      </form>

  <Link to = {'/register'}> Register </Link>
    </section>
  );
}

export default Login;
