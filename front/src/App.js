import React from 'react'
import './App.css';
import PriceCard from './components/PriceCard'
import { Container } from '@mui/material';
import Nav  from './components/Nav';
import Landing from './components/Landing';
import Services from './components/Services';
import Offers from './components/Offers';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Employe from './components/Employe';
import PageForm from './components/Form/PageForm';
import Association from './components/Association';
import NotFound from './components/404';
import Profile from './components/Profile';



function App() {


  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/Employe" element={<Employe />} />
      <Route path="/form" element={<PageForm />} />
      <Route path="/association" element={<Association />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}


function Home() {
  return(
    <div>
      <Nav />

      <Landing/>

      <Container>
        <Offers/>
        <div id='offers' style={{
          display:"flex",
          justifyContent:"space-evenly"
        }}>
          
          <PriceCard title={"Version d'essai"} prix={'Offert'} commentaire={"pendant 30 jours (puis 9.99€/mois)"}
            feature1={"5 Utilisateur"} feature2={"Suivi d'un patient"} feature3={"30 jours gratuit"} linkto={"/signup"} button={"Choisir"}/>

          <PriceCard title={'Basic'} prix={'9.99 €'} commentaire={"par mois"}
          feature1={"10 Utilisateurs"} feature2={"Suivi d'un patient"} feature3={"Service client"} linkto={"/signup"} button={"Choisir"}/>
          <PriceCard title={'Pro'} prix={'Nous Contacter'} button={"Contacter"}  commentaire={"Prix en fonction de la demande"}
            feature1={"Utilisateurs illimités"} feature2={"Suivi des patients"} linkto={"/form"} feature3={"Service client"}/>
        </div>
        
        <Services/>
      </Container>
    </div>
  );
}

export default App;
