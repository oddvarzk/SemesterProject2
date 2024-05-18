
import { API_BASE } from "../constants.mjs"

import { authFetch } from "../authFetch.mjs"

const action = "/auction/listings";

export async function getListings(){
    const getListingsURL = `${API_BASE}${action}`;

    const response = await authFetch(getListingsURL);



    return await response.json();
}

export async function getListing(id){
    if(!id){
        throw new Error("No id provided");
    }

    const getListingURL = `${API_BASE}${action}${id}`;

    const response = await authFetch(getListingURL);

    console.log(listingData);

    return await response.json();
}