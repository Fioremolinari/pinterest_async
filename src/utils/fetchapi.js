
const BASE_URL = ' https://api.unsplash.com/photos/?client_id=nU_tn1t4_EQfeIZio91PJGOGwJqtK2CbT8QmwH-Pvnw'

export default async function fecthApi(user = '') {
    let url = BASE_URL;
   
    try {
        const response = await fetch(url, {
            method:'GET', 
            headers: {
                    'Content-Type':'application/json'
            }
        })
        const res = await response.json();
        return res;

    }catch(error){
        console.error(error);
        alert("fetch error");
    }
    
}