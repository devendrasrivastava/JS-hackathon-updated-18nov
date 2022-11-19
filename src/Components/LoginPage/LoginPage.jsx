import React from 'react'
import './LoginPage.css'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate();
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:values =>{
        console.log("submit");
        fetch("http://localhost:9000/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            console.log(data.access_token);

            if(data.status===200){
                localStorage.setItem("jwt_token",data.access_token)  //use session storage to remove token on closure of browser
                localStorage.setItem("userName", JSON.stringify(data.userData)) //to get data of user in the state, we can now print user details when they log in
                navigate("/")
                
            }
        })
        },
        validationSchema:yup.object().shape({
            email:yup.string()
            .email("Invalid email address")
            .required("Email cannot be left blank"),
            password:yup.string()
            .required("Password cannot be left blank"),
            
        })
    })

    return (
        <div>
            <div className="container user-login-form mx-auto">

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img src="./assets/nw logo.png" id="loginNwLogo" alt="" className="img-fluid" />
                        <h1>Login Here</h1>

                        <form onSubmit={formik.handleSubmit} id="loginFormId">
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                                <input type="email" id="email" name="email" className="form-control form-control-sm" placeholder="Enter Your Email"
                                    aria-label="Username" aria-describedby="basic-addon1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                    {formik.errors.email && formik.touched.email? <span className='text-danger'>{formik.errors.email}</span>:null}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                <input type="password" id="password" name="password" className="form-control form-control-sm" placeholder="Password"
                                    aria-label="Username" aria-describedby="basic-addon1" onChange={formik.handleChange}onBlur={formik.handleBlur} value={formik.values.password} />
                            {formik.errors.password && formik.touched.password? <span className='text-danger'>{formik.errors.password}</span>:null}                                   
                            </div>

                            <button type="submit" className="btn btn-primary" id="loginSubmitButton">Login</button><br />

                            <Link to="/signup">Forgot password</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
