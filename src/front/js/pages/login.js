import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.sass";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			<div className="d-flex flex-column justify-content-around align-items-center login--container">
				<h4>Login form</h4>
				<div className='w-100 d-flex flex-column justify-content-center align-items-center gap-3'>
					<input type="text" name="email" id="email" placeholder="Email" className='login--input' value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" name="password" id="password" placeholder="Password" className='login--input' value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button className='login--button'>Login</button>
			</div>
		</div>
	);
};
