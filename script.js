class AnnuaireEmployes {
    constructor() {
        this.employes = JSON.parse(localStorage.getItem('employes')) || [];
        this.form = document.getElementById('form-employe');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.ajouterEmploye(e));
        this.afficherEmployes();
    }

    ajouterEmploye(e) {
        e.preventDefault();
        
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const poste = document.getElementById('poste').value.trim();

        if (!this.validerFormulaire(nom, prenom, email, poste)) return;

        const employe = { nom, prenom, email, poste };
        this.employes.push(employe);
        this.sauvegarder();
        this.afficherEmployes();
        this.form.reset();
    }

    validerFormulaire(nom, prenom, email, poste) {
        if (!nom || !prenom || !email || !poste) {
            alert('Tous les champs sont obligatoires');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Veuillez entrer un email valide');
            return false;
        }

        return true;
    }

    supprimerEmploye(index) {
        if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
            this.employes.splice(index, 1);
            this.sauvegarder();
            this.afficherEmployes();
        }
    }

    afficherEmployes() {
        const tbody = document.getElementById('employes-body');
        tbody.innerHTML = this.employes
            .map((emp, index) => `
                <tr>
                    <td>${emp.nom}</td>
                    <td>${emp.prenom}</td>
                    <td><a href="mailto:${emp.email}">${emp.email}</a></td>
                    <td>${emp.poste}</td>
                    <td>
                        <button onclick="annuaire.supprimerEmploye(${index})" class="btn-supprimer">
                            Supprimer
                        </button>
                    </td>
                </tr>
            `)
            .join('');
    }

    sauvegarder() {
        localStorage.setItem('employes', JSON.stringify(this.employes));
    }
}

const annuaire = new AnnuaireEmployes();