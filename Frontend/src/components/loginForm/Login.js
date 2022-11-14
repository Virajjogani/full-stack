import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import "./loginform.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function Login() {
    const [Data, setData] = useState({})
    const navigate = useNavigate()

    const handlechange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("https://hotelbookingapp-api.herokuapp.com/api/auth/login", Data).then((res) => {
            console.log(res.status, "=-=-=-=-=-=-=-");
            if (res.status === 200) {
                toast.success("Login Successfully")
                navigate("/")
                const token = res.data.token
                sessionStorage.setItem("token", token)
            }
        })
    }

    return (
        <>
            <div className="container px-0 mb-0">
                <form className="mainform" onSubmit={handlesubmit}>
                    <h1 className="text-center">
                        <strong>Login Form</strong>
                    </h1>
                    <div className="form-outline mb-4 my-3">
                        <input
                            type="name"
                            id="form2Example1"
                            name="username"
                            required
                            className="form-control"
                            onChange={handlechange}
                        />
                        <label className="form-label" htmlFor="form2Example1">
                            Username
                        </label>
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            id="form2Example2"
                            name="password"
                            required
                            className="form-control"
                            onChange={handlechange}

                        />
                        <label className="form-label" htmlFor="form2Example2">
                            Password
                        </label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    required
                                    id="form2Example31"
                                />
                                <label className="form-check-label" htmlFor="form2Example31">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <Link to="/resetpassword">Forgot password?</Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-outline-dark btn-large btn-block mb-4"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="text-center">
                        <p>
                            Not a member? <Link to="/signup">Register</Link>
                        </p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fa fa-facebook-f" style={{ color: "black" }}></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fa fa-google" style={{ color: "black" }}></i>
                        </button>

                        <button type="button" className="btn btn-link-dark btn-floating mx-1">
                            <i className="fa fa-twitter" style={{ color: "black" }}></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fa fa-github" style={{ color: "black" }}></i>
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Login
