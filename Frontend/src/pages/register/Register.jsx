import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../../apis/Api";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handlePass2 = (e) => {
    setPass2(e.target.value);
  };

  //  handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, pass, pass2);

    try {
      registerApi({
        fname: fname,
        lname: lname,
        email: email,
        password: pass,
        password2: pass2,
      }).then((res) => {
        toast.success("User registered successfully");
      }).catch((err) => {
        console.log(err);
        toast.error("User registration failed");
      });
    } catch (error) {
      toast.error("Regisration failed");
    }

    // try {
    //   axios.post("http://localhost:5000/api/user/register", {
    //     fname: fname,
    //     lname: lname,
    //     email: email,
    //     password: pass,
    //     password2: pass2,
    //   }).then((res) => {
    //     toast.success("User registered successfully");
    //   }).catch((err) => {
    //     console.log(err);
    //     toast.error("User registration failed");
    //   });
      
    // } catch (error) {
    //   toast.error("Error in frontend");
    // }
  };

  return (
    <section className="container-fluid register-page">
      <div className="container register-form ">
      <div className="col-md-6 login-row">
        <h1 className="login-heading">Register a user</h1>

        <form action="">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
              <input
                onChange={handleFname}
                type="text"
                name="name"
                id="name"
                className="form-control form-input" placeholder="First Name"
              />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
              <input
                onChange={handleLname}
                type="text"
                name="lastname"
                id="lastname"
                className="form-control form-input" placeholder="Last Name"
              />
              </div>
            </div>
          </div>
          <div className="form-group">
            
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              id="email"
              className="form-control form-input" placeholder="Email"
            />
          </div>
          <div className="form-group">
            
            <input
              onChange={handlePass}
              type="password"
              name="password"
              id="password"
              className="form-control form-input" placeholder="Password"
            />
          </div>
          <div className="form-group">
            
            <input
              onChange={handlePass2}
              type="password"
              name="password2"
              id="password2"
              className="form-control form-input" placeholder="Confirm Password"
            />
          </div>
          <p className="para">By providing your personal information, you agreed to our Privacy & Cookies Policy.</p>
          <button
            type="submit"
            className="btn btn-about mt-3 w-100"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <p className="para text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      </div>
    </section>
  );
};

export default Register;
