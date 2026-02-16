import header from './components/header/header.js';
import Home from './components/home/home.js';
import './style.css';
import fetchApi from './utils/fetchapi.js';
import printCards from './utils/printCards.js';



const app = document.querySelector('#app')

async function main(){  
   // 

    app.appendChild(header())
    app.appendChild(Home())
  
const pictures  = await fetchApi();
    app.appendChild(printCards(pictures));

 }

 main()

 

//     try{
       
//         
        
//         document.querySelector('.search-button').addEventListener('click', () => {
//         const value = document.querySelector('.search-input').value;

//         const filterPictures= pictures.filter(picture => picture.user.first_name.includes(value.toLowerCase()));
        
//         printPicture(filterPictures);    
//     })

//         printPicture(pictures);



//     }catch (error){
//         console.error (error)
//     }


// } 


// function printPicture (pictures){
//     document.querySelector('pictureConteiner')?.remove();

//     const pictureConteiner = document.createElement('section')
//     pictureConteiner.className = 'picture-conteiner'

//          pictures.forEach(picture => {
//            pictureConteiner.appendChild(Card(picture))  
//         });

//            app.appendChild(pictureConteiner)
// }



    




