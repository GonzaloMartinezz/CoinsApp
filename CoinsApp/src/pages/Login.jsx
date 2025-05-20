import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    //estados para cada uno de los campos//
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
      setEmail(e.target.value);
    }
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
   

      const user = {
        email: "gonza@gonza.com",
        password: "123456",

      }

      if(!email || !password){
        setShowAlert(true);
      }

      //validaciones//
      if(email === user.email && password === user.password){
        navigate("/");
      }else{
        setShowAlert(true);
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
                                name='email'
                                value={email} 
                                onChange={handleChange}                      
                                />
                            </div>
                            <div className="mb-3 d-grid">
                                <label>Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                name='password'
                                value={password} 
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }/>
                            </div>
                            {showAlert && <p className='bg-danger text-light text-center m-3'>Faltan datos,complete todos los campos</p>}
                           
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