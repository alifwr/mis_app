import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./LoginPage.css";
import axios from "axios";

const RegisterPage = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [usernameShow, setUsernameShow] = useState(false);
  const [emailShow, setEmailShow] = useState(false);
  const [passShow, setPassShow] = useState(false);

  const history = useHistory();

  const pressRegis = () => {
      console.log(username)
    // axios({
    //   url: "https://alif.projekbareng.com/api/register",
    //   method: "post",
    //   data: {
    //     username: username,
    //     email: email,
    //     password: password,
    //   },
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   let data = response.data;
    //   console.log(data)
    //   if (data.message === "success") {
    //     history.replace("/login");
    //   } else {
    //       console.log(data.errors)
    //     for (let key in data.errors) {
    //       if (key === "username") {
    //         setUsernameErr(data.errors[key][0]);
    //         setUsernameShow(true);
    //       } else if (key === "email") {
    //         setEmailErr(data.errors[key][0]);
    //         setEmailShow(true);
    //       } else if (key === "password") {
    //         setPassErr(data.errors[key][0]);
    //         setPassShow(true);
    //       }
    //     }
    //   }
    // });
  };

  return (
    <div className="App">
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="form-outline mb-4">
                  <input
                    type="username"
                    id="form3Example2"
                    name="username"
                    class="form-control form-control-lg"
                    placeholder="Masukan Username"
                    onChange={(text)=>setUsername(text)}
                  />
                  <div class="alert alert-warning" role="alert">
                    {usernameErr}
                  </div>
                  {/* <label class="form-label" for="form3Example3">
                    Email address
                  </label> */}
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    name="email"
                    value={username}
                    class="form-control form-control-lg"
                    placeholder="Masukan Email"
                  />
                  {/* <label class="form-label" for="form3Example3">
                    Email address
                  </label> */}
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    name="password"
                    class="form-control form-control-lg"
                    placeholder="Masukan Password"
                    onChange={(text)=>setPassword(text)}
                  />
                  {/* <label class="form-label" for="form3Example4">
                    Password
                  </label> */}
                </div>

                {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">
                    Forgot password?
                  </a>
                </div> */}

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={() => pressRegis()}
                    // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  >
                    Register
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Sudah memiliki akun?{" "}
                    <a href="/login" class="link-danger">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
