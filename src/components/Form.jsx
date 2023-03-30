import React from "react";
import { useState } from 'react'
import validation from "../validation"

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"> email:</label>
                <br />
                <input
                    name="email"
                    type="text"
                    value={userData.email}
                    onChange={handleChange}
                />
                <p>{errors.email}</p>
            </div>

            <div>
                <label htmlFor="password">password:</label>
                <br />
                <input
                    name="password"
                    type={"password"}
                    value={userData.password}
                    onChange={handleChange}
                />
                <p>{errors.password}</p>
            </div>
            <br />
            <button>Submit</button>

        </form>
    )


}

export default Form