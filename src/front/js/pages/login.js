import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.sass";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
	const { loginWithRedirect } = useAuth0();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/private",
			},
		});
		actions.changeLoginState();
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

	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			<p style={{ backgroundColor: 'teal', color: 'white' }}>Please, register first to try out the authentication system project!!</p>
			<div className="d-flex flex-column justify-content-around align-items-center login--container">
				<h4>Login form</h4>
				<div className='w-100 d-flex flex-column justify-content-center align-items-center gap-3'>
					<input type="text" name="email" id="email" placeholder="Email" className='login--input' value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" name="password" id="password" placeholder="Password" className='login--input' value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className="d-flex flex-column w-100 gap-2 justify-content-center align-items-center">
					<button className='login--button' onClick={handleLogin}>Login</button>

					<span className='login--register-span' onClick={handleSignUp}>New here? Register now!</span>

				</div>
			</div>
		</div>
	);
};
