import React, { useRef, useState } from "react";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import styled from "styled-components";
import tw from "twin.macro";
import "./Login.css";
import img3 from "../../assets/images/img-3.svg"
import Nav from "../Nav";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis !
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onchangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
 
  const handleLogin = (e, props) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

};

    const Slogan = styled.h1`
    color:white;
    font-size: 1rem;
    `;
  

  return (
    <div>
      <Nav />
          <div className="login">
        <div className="backgroundImage">
          <img style={{height:"600px"}} src={img3} />
        </div>
    <div className="card card-container">
      <Slogan > Connectez-vous </Slogan>
      <Form onSubmit={handleLogin} ref={form}>
        <div className="form-group">
        <label htmlFor="email">Email</label>

          <Input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={onchangeEmail}
            validations={[required]}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>

          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
            placeholder="Mot de passe"
          />
        </div>
        <button className="form-input-btn" type="Connexion">
          {/* <button  disabled={loading}> */}
            {loading && <span className="spinner"></span>}
            Connexion
          {/* </button> */}
        </button>
        
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              Identifiants incorrects
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
      <div>
        <a style={{color:"white", textDecoration:"underline"}} href="/forgot_password">Mot de passe oublié</a>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Login;