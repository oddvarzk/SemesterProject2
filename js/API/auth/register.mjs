import { API_BASE } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

export async function register(profile) {
    console.log(action);
    const registerURL = API_BASE + action;
    const body = JSON.stringify(profile);
    console.log(registerURL);

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body
    })

    const result = await response.json();
    console.log(result);
    alert("You are now registered! Please log in.")
    return result;
}