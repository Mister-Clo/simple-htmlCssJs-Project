var info = document.forms.chaudla.elements;
var btnAdd =  document.querySelector("button.btn[type='submit']");
var btnDel = document.querySelector("button.btn[type='button']");
var tableHead = document.querySelector(".thead");
var tableBody = document.querySelector("tbody");
var firstAdd = 0;

btnAdd.addEventListener("click", (e)=>{
        e.preventDefault();
        if (firstAdd == 0) {
            ajouter();
            }
        ajouter2();
     });

     btnDel.addEventListener("click", (e)=>{
        e.preventDefault();
        supprimer();
     });

    
function ajouter() {

    var newCell = tableHead.appendChild(document.createElement("th"));
    newCell.textContent = "Nom";
    newCell = tableHead.appendChild(document.createElement("th"));
    newCell.textContent = "Adresse de livraison";
    newCell = tableHead.appendChild(document.createElement("th"));
    newCell.textContent = "Mode de livraison";
    newCell = tableHead.appendChild(document.createElement("th"));
    newCell.textContent = "Entrée";
    newCell = tableHead.appendChild(document.createElement("th"));
    newCell.textContent = "Plat";
    newCell = tableHead.appendChild(document.createElement("th"));
    newCell.textContent = "Dessert"; 
    firstAdd++;
}


function ajouter2() {
    var newtr =  document.createElement("tr");
    tableBody.appendChild(newtr);

    var newCell = newtr.appendChild(document.createElement("td"));
    newCell.textContent = info.nom.value;
    newCell = newtr.appendChild(document.createElement("td"));
    newCell.textContent = info.adr.value;
    newCell = newtr.appendChild(document.createElement("td"));
    newCell.textContent = info.modeliv.value;
    newCell = newtr.appendChild(document.createElement("td"));
    newCell.textContent = info.entree.value;
    newCell = newtr.appendChild(document.createElement("td"));
    newCell.textContent = info.plat.value;
    newCell = newtr.appendChild(document.createElement("td"));
    newCell.textContent = info.dessert.value; 
}


function supprimer(){
        while(tableBody.firstChild){
            tableBody.removeChild(tableBody.firstChild);
        }
    }


