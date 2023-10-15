class Personnage {
    constructor(prenom, santéM, feuRestant) {
        this.prenom = prenom;
        this.santéM = santéM;
        this.feuRestant = feuRestant;
        this.changement = 0;
    }

    MusiqueRadio() {
        const music = ["Anissa - Wejdene", "Nujabes", "Justin bieber" - "Niska", "ninho" - "DTF", "MMZ"];
        const radio = Math.floor(Math.random() * music.length);
        console.log("La musique jouée est : " + music[radio]);
        if (radio === 0) {
            console.log("John a fui le taxi!");
        }
        return radio; 
    }

    Trajet() {
        let feuRestant = 30;
    }
}

let John = new Personnage("John", 10, 30);

while (John.santéM > 0 && John.feuRestant > 0) {
    const musiqueEnCours = John.MusiqueRadio(); 
    John.feuRestant--;
    if (musiqueEnCours === 0) { 
        John.santéM--;
        console.log("John a changé de voiture !");
        John.changement++;
    }
}

if (John.santéM === 0) {
    console.log("Ulti de Ziggs");
    console.log("changement : " + John.changement);
}
if (John.feuRestant === 0 && John.santéM > 0) {
    console.log("John est bien rentré heuresement qu'il a un zonhya");
    console.log("changement : " + John.changement);
}
