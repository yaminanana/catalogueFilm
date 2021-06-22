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
let films = document.getElementById("films");
let selection = document.getElementById("selection");
input[0].addEventListener("keyup", recherche);
input[1].addEventListener("mouseup", checkbox);
films.addEventListener("mouseover", survolFilm);
films.addEventListener("mouseout", finSurvol);
films.addEventListener("click", selectionFilm);
selection.addEventListener("click", clickSelection);

function recherche (event){
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
    

    }  //fin fonction recherche

function checkbox(event){
    let details = document.getElementById("details");
    console.log(event.target.checked);
    if(event.target.checked){
       details.style.display = "none";
    }else{
        details.style.display = "block";
    }
}

function survolFilm(event){
    let elementSurvol = event.target.parentNode;//récupére l'élément qui est survolé
    let identifiantFilm = elementSurvol.id;
    let position;
    if(identifiantFilm == "catalog"){
        return;
    }else if(identifiantFilm.length == 6){
        position = identifiantFilm[0];
    }else if(identifiantFilm.length == 7){
        position = identifiantFilm[0]+ identifiantFilm[1];
    }else {
        return;
    }

    let descriptionFilm = filmData[position].text;
    document.getElementById("details").innerHTML = descriptionFilm;
  //console.log(description);
}//fin survolFilm

function finSurvol(event){
    document.getElementById("details").innerHTML = "";
}//fin fonction finSurvol

function selectionFilm (event){
    let film = event.target.parentNode;
    let select1 = document.getElementById("selection1");
    let select2 = document.getElementById("selection2");
    film.addEventListener("mouseover", survolFilm);
    film.addEventListener("mouseout", finSurvol );
    
    
    let select1Child = select1.childNodes;//récupère tous les noeuds(éléments) enfants de la partie selection1
    let select2Child = select2.childNodes;

    if(select1Child.length == 1){
        //la partie selection1 est vide
        select1.insertBefore(film, select1Child[0]);
    }else if (select2Child.length == 1) {
        //la partie selection2 est vide
        select2.insertBefore(film, select2Child[0]);
    }else{
        alert("Désolé vous avez déjà choisi deux films !");
    }

    //console.log(select2Child);




}//fin fonction selectionFilm

function clickSelection (event){
    let elementClicke = event.target;
    let film = elementClicke.parentNode;

    let select = film.parentNode;
    let selectChild = select.childNodes;

    if(selectChild[0].className == "film"){
        let copyFilm = selectChild[0];
        select.removeChild(copyFilm);
        document.getElementById("films").appendChild(copyFilm);
    }

    //console.log(selectChild);
}