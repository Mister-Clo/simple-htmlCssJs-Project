function getName() {
    
    var nom = document.chaudla.nom.value
    var prenom = document.chaudla.prenom.value
    var adr = document.chaudla.adr.value
    var mail = document.chaudla.mail.value
    var mode = document.chaudla.modeliv.value
    var entr = document.chaudla.entree.value
    var plat = document.chaudla.plat.value
    var dess = document.chaudla.dessert.value

    if (nom === "" || prenom === "" || adr === "") {
        return;
    }
    
    const ligneTab = document.createElement("tr");
    const celluleTab1 = document.createElement("td");
    const celluleTab2 = document.createElement("td");
    const celluleTab3 = document.createElement("td");
    const celluleTab4 = document.createElement("td");
    const celluleTab5 = document.createElement("td");
    const celluleTab6 = document.createElement("td");

    celluleTab1.textContent = nom;
    celluleTab2.textContent = adr;
    celluleTab3.textContent = mode;
    celluleTab4.textContent = entr;
    celluleTab5.textContent = plat;
    celluleTab6.textContent = dess;

    ligneTab.append(celluleTab1);
    ligneTab.append(celluleTab2);
    ligneTab.append(celluleTab3);
    ligneTab.append(celluleTab4);
    ligneTab.append(celluleTab5);
    ligneTab.append(celluleTab6);

    var tab = document.getElementById("table");
    tab.appendChild(ligneTab);

}


function supprimer() {
    var supp = document.querySelector("table");
    var rowCount = supp.rows.length;
    if (rowCount === 1) {
        return;
    }
    table.deleteRow(rowCount -1);
}

