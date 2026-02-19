
const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'nU_tn1t4_EQfeIZio91PJGOGwJqtK2CbT8QmwH-Pvnw';

export default async function fecthApi(page = 1, query = '') {

    let url = `${BASE_URL}/photos?page=${page}&client_id=${ACCESS_KEY}`;

    if (query) {
        url = `${BASE_URL}/search/photos?page=${page}&query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`;
    }

    try {
        const response = await fetch(url, {
            method:'GET', 
            headers: {
                    'Content-Type':'application/json'
            }
        })
        const res = await response.json();
        //return res;
        return Array.isArray(res) ? res : res.results;

        
        

    }catch(error){
        console.error(error);
        alert("fetch error");
    }
    
}