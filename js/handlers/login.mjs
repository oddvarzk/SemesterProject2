import { login } from "../API/auth/login.mjs";

export function setLoginFormListener(){
    const form = document.querySelector("#loginForm");

    if (form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            const profile = Object.fromEntries(formData.entries());
            console.log(profile);

            //Send it to the API
            login(profile)
        });
    }
}