import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.sass";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Private = () => {
    const { user } = useAuth0();
    const { store } = useContext(Context)

    if (!user) return null
    return (<>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'teal', color: 'white' }}>
            <h2>Private Profile Page</h2>
            <h1 style={{ backgroundColor: 'teal' }}>Welcome {user.name} </h1> 
            <img
                src={user.picture}
                alt="Profile"
              />
            <h4>Your email: {user.email}</h4>
            <div className="border rounded col-10">Decoded ID Token
            <h5>
                {JSON.stringify(user, null, 2)}
              </h5>
            </div>

        </div>
    </>)
} 