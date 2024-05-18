import { API_BASE } from "../constants.mjs"

import { authFetch } from "../authFetch.mjs"

const action = "/auction/listings";
const method = "POST";

export async function createListing(listingData){
    const createListingURL = API_BASE + action;

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(listingData)
    });

    console.log(listingData);

    return await response.json();
}