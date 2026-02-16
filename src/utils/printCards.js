import Card from "../components/cards/Card.js";

export default function printCards (pictures){

  
   const pictureContainer = document.createElement('section')
   pictureContainer.className = 'picture-container'

   const list = Array.isArray(pictures) ? pictures : [];
   list.forEach(picture => {
           pictureContainer.appendChild(Card(picture))  
        });

      

   return pictureContainer;


}