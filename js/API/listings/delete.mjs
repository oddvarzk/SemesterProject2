
import { API_BASE } from "../constants.mjs"

import { authFetch } from "../authFetch.mjs"

const action = "/auction/listings";
const method = "delete";

export async function removeListing(id){
    if(!id){
        throw new Error("Delete requires a post id");
    }

    const removeListingURL = `${API_BASE}${action}/${id}`;

    const response = await authFetch(removeListingURL, {
        method
    });

    console.log(listingData);

    return await response.json();
}