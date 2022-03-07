import React, { useEffect, useState, useRef } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import PatientAdd from '../Services/patient.service';
import CheckButton from "react-validation/build/button";
// regex for email validation
const validateEmail = (email) => {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}
const EmployeCRUD = () =>
{
  const [user, setUser] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  let columns = [
    { title: 'Nom', field: 'lastName' },
    { title: 'Prénom', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Adresse', field: 'adresse' },
    { title: 'N° de Siret', field: 'siretNumber' },
    { title: 'Profession', field: 'profession' }
  ]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
//    function BasicModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [pathology, setPathology] = useState("");
//     const [adresse, setAdresse] = useState("");
//     const [telephone, setTelephone] = useState("");
//     const [status, setStatus] = useState("");
//     const [securityNumber, setSecurityNumber] = useState("");
//     const checkBtn = useRef();
//     const form = useRef();
//     const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//     const onchangeEmail = (e) => {
//       const email = e.target.value;
//       setEmail(email);
//     };
//     const onchangeName= (e) => {
//       const name = e.target.value;
//       setName(name);
//     };
//     const onchangelastName = (e) => {
//       const lastName= e.target.value;
//       setLastName(lastName);
//     };
//     const onchangeStatus = (e) => {
//       const status = e.target.value;
//       setStatus(status);
//     };
//     const onchangeAdresse = (e) => {
//       const adresse = e.target.value;
//       setAdresse(adresse);
//     };
//     const onchangeSecurityNumber = (e) => {
//       const securityNumber = e.target.value;
//       setSecurityNumber(securityNumber);
//     };
//     const onchangePathology = (e) => {
//       const pathology = e.target.value;
//       setPathology(pathology);
//     };
//     const onchangeTelephone = (e) => {
//       const telephone = e.target.value;
//       setTelephone(telephone);
//     };
//     const required = (value) => {
//       if (!value) {
//         return (
//           <div className="alert alert-danger" role="alert">
//             Ce champ est requis !
//           </div>
//         );
//       }
//     };
//     const handleLogin = (e, props) => {
//       e.preventDefault();
//       setMessage("");
//       setLoading(true);
//       form.current.validateAll();
//       if (checkBtn.current.context._errors.length === 0) {
//         PatientAdd.createPatient(email).then(
//           () => {
//             window.location.reload();
//           },
//           (error) => {
//             const resMessage =
//               (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//               error.message ||
//               error.toString();
//             setLoading(false);
//             setMessage(resMessage);
//           }
//         );
//       } else {
//         setLoading(false);
//       }
//     };
//     return (
//       <div>
//         <Button onClick={handleOpen}>Ajouter un user</Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Form onSubmit={handleLogin} ref={form}>
//            <Input
//             type="text"
//             className="form-control"
//             name="name"
//             value={name}
//             onChange={onchangeName}
//             validations={[required]}
//             placeholder="Nom"
//           />
//            <Input
//             type="text"
//             className="form-control"
//             name="lastName"
//             value={lastName}
//             onChange={onchangelastName}
//             validations={[required]}
//             placeholder="Prénom"
//           />
//               <Input
//             type="text"
//             className="form-control"
//             name="email"
//             value={email}
//             onChange={onchangeEmail}
//             validations={[required]}
//             placeholder="Email"
//           />
//            <Input
//             type="text"
//             className="form-control"
//             name="adresse"
//             value={adresse}
//             onChange={onchangeAdresse}
//             validations={[required]}
//             placeholder="Adresse"
//           />
//            <Input
//             type="text"
//             className="form-control"
//             name="telephone"
//             value={telephone}
//             onChange={onchangeTelephone}
//             validations={[required]}
//             placeholder="Téléphone"
//           />
//            <Input
//             type="text"
//             className="form-control"
//             name="securityNumber"
//             value={securityNumber}
//             onChange={onchangeSecurityNumber}
//             validations={[required]}
//             placeholder="N° de Sécurité Sociale"
//           />
//            <Input
//             type="text"
//             className="form-control"
//             name="pathology"
//             value={pathology}
//             onChange={onchangePathology}
//             validations={[required]}
//             placeholder="Pathologie"
//           />
//            <Input
//             type="text"
//             className="form-control"
//             name="status"
//             value={status}
//             onChange={onchangeStatus}
//             validations={[required]}
//             placeholder="Statut du patient"
//           />
//                <Button text="Connexion">
//           <button className="button" disabled={loading}>
//             {loading && <span className="spinner"></span>}
//             <span>Ajouter</span>
//           </button>
//         </Button>
//         {message && (
//           <div className="form-group">
//             <div className="alert alert-danger" role="alert">
//               Echec
//             </div>
//           </div>
//         )}
//         <CheckButton style={{ display: "none" }} ref={checkBtn} />
//             </Form>
//           </Box>
//         </Modal>
//       </div>
//     );
//   }
  useEffect(async () => {
    const fetchUser = async () =>{
      const response = await fetch('http://localhost:8080/api/user')
      const userData = await response.json();
      setUser(userData);
    }
    fetchUser();
  }, []);
  //function for updating the existing row details
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field")
    }
    if (newData.username === "") {
      errorList.push("Try Again, You didn't enter the Username field")
    }
    if (newData.email === "" || validateEmail(newData.email) === false) {
      errorList.push("Oops!!! Please enter a valid email")
    }
    if (newData.phone === "") {
      errorList.push("Try Again, Phone number field can't be blank")
    }
    if (newData.website === "") {
      errorList.push("Try Again, Enter website url before submitting")
    }
    if (errorList.length < 1) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${newData.id}`, newData)
        .then(response => {
          const updateUser = [...user];
          const index = oldData.tableData.id;
          updateUser[index] = newData;
          setUser([...updateUser]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }
  //function for deleting a row
  const handleRowDelete = (oldData, resolve) => {
    axios.delete(`http://localhost:8080/${oldData.id}`)
      .then(response => {
        const dataDelete = [...user];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setUser([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }
  //function for adding a new row to the table
  const handleRowAdd = (newData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field")
    }
    if (newData.username === "") {
      errorList.push("Try Again, You didn't enter the Username field")
    }
    if (newData.email === "" || validateEmail(newData.email) === false) {
      errorList.push("Oops!!! Please enter a valid email")
    }
    if (newData.phone === "") {
      errorList.push("Try Again, Phone number field can't be blank")
    }
    if (newData.website === "") {
      errorList.push("Try Again, Enter website url before submitting")
    }
    if (errorList.length < 1) {
      axios.post(`https://jsonplaceholder.typicode.com/users`, newData)
        .then(response => {
          let newUserdata = [...user];
          newUserdata.push(newData);
          setUser(newUserdata);
          resolve()
          setErrorMessages([])
          setIserror(false)
        })
        .catch(error => {
          setErrorMessages(["Cannot add data. Server error!"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }
  return (
    <div className="app">
      <h1>Liste des employés</h1> <br /><br />
      <MaterialTable
        title="employe"
        columns={columns}
        data={user}
        options={{
          headerStyle: { borderBottomColor: 'red', borderBottomWidth: '3px' },
          actionsColumnIndex: -1
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              handleRowUpdate(newData, oldData, resolve);
            }),
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              handleRowAdd(newData, resolve)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            }),
        }}
      />
      <div>
        {iserror &&
          <Alert severity="error">
            <AlertTitle>ERROR</AlertTitle>
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>
            })}
          </Alert>
        }
      </div>
    </div>
  );
}
export default EmployeCRUD;