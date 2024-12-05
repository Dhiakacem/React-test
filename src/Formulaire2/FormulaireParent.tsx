import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { Formulaire1 } from './Formulaire1';
import { Formulaire2 } from './Formulaire2';

export function FormulaireParent() {
    const [cuurentForm, setCurrentForm] = useState(1);
    const [donnesForm, setDonneesForm] = useState({
        nom: "",
        prenom: "",
        courriel: "",
        acceptInfo: false,
        genre: "femme",
        dateNaissance: "",
        province: "",
        adresse: "",
        ville: "",
        codepostale: "",
        telephone: "",
    });
    const [erreur, setErreurs] = useState<string[]>([]);
    const validerChamps = (): boolean => {
        let estValide = true;
        let erreurs: string[] = [];
        if (cuurentForm === 1) {
            if (donnesForm.nom.trim().length < 1) {
                erreurs.push("Le nom est obligatoire") ;
                estValide = false;
            }
            if (donnesForm.prenom.trim().length < 1) {
                erreurs.push("Le prénom est obligatoire") ;
                estValide = false;
            }
            if (donnesForm.courriel.trim().length < 1) {
                erreurs.push("Le courriel est obligatoire") ;
                estValide = false;
            }
        }
        if (cuurentForm === 2) {
            if (donnesForm.province.trim().length < 1) {
                erreurs.push("La province est obligatoire") ;
                estValide = false;
            }
            if (donnesForm.ville.trim().length < 1) {
                erreurs.push("La ville est obligatoire") ;
                estValide = false;
            }
            if (donnesForm.codepostale.trim().length < 1) {
                erreurs.push("Le code postale est obligatoire") ;
                estValide = false;
            }
        }

        setErreurs(erreurs);
        return estValide;
    }

    const [afficheAlert, setAfficheAlert] = useState(false);
    const suivant = () => {
        if (!validerChamps()) {
            return;
        }
        setCurrentForm((precedentFormulaire) => Math.min(precedentFormulaire + 1, 3));
    }
    const precedent = () => setCurrentForm((precedentFormulaire) => Math.max(precedentFormulaire - 1, 1));
    const soummettre = () => {
        setAfficheAlert(true)
    };
    //j'ai trouvé ca sur internet j'ai volu récupurer dynamiquemet le type de la variable donnesForm
    //pour garantireque la fonction updateDonnees respecte la structure du formulaire 
    // tout en rendant les propriétés optionnelles grâce à l'utilisation du Partial.
    const updateDonnees = (nouvelleDonnees: Partial<typeof donnesForm>) => {
        setDonneesForm((prevDonnes) => ({ ...prevDonnes, ...nouvelleDonnees }));
    };

    return (
        <Container>
            {cuurentForm === 1 && (
                <Formulaire1 donnees={donnesForm}
                    miseAJoursDonnees={updateDonnees}
                />
            )}
            {cuurentForm === 2 && (
                <Formulaire2 donnees={donnesForm}
                    miseAjoursDonnees={updateDonnees}
                />
            )}
            {cuurentForm === 3 && (
                <div>
                    <h4>3.Resumé des données</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'><strong>Nom: </strong> {donnesForm.nom}</li>
                        <li className='list-group-item'><strong>Prenom: </strong>{donnesForm.prenom} </li>
                        <li className='list-group-item'><strong>Accept Informations: </strong>{donnesForm.acceptInfo ? "Oui" : "Non"} </li>
                        <li className='list-group-item'><strong>Genre:</strong> {donnesForm.prenom} </li>
                        <li className='list-group-item'><strong>Date Naissance: </strong>{donnesForm.prenom} </li>
                        <li className='list-group-item'><strong>Courriel:</strong> {donnesForm.prenom} </li>
                        <li className='list-group-item'><strong>Province: </strong>{donnesForm.province} </li>
                        <li className='list-group-item'><strong>Adresse: </strong>{donnesForm.adresse} </li>
                        <li className='list-group-item'><strong>Ville: </strong> {donnesForm.ville} </li>
                        <li className='list-group-item'><strong>Code Postal: </strong>{donnesForm.codepostale} </li>
                        <li className='list-group-item'><strong>Téléphone: </strong>{donnesForm.telephone} </li>
                    </ul>
                </div>
            )}
            {cuurentForm > 1 &&
                <Button variant='primary' onClick={precedent} >
                    precedent
                </Button>
            }
            {cuurentForm < 3 &&
                <Button variant='primary' onClick={suivant}>
                    suivant
                </Button>
            }
            {cuurentForm === 3 &&
                <Button variant='success' onClick={soummettre}>
                    soumettre ma demande
                </Button>
            }
            {afficheAlert && (
                <Alert variant="success" onClose={() => setAfficheAlert(false)}>
                    Votre demande a été envoyé  avec succés
                </Alert>

            )}
            {erreur.length>0 && (
                <Alert variant='danger' className='mt-3'>
                   {erreur.map((err,index) => (
                    <div key={index}>{err}</div>
                   ))} 
                </Alert>
            )
            }
        </Container>
    );
}