import { API_BASE } from "../constants.mjs"

import { authFetch } from "../authFetch.mjs"

const action = "/auction/listings";
const method = "PUT";

export async function updateListing(listingData){
    if(!listingData.id){
        throw new Error("No id provided");
    }

    const updateListingURL = `${API_BASE}${action}/${listingData.id}`;

    const response = await authFetch(updateListingURL, {
        method,
        body: JSON.stringify(listingData)
    });

    console.log(listingData);

    return await response.json();
}