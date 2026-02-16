import printCards from '../../utils/printCards';
import fecthApi from '../../utils/fetchapi.js';
import './header.css';


export default function header (){
    const header = document.createElement('header')
    header.className = 'header';

    const searchInput = document.createElement('input')
    searchInput.className = 'search-input';

    const searchButton = document.createElement('button')
    searchButton.className = 'search-button';
    searchButton.textContent = 'Buscar'

    searchButton.addEventListener('click', async () => {

        const response = await fecthApi (1, searchInput.value)
        const items = Array.isArray(response) ? response : (response?.results ?? [])
        printCards(items)
    }

    )

    header.append(searchInput, searchButton);

 
    return header
}

