import React from "react";
import { useState } from 'react'
import validation from "../validation"
import "../index.css"

function Form({ login }) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
    }
   
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div>
                <label
                htmlFor="email"
                className="form-label"
                > email:</label>
                <br />
                <input
                    name="email"
                    type="text"
                    value={userData.email}
                    onChange={handleChange}
                    className="form-input"
                />
                <p className="form-error">{errors.email}</p>
            </div>

            <div>
                <label 
                htmlFor="password"
                className="form-label"
                >password:</label>
                <br />
                <input
                    name="password"
                    type={"password"}
                    value={userData.password}
                    onChange={handleChange}
                    className="form-input"
                />
                <p className="form-error">{errors.password}</p>
            </div>
            <br />
            <button>Submit</button>

        </form>
        </div>
    )


}

export default Form