import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({cambiarLogin}) => {


  
   const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const [showAlert, setShowAlert] = useState(false);
 
   const handleChange = (e) => {
    setShowAlert (false)  
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
    const handleSubmit = (e) => {
      e.preventDefault();

    const user = {
      email: "gonza@gonza.com",
      password: "123456"
    }

      if (!email || !password) {
        alert ("Faltan datos en el campo!");
        setShowAlert(true);
      }

      //validar el usuario REGISTRADO//

      if(email === user.email && password === user.password){       
        cambiarLogin();
        navigate("/");
      }else{
        alert ("Email o password incorrectos");
      } 
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h3>Sing in to <i className='fa fa-btc' aria-hidden="true"></i>CoinsApp</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6 offset-md-3">
                        <form onsubmit={handleSubmit}>
                            <div className="mb-3 d-grid">
                                <label>Email </label>
                                <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                value={formValues.email} 
                                onChange={handleChange} 
                                required
                                />
                            </div>
                            <div className="mb-3 d-grid">
                                <label>Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                name="password"
                                value={formValues.password} 
                                onChange={handleChange}
                                required
                                />
                            </div>

                            {showAlert && (
                                <p className="bg-danger text light text-center alert alert-danger" role="alert">
                                    Faltan datos,complete todos los campos !
                                </p>
                            )}
                            <div className='mb-3 d-grid'>
                                <button type="submit" className="btn btn-success">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login