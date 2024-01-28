import { readObj } from "../backoffice/fetch.js";
import { createCard } from "../main/components.js";


const getDetails = () => {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id")
    
    const post = readObj(id)
    console.log(post);
}

window.onload = getDetails
