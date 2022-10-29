import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithConfig = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname)
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={audience}
            useRefreshTokens
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithConfig;