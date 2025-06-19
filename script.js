
let nom;
let prenom;
let email;
let fonction;

function ajouterEmploye(){
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    email=document.getElementById("email").value;
    fonction=document.getElementById("fonction").value;
    console.log(nom,prenom,email,fonction);
    const employe={nom,prenom,email,fonction};
    const employes=JSON.parse(localStorage.getItem("employes"));
    console.log(employes);
    employes.push(employe);
    sauvegarderEmploye(employes);




}

function afficherEmploye(){
    const tbody=document.getElementById("tbody");
    const employes=JSON.parse(localStorage.getItem("employes"));
    for (let i = 0; i <employes ; i++) {
        tbody.innerHTML+=employes[i].nom;
        console.log(employes[i].nom);
        tbody.innerHTML+=employes[i].prenom;
        console.log(employes[i].prenom);
        tbody.innerHTML+=employes[i].email;
        tbody.innerHTML+=employes[i].fonction;
    }

}
function supprimerEmployer(nom){

}

function sauvegarderEmploye(employes){
    const employeSave=localStorage.setItem("employes",JSON.stringify(employes));
}

function annuler(){
    window.location.href="../index.html";
}
afficherEmploye();