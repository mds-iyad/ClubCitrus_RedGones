import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./Login.css";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../Footer";
import svg2 from '../../assets/images/img-2.svg'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis !
      </div>
    );
  }
};



const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Le mot de passe doit faire entre 6 et 40 caractères
      </div>
    );
  }
};

function onChange(value) {
  console.log("Captcha value:", value);
}

const Signup = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");


  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setlastName(lastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

  };

    
const Slogan = styled.h1`
${tw`
  font-bold
  text-2xl
  xl:text-4xl
  sm:text-3xl
  md:text-5xl
  lg:font-black
  md:font-extrabold
  text-black
  mb-4
  sm:leading-snug
  lg:leading-normal
  xl:leading-relaxed
`};
`;

  return (
    <div className="login">
      <div class="form-content-left">
        <img class="form-img" src={svg2} alt="spaceship"/>
        
      </div>


      {/* <Slogan>Créez votre compte</Slogan> */}
      <div className="card card-container form-content-right">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={lastName}
                  onChange={onChangeLastName}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="name">Prénom</label>
                   <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required]}
                />
              </div>
                <label htmlFor="email">Email</label>
                <Input
                  type="mail"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required]}
                />
              
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div>
              </div>

              <div className="form-group">
                <button text="S'enregistrer">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Signup;