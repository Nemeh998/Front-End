import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-h7swp2dn.us.auth0.com"
    clientId="avJl6kgsYaxPDqbk92A7KTR5JOonG6qG"
    redirectUri={window.location.origin}
   
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);