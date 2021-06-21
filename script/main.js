window.onload = function(){
    /*une fonction avec en paramétre un nombre 
    et affiche dans le catalogue le film
     associé à ce nombre*/
     /* <div class="film">
    <img src="images/Intouchables.jpg" alt="Intouchables">
    <h3>Test</h3>
    
    </div>*/

for(let i = 0;i < filmData.length; i++){
    createFilm(i);
}


     function createFilm(number){
        let someFilm = filmData[number];

        //creation d'un film
        let film = document.createElement("div");
        film.className = "film";
        film.id = number + "-film";


        //creation de l'image
        let image = document.createElement("img");
        image.src = someFilm.image;
        image.alt = someFilm.title;

        //creation du titre du film

        var titre = document.createElement("h3");
        titre.innerHTML = someFilm.title;

        film.appendChild(image);
        film.appendChild(titre);
        document.getElementById("films").appendChild(film);
     }
}
// récupère la valeur de la recherche
let input = document.getElementsByTagName("input");
input[0].addEventListener("keyup", recherche);
input[1].addEventListener("mouseup", checkbox);


function recherche(event){
    let inputValue = event.target.value;
    inputValue = inputValue.toLowerCase();
    console.log(inputValue);
   
        //input n'est pas vide
        for(let i = 0; i<filmData.length;i++){
           let titre = filmData[i].title;
           titre = titre.toLowerCase();
           let film = document.getElementById(i+"-film");

           if (titre.includes(inputValue) == false){
            film.style.display = "none";
           }else{
               film.style.display = "inline-block";
           }
        }
    

}//fin fonction recherche

function checkbox(event){
    let details = document.getElementById("details");
    console.log(event.target.checked);
    if(event.target.checked){
       details.style.display = "none";
    }else{
        details.style.display = "block";
    }
}