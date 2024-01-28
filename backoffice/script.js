// Per il token  --> https://strive.school/studentlogin

import { readObj, postObj, deleteObj, postAllObj } from "./fetch.js";
import { getElementById,getForm } from "./utility.js";


const sendBtn = getElementById('sendBtn');  
const postBtn = getElementById('post');
const readBtn = getElementById('get');
const deleteBtn = getElementById('delete');
const postAllBtn = getElementById('postAll')

sendBtn.onclick = getForm;
postBtn.onclick = postObj;
readBtn.onclick = readObj;
deleteBtn.onclick = deleteObj;
postAllBtn.onclick = postAllObj;