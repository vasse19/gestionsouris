'use strict';   

// Recherche du bouton et du rectangle dans l'arbre DOM.
const button    = document.getElementById('toggle-rectangle');
const rectangle = document.querySelector('.rectangle');

//ecouteur d'evenement
 button.addEventListener('click', onClickButton);

 // Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
 rectangle.addEventListener('mouseout', onMouseOut);
 rectangle.addEventListener('mouseover', onMouseOver);
// Installation d'un gestionnaire d'évènement double clic sur le rectangle.

 rectangle.addEventListener('dblclick', dblclickrectangle);

//fonction

function onClickButton(){
        // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).

    rectangle.classList.toggle('hide');

}

function onMouseOut(){
    // La méthode .remove() va supprimer la classe.
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}

function onMouseOver(){
     // La méthode .remove() va ajouter la classe.
    rectangle.classList.add('important');

}

function dblclickrectangle(){
        // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
    rectangle.classList.toggle('good');


}
