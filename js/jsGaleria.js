/*codgo JS para poder filtrar as imagens na caixa de pesquisa */

let searchBox = docment.querySelector('#search-box');
let imagens = docment.querySelectorAll('.container .container-image .image');

searchBox.oninput = () =>{
    imagens.forEach(hide => hide.style.display= 'none');
    let value = searchBox.value;

    imagens.forEach(filter => {
        let title = filter.getAttribute('data-title');
        
        if(value == title){
            filter.style.display ="block";
        }

        if(searchBox.value == ''){
            filter.style.display = "block";
        }
    
    })
}
        
    
