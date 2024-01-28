const httpRequest =  ({method, url, data, options}) => {
    const urlRequest = url
    
        return  fetch(urlRequest,options)
                .then((resp)=>{
                    if(resp.status >= 200 && resp.status < 300){
                        
                        console.log(`Request type ${method} succesfully done`);
                        return resp.json()

                    } else {
                        
                        return resp.json().then(err => {
                                console.log(err);
                                throw new Error('Something wrong');
                        })
                    }
                }).catch(error => {
                    console.error(error);
                    throw new Error('Something wrong 2');
                })
}
const runFetch = async (event)=> {

    const url = 'https://striveschool-api.herokuapp.com/api/product/'
    let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjQzNjMxYTczZjAwMTlkNWM5MDEiLCJpYXQiOjE3MDYzNzU4NTUsImV4cCI6MTcwNzU4NTQ1NX0.OtlbpNVCuThrV9PyoWpru2Gjg95YP8d2I9Vr7twWs_w'
    let method = event.target.value
    let data = getForm()
    let options = {};
    switch (method) {
        case "GET":
                console.log(method);
                options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                },
        }
            break;
        case "POST":

            options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify(data),
    }
        break;
        default:
            break;
    }
       console.log(options);
    try{
         const responseFetch = await httpRequest({     
                                                    method: method, 
                                                    url: url, 
                                                    data: data,
                                                },options)
    }
    catch (error) {console.log(error);
    }
}