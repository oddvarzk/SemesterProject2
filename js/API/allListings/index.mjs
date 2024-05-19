import * as listingMethods from "../../API/listings/index.mjs";
import * as templates from "../../templates/index.mjs";

export async function getAllListings(){
    const listings = await listingMethods.getListings();
    console.log(listings);

    const container = document.querySelector("#allListingsContainer");
    templates.renderListingTemplates(listings, container);
}
getAllListings();
