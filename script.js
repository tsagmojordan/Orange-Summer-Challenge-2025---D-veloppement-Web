
let employes = JSON.parse(localStorage.getItem('employes')) || [];


if (document.getElementById('form-employe')) {
    document.getElementById('form-employe').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const poste = document.getElementById('poste').value;

        if (!nom || !prenom || !email || !poste) {
            alert('Remplissez tous les champs');
            return;
        }

        employes.push({nom, prenom, email, poste});
        localStorage.setItem('employes', JSON.stringify(employes));
        alert('Employé ajouté!');
        this.reset();
    });
}


if (document.getElementById('employes-body')) {
    afficherEmployes();
}

function afficherEmployes() {
    const tbody = document.getElementById('employes-body');
    tbody.innerHTML = '';
    
    employes.forEach((emp, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${emp.nom}</td>
            <td>${emp.prenom}</td>
            <td>${emp.email}</td>
            <td>${emp.poste}</td>
            <td><button class="btn-supprimer" onclick="supprimer(${index})">Supprimer</button></td>
        `;
        
        tbody.appendChild(tr);
    });
}

function supprimer(index) {
    if (confirm('Supprimer cet employé ?')) {
        employes.splice(index, 1);
        localStorage.setItem('employes', JSON.stringify(employes));
        afficherEmployes();
    }
}