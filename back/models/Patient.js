const mongoose = require('mongoose');



const patientSchema = mongoose.Schema({

  email: { type: String, required: true },

  lastName: { type: String, required: true },

  name: { type: String, required: true },

  adresse: { type: String, required: true },

  telephone: { type: Number, required: true },

  securityNumber: { type: Number, required: true },

  status: { type: String, required: true},

  pathology: { type: String, required: true },

});



module.exports = mongoose.model("Patients", patientSchema);