import { createListing } from "../API/listings/index.mjs";

export function setCreateListingFormListener(){
    const form = document.querySelector("#createListing");

    if (form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            const listing = Object.fromEntries(formData.entries());
            console.log(listing);

            //Send it to the API
            createListing(listing)
        });
    }
}