const Patient = require('../models//Patient');


exports.createPatient = (req, res, next) => {
    const patient = new Patient({
      lastName: req.body.lastName,
      name: req.body.name,
      adresse: req.body.adresse,
      telephone: req.body.telephone,
      securityNumber: req.body.securityNumber,
      status: req.body.status
    });
    patient.save().then(
      () => {
        res.status(201).json({
          message: 'Vous abez ajouté un patient à votre carnet'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.modifyPatient = (req, res, next) => {
    const patient = new Patient({
      _id: req.params.id,
      lastName: req.body.lastName,
      name: req.body.name,
      adresse: req.body.adresse,
      telephone: req.body.telephone,
      securityNumber: req.body.securityNumber,
      status: req.body.status
    });
    Patient.updateOne({_id: req.params.id}, patient).then(
      () => {
        res.status(201).json({
          message: 'Patient correctement modifié'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.deletePatient = (req, res, next) => {
    Patient.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Supprimé!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.getAllPatient= (req, res, next) => {
    Patient.find().then(
      (patients) => {
        res.status(200).json(patients);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };