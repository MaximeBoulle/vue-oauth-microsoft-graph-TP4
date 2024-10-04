// file src/lib/microsoftGraph.js
import * as msal from '@azure/msal-browser'
/**
* List the requested scopes (aka. the requested permissions)
*/
const requestedScopes = {
    scopes: ["User.Read"]
}
const msalInstance = new msal.PublicClientApplication({
    auth: {
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
    },
    cache: {
        cacheLocation: "sessionStorage"
    }
})

let isInitialized = false;

export async function initializeMsal() {
    if (!isInitialized) {
        await msalInstance.initialize();
        isInitialized = true;
    }
}

export async function signInAndGetUser () {
    await initializeMsal();

    const authResult = await msalInstance.loginPopup(requestedScopes)
    msalInstance.setActiveAccount(authResult.account)
    return authResult.account
}