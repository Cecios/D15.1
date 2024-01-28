import { readObj, postObj, deleteObj, postAllObj, deleteAllObj } from "./fetch.js";
import { getElementById,getForm } from "./utility.js";


const sendBtn = getElementById('sendBtn');  
const postBtn = getElementById('post');
const readBtn = getElementById('get');
const deleteBtn = getElementById('delete');
const postAllBtn = getElementById('postAll')
const deleteAllBtn = getElementById('deleteAll')

sendBtn.onclick = getForm;
postBtn.onclick = postObj;
readBtn.onclick = readObj;
deleteBtn.onclick = deleteObj;
postAllBtn.onclick = postAllObj;
deleteAllBtn.onclick = deleteAllObj;