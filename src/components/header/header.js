import printCards from '../../utils/printCards';
import fecthApi from '../../utils/fetchapi.js';
import './header.css';
import { navlinks } from '../../data/navlinks.js';
import { NavLink } from '../NavLink/NavLink.js';


export default function header (){
    const header = document.createElement('header')
    header.className = 'header';

    const logoImg = document.createElement('img')
    logoImg.className = 'logoImg'
    logoImg.src = '/logo-pinterest.jpg'

    // nav

    const nav = document.createElement ('nav')
    const ul = document.createElement ('ul')

    navlinks.forEach((navlink) =>  ul.append(NavLink(navlink)) );

    const menuButton = document.createElement('button')
    menuButton.className = 'menu-button'
    menuButton.textContent = '☰'


    // searh
    const searchContainer = document.createElement('div')
    searchContainer.className = 'search-container'

    const searchInput = document.createElement('input')
    searchInput.className = 'search-input';
    searchInput.textContent = 'Buscar...'

    const searchButton = document.createElement('button')
    searchButton.className = 'search-button';
    searchButton.textContent = '🔎'

    // funcion buscar

    async function search () {
        
        const response = await fecthApi ( 1, searchInput.value.trim())
        
        let items;
        if (Array.isArray(response)) {
             items = response;
        } else if (response && response.results) {
             items = response.results;
        } else {
             items = [];
        }

        const newContainer = printCards(items)

        const existContainer = document.querySelector('.picture-container')
        if (existContainer){
            existContainer.replaceWith(newContainer)
        }else{
            document.querySelector('#app').appendChild(newContainer)
        }
    };

     searchButton.addEventListener('click', search)
     searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            search()
         }
})

    // icons

    const iconsContainer = document.createElement('div')
    iconsContainer.className = 'icons-container'

    const bellIcon = document.createElement('img')
    bellIcon.className = 'bellIcon'
    bellIcon.src = '/bell-icon.svg' 

    const messageIcon = document.createElement('img')
    messageIcon.className = 'messageIcon'
    messageIcon.src = '/message-icon.svg'  
        
    const userIcon = document.createElement('img')
    userIcon.className = 'userIcon'
    userIcon.src = '/letter-f.svg' 

    nav.append(menuButton, ul);
    searchContainer.append(searchInput, searchButton);
    iconsContainer.append(bellIcon, messageIcon, userIcon);
    header.append(logoImg, nav, searchContainer, iconsContainer);

 
    return header
}

