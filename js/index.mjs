import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as listing from "./API/listings/index.mjs";

setRegisterFormListener();
setLoginFormListener();

const path = location.pathname;

if (path === '/profile/login'){
    setLoginFormListener();
} else if (path === '/profile/register'){
    setRegisterFormListener();
}

// listing.createListing()
// listing.updateListing()
// listing.removeListing()
// listing.getListing()
listing.getListings().then(console.log)