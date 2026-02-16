import './home.css'

export default function Home(){
const homeConteiner = document.createElement('section');
homeConteiner.claasName = 'home-conteiner';

const cardConteiner = document.createElement ('ul');
cardConteiner.className = 'card-conteiner';

homeConteiner.appendChild(cardConteiner)

return homeConteiner;


}