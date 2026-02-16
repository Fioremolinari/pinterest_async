import './card.css';


export default function Card({links, user, created_at}){
 const cardContainer = document.createElement('div');
 cardContainer.className = 'card-container';

 const cardImage = document.createElement('img');
 cardImage.src = links.download;
 cardImage.className = 'card-image'
 
 const cardUserImg = document.createElement ('img')
 cardUserImg.src = user.profile_image.small;
 cardUserImg.className = 'cadr-userImg'

 const cardUserName = document.createElement ('h4')
 cardUserName.textContent = user.first_name;
 cardUserName.className = 'card-UserName'

 const cardDateCreate = document.createElement ('p')
 cardDateCreate.textContent = created_at;
 cardDateCreate.className = 'card-dateCreate'

 cardContainer.append (cardImage, cardUserImg, cardUserName, cardDateCreate);

 return cardContainer;

}