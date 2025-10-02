const prompt = require('prompt-sync')()
 let compt=1
const livres = [];
function ajouterlivre(){
   
   let titre=prompt(" entrer le titre :");
   let auteure = prompt("entrer le nome de auteur :");
   let  année = prompt("entrer lannée :");
   let disponible= prompt("escqelle disponible o non ")
    livres.push({id:compt++,titre,auteure,année,disponible:true})
}

function afficherLivres (){
    livres.forEach(element => {
        console.log("id",element.id,"titre:",element.titre,"auteure:",element.auteure,"année",element.année,"disponibilité",element.disponible?"oui":"non")
    });
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


let choix ;
function menu(){
    
    do {
        console.log("===menu===")
        console.log("1.ajouter un livres.")
        console.log("2.affecher tout les livres .")
        console.log("3.traire les livres par titre .")
        console.log("4.traire les livre par année.")
        console.log("5.afecher les livres disponible ")
        console.log("6.recherche par id ")

        choix=prompt("entrer un choix :")
        switch (choix){
            case "1" :ajouterlivre();break
            case "2" :afficherLivres();break
            case "3" :traierlivres ();break
            case "4" :traierannlivres () ;break
            case "5" :afficherdispo();break
            case "5" :afficherdispo();break
            case "6" :afecherparid();break
        } 
        


    }while (choix !== "0");
}
menu()