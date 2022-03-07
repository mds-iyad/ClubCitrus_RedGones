const mongoose = require('mongoose');
const express = require('express');
const Patient = require('./models/Patient')
const userRoutes = require('./routes/user');
const patientRoutes = require('./routes/patient');
const path = require('path');
const router = express.Router();
const cors = require('cors')
var bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://antoinemdk:clubcitrusmds69@cluster0.yht2k.mongodb.net/ClubCitrus?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  const app = express();
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors())
  app.use(express.static(path.join(__dirname, '../front/build')))
  app.post('/api/patient', (req, res,) => {

    const patient = new Patient({

      lastName : req.body.lastName,

       name: req.body.name,

       email: req.body.email,

       adresse: req.body.adresse,

       telephone : req.body.telephone,

       securityNumber: req.body.securityNumber,

       status: req.body.status,

      pathology: req.body.pathology

    });

    patient.save()

      .then(() => res.status(201).json({ message: 'Patient enregistré !'}))

      .catch(error => res.status(400).json({ error }));

  });
app.get('/api/patient', (req, res, next) => {
  Patient.find()
    .then(patients => res.status(200).json(patients))
    .catch(error => res.status(400).json({ error }));
});
app.use('/api/auth', userRoutes);
//app.use('api/patient', patientRoutes);
module.exports = app;