function calculerFondations() {
    let longueur = parseFloat(document.getElementById("longueur").value);
    let largeur = parseFloat(document.getElementById("largeur").value);
    let hauteur = parseFloat(document.getElementById("hauteur").value);

    let volumeFondations = longueur * largeur * hauteur;

    document.getElementById("resultats").innerText += 
        `Volume des fondations: ${volumeFondations.toFixed(2)} m³\n`;
}

function calculerSoubassement() {
    let longueurSoubassement = parseFloat(document.getElementById("longueurSoubassement").value);
    let largeurSoubassement = parseFloat(document.getElementById("largeurSoubassement").value);
    let hauteurSoubassement = parseFloat(document.getElementById("hauteurSoubassement").value);
    let prixParpaing = parseFloat(document.getElementById("prixParpaing").value);

    let surfaceSoubassement = 2 * (longueurSoubassement * hauteurSoubassement + largeurSoubassement * hauteurSoubassement);

    let surfaceParpaing = 0.2 * 0.5;
    let nombreParpaings = surfaceSoubassement / surfaceParpaing;
    let coutSoubassement = nombreParpaings * prixParpaing;

    document.getElementById("resultats").innerText += 
        `Surface totale du soubassement: ${surfaceSoubassement.toFixed(2)} m²\nNombre de parpaings nécessaires: ${Math.ceil(nombreParpaings)}\nCoût des parpaings pour le soubassement: ${coutSoubassement.toFixed(2)} €\n`;
}

function calculerMurs() {
    let longueurMaison = parseFloat(document.getElementById("longueurMaison").value);
    let largeurMaison = parseFloat(document.getElementById("largeurMaison").value);
    let hauteurMur = parseFloat(document.getElementById("hauteurMur").value);
    let prixParpaing = parseFloat(document.getElementById("prixParpaing").value);

    // Calcul du périmètre (2 * (longueur + largeur))
    let perimetreMaison = 2 * (longueurMaison + largeurMaison);
    
    // Calcul de la surface totale des murs (périmètre * hauteur)
    let surfaceTotaleMurs = perimetreMaison * hauteurMur;

    let surfaceParpaing = 0.2 * 0.5;
    let nombreParpaingsMurs = surfaceTotaleMurs / surfaceParpaing;
    let coutMurs = nombreParpaingsMurs * prixParpaing;

    document.getElementById("resultats").innerText += 
        `Périmètre de la maison: ${perimetreMaison.toFixed(2)} m\nSurface totale des murs: ${surfaceTotaleMurs.toFixed(2)} m²\nNombre de parpaings nécessaires pour les murs: ${Math.ceil(nombreParpaingsMurs)}\nCoût des parpaings pour les murs: ${coutMurs.toFixed(2)} €\n`;
}
