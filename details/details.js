import { readObj, postObj, deleteObj, putObj, postAllObj, deleteAllObj } from "../backoffice/fetch.js";
import { createCard } from "../main/components.js";
import { getElementById,getForm } from "../backoffice/utility.js";


const postBtn = getElementById('post');
const readBtn = getElementById('get');
const deleteBtn = getElementById('delete');
const putBtn = getElementById('put');
const postAllBtn = getElementById('postAll')
const deleteAllBtn = getElementById('deleteAll')


postBtn.onclick = postObj;
readBtn.onclick = readObj;
deleteBtn.onclick = deleteObj;
putBtn.onclick = putObj;
// postAllBtn.onclick = postAllObj;
// deleteAllBtn.onclick = deleteAllObj;


const getDetails = async () => {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id")
    try{
        const post = await readObj(id)
        createCard(post);
        }
        catch(error) {console.log(error);}
    }

window.onload = getDetails


