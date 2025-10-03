const prompt = require('prompt-sync')()
 let compt=1
 let compt1=1
const livres = [];
const abonnes =[];
function ajouterlivre(){
   
   let titre=prompt(" entrer le titre :");
   let auteure = prompt("entrer le nome de auteur :");
   let  année = prompt("entrer lannée : ");
   let disponible= prompt("escqelle disponible oui ou non : ")
    livres.push({id:compt++,titre,auteure,année,disponible})
}

function afficherLivres (){
   livres.forEach(element => {
     console.log("id",element.id,"titre:",element.titre,"auteure:",element.auteure,"année",element.année,"disponibilité" ,element.disponible === "oui" ? "oui" : "non")
   });
  for (let i=0;i<livres.length;i++){
    console.log(livres[i])
  }
}
function traierlivres(){
    livres.sort(function (a,b){
       if (a.titre<b.titre){
        return -1;
       } if(a.titre>b.titre){
        return 1;
       }
       return 0;
    });
    afficherLivres();
}
function traierannlivres (){
    livres.sort((a,b)=>a.année-b.année)
    afficherLivres()
}
function afficherdispo() {
    for (let i = 0; i < livres.length; i++) {
        let l = livres[i];
        if (l.disponible === "oui") {
            console.log(l.id,"Titre:", l.titre, "Auteur:", l.auteure, "Année:", l.année);
        }
    }
}
function afecherparid(){
    let b=prompt("entrer l id que vou recherché:")
    for(let n = 0;n<livres.length;n++){
        let t =livres[n]
        if (t.id==b){
            console.log(t.id,"titre:",t.titre,"auteur:,",t.auteure,"année:",t.année)
        }
    }

}
function ajouterabonne(){
    let nom = prompt("entrer votre nom : ")
    let prenom = prompt("entrer votre prenom : ")
    let email = prompt("entrer votre adresse email: ")
    abonnes.push({id:compt1++,nom,prenom,email})

}
function affecherabonne(){
        abonnes.forEach(a=>console.log("id: ",a.id,"nom: ",a.nom,"prenom: ",a.prenom,"email: ",a.email))

} 


let choix ;
function menu(){
    
    do {
        console.log("===menu===")
        console.log("1.ajouter un livres.")
        console.log("2.affecher tout les livres .")
        console.log("3.traire les livres par titre .")
        console.log("4.traire les livre par année.")
        console.log("5.afecher les livres disponible. ")
        console.log("6.recherche par id. ")
        console.log("7.ajouter un abonne. ")
        console.log("8.affecher les abbonne. ")
        choix=prompt("entrer un choix :")
        switch (choix){
            case "1" :ajouterlivre();break
            case "2" :afficherLivres();break
            case "3" :traierlivres ();break
            case "4" :traierannlivres () ;break
            case "5" :afficherdispo();break
            case "5" :afficherdispo();break
            case "6" :afecherparid();break
            case "7" :ajouterabonne();break
            case "8" :affecherabonne();break
        } 
        


    }while (choix !== "0");
}
menu()