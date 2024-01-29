import {getForm} from './utility.js'
export {readObj, postObj,deleteObj, putObj, postAllObj,deleteAllObj};
import { arcadeGames,tokenKey,urlAPI } from './array.js';
import { createCard } from '../main/components.js';


const readObj = async () => {
    
    let url = urlAPI
    let key = tokenKey
    let params = new URLSearchParams(document.location.search)
    let idURL = params.get('id') 

    url = idURL ? url + idURL : url;

    
    let  options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
                },
        }
        try{
            let resp = await fetch(url,options)
            if (resp.status >= 200 && resp.status < 300){

                console.log('Request successfully done');
                let data = await resp.json()
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log(error)};
};

const postObj = async (data) => {
    const url = urlAPI
    let key = tokenKey
    let form = getForm()
    //form = data
    let  options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
                },
        body: JSON.stringify(form),                
        }
        try{
            let resp = await fetch(url,options)
            if (resp.status >= 200 && resp.status < 300){

                console.log('Request successfully done');
                let data = await resp.json()
                window.alert('POSTATA')
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log('errore: '+ error)};
};

const deleteObj = async () => {
    let url = urlAPI
    let key = tokenKey
    
    let params = new URLSearchParams(document.location.search)
    let idURL = params.get('id')

    url = url + idURL

    let  options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
                },
        }
        try{
            let resp = await fetch(url,options)
            if (resp.status >= 200 && resp.status < 300){
                
                console.log('Request successfully done');
                let data = await resp.json()
                //console.log(data);
                params.set('id','');
                window.location.search = params.toString();
                window.alert('Eliminata')
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log(error);}
};
const putObj = async (event,id) => {

    let url = urlAPI
    let params = new URLSearchParams(document.location.search)
    let idURL = params.get('id')
    
    url = id ? url + id : url + idURL;

    let key = tokenKey
    let data = getForm();
    let  options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
                },
        body: JSON.stringify(data),
        }
        try{
            let resp = await fetch(url, options)
            if (resp.status >= 200 && resp.status < 300){
                
                console.log('Request successfully done');
                let data = await resp.json()
                location.reload();
                window.alert('Modificata')
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log(error);}

}
const postAllObj =  () => {
    //const url = 'https://striveschool-api.herokuapp.com/api/product/'
  //  let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjQzNjMxYTczZjAwMTlkNWM5MDEiLCJpYXQiOjE3MDYzNzU4NTUsImV4cCI6MTcwNzU4NTQ1NX0.OtlbpNVCuThrV9PyoWpru2Gjg95YP8d2I9Vr7twWs_w'
    
    for (const post of arcadeGames) {
        let data = {
            name: `${post.name}`,
            description: `${post.description}`,
            brand: `${post.brand}`,
            imageUrl: `${post.imageUrl}`,
            price: `${post.price}`,
        }
        postObj(data);
    }
};
const deleteAllObj =  async () => {
   
    let id = ''
    let fetchArray = await readObj()
    for (const post of fetchArray) {
        id = post._id
        await deleteObj(id);  
        }
        
};

