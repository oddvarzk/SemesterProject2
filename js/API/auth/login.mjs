import { API_BASE } from "../constants.mjs";
import * as storage from "../../storage/index.mjs"
import { headers } from "../authFetch.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
    console.log(action);
    const loginURL = API_BASE + action;
    const body = JSON.stringify(profile);
    console.log(loginURL);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body
    })

    const result = await response.json();
    console.log(result);

    const {accessToken, ...user} = result.data;
    storage.save("token", accessToken)
    storage.save("profile", user)
    headers()
    alert("You are now logged in!")
    return result;
}
