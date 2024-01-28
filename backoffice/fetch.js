import {getForm, getElementById} from './utility.js'
export {readObj, postObj,deleteObj, postAllObj,deleteAllObj};
import { arcadeGames } from './array.js';

const readObj = async (id) => {
    
    let url = ''
    id ? url = `https://striveschool-api.herokuapp.com/api/product/${id}` : url = `https://striveschool-api.herokuapp.com/api/product/`
    let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjQzNjMxYTczZjAwMTlkNWM5MDEiLCJpYXQiOjE3MDYzNzU4NTUsImV4cCI6MTcwNzU4NTQ1NX0.OtlbpNVCuThrV9PyoWpru2Gjg95YP8d2I9Vr7twWs_w'
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
    const url = 'https://striveschool-api.herokuapp.com/api/product/'
    let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjQzNjMxYTczZjAwMTlkNWM5MDEiLCJpYXQiOjE3MDYzNzU4NTUsImV4cCI6MTcwNzU4NTQ1NX0.OtlbpNVCuThrV9PyoWpru2Gjg95YP8d2I9Vr7twWs_w'
    let form = getForm()
    form = data
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
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log('errore: '+ error)};
};

const deleteObj = async (id) => {
    const url = 'https://striveschool-api.herokuapp.com/api/product/'
    let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjQzNjMxYTczZjAwMTlkNWM5MDEiLCJpYXQiOjE3MDYzNzU4NTUsImV4cCI6MTcwNzU4NTQ1NX0.OtlbpNVCuThrV9PyoWpru2Gjg95YP8d2I9Vr7twWs_w'
    let idResource = getElementById('idResource').value;
    idResource ? null : idResource = id

    let  options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
                },
        }
        try{
            let resp = await fetch(url+idResource,options)
            if (resp.status >= 200 && resp.status < 300){
                
                console.log('Request successfully done');
                let data = await resp.json()
                console.log(data);
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log(error);}
};
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

