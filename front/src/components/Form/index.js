import React from "react";
import { useState } from "react";
import { FormCard, FormContent, Slogan } from "./index.CSS";

function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      street: "",
      city: "",
      postcode: "",
      jobs: "",
      comments: "",    
    });
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
    const next = () => {
      setCurrentStep(currentStep + 1);
    };
    const back = () => {
      setCurrentStep(currentStep - 1);
    };
    switch (currentStep) {
        case 1:
            return(
                <Step1
                data={formData} 
                handleChange={handleChange} 
                next={next} 
              />
               
            )
      case 2:
        return (
          <Step2
            data={formData} 
            handleChange={handleChange} 
            next={next} 
            back={back}
          />
        );
      case 3:
        return (
          <Step3
            data={formData}
            handleChange={handleChange}
            next={next}
            back={back}
          />
        );
      case 4:
        return (
          <Step4
            data={formData}
            handleChange={handleChange}
            next={next}
            back={back}
          />
        );
        case 5:
            return(
                <Step5
                data={formData}
                handleChange={handleChange}
                next={next}
                back={back}
              />  
            )
      default:
        return <div>
            <h1>Résumé de vos informations</h1>
            <Submit data={formData} back={back} />
        </div>
        ;

    }
  };

const Step1 = (props) => {
    const { data, handleChange, next } = props;
    return (
        <div><Slogan>Dites nous en plus sur vous</Slogan>
        <div>
          <p style={{width:"600px"}}>Vous avez choisi la formule pro et nous vous en remercions. Afin de mieux cerner vos attentes, 
            nous vous demandons de fournir des 
            informations vous concernant. 
          </p>
            <br></br>
            <a style={{marginTop:"20px"}} className="btn btn-outline-dark start" onClick={next}>Suivant</a>
        </div>
        </div>
        
    )
}
const Step2 = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <FormCard>
            <FormContent>
                <Slogan>Dites nous en plus sur vous</Slogan>
      <form>
        <p>
          <label style={{color:"black"}} htmlFor="name">Votre nom:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label style={{color:"black"}} htmlFor="email">Votre mail:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </p>
        <a className="btn btn-outline-dark start" onClick={back}>Retour</a> 
        <a className="btn btn-outline-dark start" onClick={next}>Suivant</a>

      </form>
      </FormContent>
      </FormCard>
    );
  };

  

  const Step3 = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <FormCard>
            <FormContent>
      <form>
        <p>
          <label style={{color:"black"}} htmlFor="street">Rue:</label>
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={handleChange}
          />
        </p>
        <p>
          <label style={{color:"black"}} htmlFor="city">Ville:</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
          />
        </p>
        <p>
          <label style={{color:"black"}} htmlFor="postcode">Code Postal:</label>
          <input
            type="number"
            name="postcode"
            value={data.postcode}
            onChange={handleChange}
          />
        </p>
        <a className="btn btn-outline-dark start" onClick={back}>Retour</a> 
        <a className="btn btn-outline-dark start" onClick={next}>Suivant</a>
      </form>
      </FormContent>
      </FormCard>
    );
  };

  const Step4 = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <FormCard>
        <FormContent>
        
      <form>
        <p>
          <label style={{color:"black"}} htmlFor="jobs">Vous êtes:</label>
          <select
          value={data.jobs}
          onChange={handleChange}>

          <option>Professionnels de santé</option>
          <option>Ressources humaines</option>
          <option>Autres</option>
      
      
            
            </select>
          <a className="btn btn-outline-dark start" onClick={back}>Retour</a> 
        <a className="btn btn-outline-dark start" onClick={next}>Suivant</a>
        </p>
          
      </form>
      </FormContent>
      </FormCard>
    );
  };
  const Step5 = (props) => {
    const { data, handleChange, next, back } = props;
    return (
        <FormCard>
        <FormContent>
        
      <form>
        <p>
          <label htmlFor="comments">Un commentaire ?</label>
          <textarea
            name="comments"
            value={data.comments}
            onChange={handleChange}
          ></textarea>
        </p>      
        <a className="btn btn-outline-dark start" onClick={back}>Retour</a> 
        <a className="btn btn-outline-dark start"onClick={next}>Suivant</a>
      </form>
      </FormContent>
      </FormCard>
    );
  };

  const Submit = (props) => {
    const { data } = props;
    const listItems = Object.entries(data).map(([key, value]) => (
      <li>
        <strong>{key}:</strong> {value}
      </li>
    ));
    return (
      <div>
          <FormCard>
              <FormContent>
        <ul>{listItems}</ul>
        <a className="btn btn-outline-dark start"type="submit">Submit</a>
        </FormContent>
        </FormCard>
      </div>
    );
  };



export default Form;