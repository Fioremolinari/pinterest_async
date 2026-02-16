import Card from "../components/cards/Card.js";

export default function printCards (pictures){

  
   const pictureContainer = document.createElement('section')
   pictureContainer.className = 'picture-container'

        pictures.forEach(picture => {
           pictureContainer.appendChild(Card(picture))  
        });

      

   return pictureContainer;


}