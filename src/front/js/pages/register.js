import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.sass";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [confirmEmail, setConfirmEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [emailMatch, setEmailMatch] = useState(true)
	const [passwordMatch, setPasswordMatch] = useState(true)

	const handleRegistration = () => {
		setPasswordMatch(true)
		setEmailMatch(true)
		if (password != confirmPassword || email != confirmEmail) {
			if (password != confirmPassword) setPasswordMatch(false);
			if (email != confirmEmail) setEmailMatch(false);
			return
		}
	}
	return (<>
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			{/* <p style={{ backgroundColor: 'yellow' }}>Please, register first to try out the authentication system project!!</p> */}
			<div className="d-flex flex-column justify-content-around align-items-center register--container">
				<h4>Sign up form</h4>
				<div className='w-100 d-flex flex-column justify-content-center align-items-center gap-3'>
					<input type="text" name="name" id="name" placeholder="Name" className='register--input' value={name} onChange={(e) => setName(e.target.value)} />
					<input type="text" name="email" id="email" placeholder="Email" className='register--input' value={email} onChange={(e) => setEmail(e.target.value)} />
					{!emailMatch && <p className='register--validator'> Emails dont match!</p>}
					<input type="text" name="email" id="email" placeholder="Repeat email" className='register--input' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
					<input type="password" name="password" id="password" placeholder="Password" className='register--input' value={password} onChange={(e) => setPassword(e.target.value)} />
					{!passwordMatch && <p className='register--validator'> Passwords dont match!</p>}
					<input type="password" name="password" id="password" placeholder="Repeat password" className='register--input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
				</div>
				<button className='register--button' onClick={handleRegistration}>Sign up!</button>
			</div>
		</div >
	</>
	);
};
