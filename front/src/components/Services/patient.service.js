import axios from "axios";



const API_PATIENT= "http://localhost:8080/api/patient";




const createPatient = (lastName, name, email, adresse, telephone, securityNumber, status, pathology ) =>{

    return axios.post(API_PATIENT, {

        lastName, name, email,

        adresse, telephone, securityNumber, status, pathology

      });

};



export default {

    createPatient,

}