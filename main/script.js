// Per il token  --> https://strive.school/studentlogin
import { createCard } from "./components.js";
import { readObj } from "../backoffice/fetch.js"
import { cercaID } from "../backoffice/utility.js";
//import { getElementById } from "../backoffice/utility.js";



const newPage = (ev) =>{

    let gameClick = cercaID(ev);

    var url = new URL ('../details/details.html', window.location.origin);
    url.searchParams.set('id', gameClick.id);
    window.location.href = url 
}

const fetchObj = async () => {
    try{
        
        let data = await readObj()
        for(const post of data) {
            createCard(post);
        }
        let cards = document.querySelectorAll('.card')
        for (const card of cards){
            card.onclick = newPage
        }
    }
    catch(error) {console.log('errore 1: '+ error)};
}
window.onload = fetchObj

