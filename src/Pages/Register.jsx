// import { useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// import axios from "../axiosConfig";
// // import { login, register } from "../../../controller/userController";
// import {Link, useNavigate } from 'react-router-dom';

// function Register() {
//   const Navigate = useNavigate();
//   const usernameDom = useRef();
//   const firstNameDom = useRef();
//   const lastNameDom = useRef();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const usernameValue = usernameDom.current.value;
//     const firstValue = firstNameDom.current.value;
//     const lastValue = lastNameDom.current.value;
//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;
//     if (
//       !usernameValue ||
//       !firstValue ||
//       !lastValue ||
//       !emailValue ||
//       !passValue 
//     ) {
//       alert("pleas provide all required information");
//       return;
//     }
//     try {
//       await axios.post("users/register", {
//         username: usernameValue,
//         firstname: firstValue,
//         lastname: lastValue,
//         email: emailValue,
//         password: passValue,
//         // username: "",
//         // firstname: "",
//         // lastname: "",
//         // email: "",
//         // password: "",
//       });
//       alert("register successful.please login");
//       Navigate("/login");
//     } catch (error) {
//       alert("something went wrong!");
//       console.log(error.response);
//     }

//     // console.log(usernameDom.current.value);
//     // console.log(firstnameDom.current.value);
//     // console.log(lastnameDom.current.value);
//     // console.log(emailDom.current.value);
//     // console.log(passwordDom.current.value);
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <span>username :--- </span>
//           <input ref={usernameDom} type="text" placeholder="username" />
//         </div>
//         <br />

//         <div>
//           <span>first name :--- </span>
//           <input type="text" placeholder="first name" />
//         </div>
//         <br />

//         <div>
//           <span>last name :--- </span>
//           <input type="text" placeholder="last name" />
//         </div>
//         <br />

//         <div>
//           <span>email :--- </span>
//           <input type="text" placeholder="email" />
//         </div>
//         <br />

//         <div>
//           <span>password :--- </span>
//           <input type="text" placeholder="password " />
//         </div>
//         <br />

//         <button type="submit">Register</button>
//       </form>
//       <Link to={"/login"}>Login</Link>
//     </section>
//   );
// }

// export default Register;


import { useRef } from "react";
import axios from "../axiosConfig";
import { Link , useNavigate} from'react-router-dom';

function Register() {
  const Navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!usernameValue || !firstValue || !lastValue || !emailValue || !passValue) {
      alert("please provide all required information ");
      return;
    }

    // so let us send request to the database
    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });
      alert("register successfull. please login ");

      Navigate('/login')
    } catch (error) {
      console.log(error.message);
    }
    // to check if it  accept
    // console.log(usernameDom.current.value);
    // console.log(firstnameDom.current.value);
    // console.log(lastnameDom.current.value);
    // console.log(emailDom.current.value);
    // console.log(passwordDom.current.value);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>UserName :</span>
          <input type="text" ref={usernameDom} placeholder="username" />
          <br />
          <br />
        </div>

        <div>
          <span>First Name:</span>
          <input type="text" ref={firstnameDom} placeholder="firstname" />
          <br />
          <br />
        </div>

        <div>
          <span>Last Name:</span>
          <input type="text" ref={lastnameDom} placeholder="lastname" />
          <br />
          <br />
        </div>

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

        <input type="Submit" value="Register" />
      </form>
      <Link to = {'/login'} > Login </Link>
    </section>
  );
}

export default Register;