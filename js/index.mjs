import * as listeners from "./handlers/index.mjs";

// Set the form listeners
listeners.setRegisterFormListener();
listeners.setLoginFormListener();

const path = location.pathname;

if (path === '/profile/login'){
    listeners.setLoginFormListener();
} else if (path === '/profile/register'){
    listeners.setRegisterFormListener();
} else if (path === '/listing/create'){
    listeners.setCreateListingFormListener();
}
