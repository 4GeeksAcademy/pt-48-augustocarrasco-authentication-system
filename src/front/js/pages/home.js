import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 text-light">
			<h1>Hello There!!</h1>
			<p>
				Made with Auth0 SDK, try out the SignUp and Login features! 
			</p>
			
			
		</div>
	);
};
