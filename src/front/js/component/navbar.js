import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext'
import { useAuth0 } from "@auth0/auth0-react";


export const Navbar = () => {
	const { loginWithRedirect } = useAuth0();
	const { logout } = useAuth0();
	const { isAuthenticated } = useAuth0();
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/private",
			},
		});
	};
	const handleSignUp = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/login",
			},
			authorizationParams: {
				screen_hint: "signup",
			},
		});
	};

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		});
	};
	const handlePrivate = () => {
		navigate('/private')
	}

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/" style={{textDecoration: 'none'}}>
					<span className="navbar-brand mb-0 h1 text-light"  ><img src="https://static-00.iconduck.com/assets.00/auth0-icon-1832x2048-ewzjrdwk.png" style={{width: '18px', height: '18px'}} />{' '}Auth0 POC</span>
				</Link>
				<div className="ml-auto d-flex gap-2">
					{!isAuthenticated &&
						<>
							<button className="btn text-light font-bold" style={{ backgroundColor: 'teal' }} onClick={handleLogin}>Login</button>
							<button className="btn text-light font-bold" style={{ backgroundColor: 'teal' }} onClick={handleSignUp}>SignUp!</button>
						</>
					}
					{isAuthenticated && <>
						<button className="btn text-light font-bold" style={{ backgroundColor: '#e17b26' }} onClick={handleLogout}>Logout</button>
						<button className="btn text-light font-bold" style={{ backgroundColor: '#e17b26' }} onClick={handlePrivate}>Private</button>
					</>}
					
				</div>
			</div>
		</nav>
	);
};
