import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0ProviderWithNavigate } from './component/auth0-provider-with-navigate'
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./component/authentication-guard";
import { Loader } from "./pages/component/loader";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Signup } from "./pages/register";
import { Private } from "./pages/private";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import "../styles/layout.sass";

//create your first component
const Layout = () => {
    const { isLoading } = useAuth0();
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

  
    return (
        <div className='layout--container'>
            <BrowserRouter basename={basename}>
                <Auth0ProviderWithNavigate>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            <Route element={<Home />} path="/" />
                            
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<AuthenticationGuard component={Private} />} path="/private" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<AuthenticationGuard component={Single} />} path="/single/:theid" />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                        <Footer />
                    </ScrollToTop>
                </Auth0ProviderWithNavigate>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
