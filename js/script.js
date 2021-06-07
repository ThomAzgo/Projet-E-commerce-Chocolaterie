if (panier in localStorage){
    var panier = JSON.parse(localStorage.getItem("panier"))
} else {
    var panier = {}
}
document.getElementById("articles").innerHTML = Object.keys(panier).length;

function AllProducts(json){
    let section = document.getElementById('produits');
    for (let produits in json) {
        section.insertAdjacentHTML ('beforeend', '<section> <img src=" ' +json[produits]["img_src"]+ '" alt="Image"> <div id="idproduit">' +json[produits]["nom"]+ '</div> <div>' +json[produits]["description"]+ '<div>' +json[produits]["prix"]+ '</div> <input type="button" value="Ajouter au Panier" onClick="AddToCart('+json[produits]["id"]+')" </section>' );
      }
	};

function AddToCart(id){
    if (id == 1){
        panier[id] = "chocolatnoir"
        localStorage.setItem("panier" , JSON.stringify(panier))
    } else if (id == 2){
        panier[id] = "chocolatlait"
        localStorage.setItem("panier" , JSON.stringify(panier))
    } else if (id == 3){
        panier[id] = "chocolatnoisettes"
        localStorage.setItem("panier" , JSON.stringify(panier))
    } else if (id == 4){
        panier[id] = "chocolatblanc"
        localStorage.setItem("panier" , JSON.stringify(panier))
    } else if (id == 5){
        panier[id] = "chocolatpoudre"
        localStorage.setItem("panier" , JSON.stringify(panier))
    } else {
        panier[id] = "chocolatpepites"
        localStorage.setItem("panier" , JSON.stringify(panier))
    }
    document.getElementById("articles").innerHTML = Object.keys(panier).length;
    alert('Produit ajouté au panier!');
}

function CartProducts(id){
    for (let i = 0; i < localStorage.length; i++){
        if (id == 1){
            section.insertAdjacentHTML ('beforeend', '<section> <div id=panier>- tablette de chocolat noir  1.90 €</section>' );
        } else if (id == 2){
            section.insertAdjacentHTML ('beforeend', '<section> <div id=panier>- tablette de chocolat au lait  2.30 €</section>' );
        } else if (id == 3){
            section.insertAdjacentHTML ('beforeend', '<section> <div id=panier>- tablette de chocolat noisettes  1.90 €</section>' );
        } else if (id == 4){
            section.insertAdjacentHTML ('beforeend', '<section> <div id=panier>- tablette de chocolat blanc  2.50 €</section>' );
        } else if (id == 5){
            section.insertAdjacentHTML ('beforeend', '<section> <div id=panier>- pot de poudre de chocolat  9.20 €</section>' );
        } else {
            section.insertAdjacentHTML ('beforeend', '<section> <div id=panier>- sachet de pépites de chocolat  7.60 €</section>' );
        }
    }
}

var requestURL = 'produits.json';
var request = new XMLHttpRequest();
var nombreProduits = localStorage.getItem
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var listeProduits = request.response;
    AllProducts(listeProduits);

	};