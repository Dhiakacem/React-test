import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Définir un type pour les données du formulaire
type FormDataType = {
  nom: string;
  prenom: string;
  acceptIno: boolean;
  genre: string;
  dateNaissance: string;
  courriel: string;
  province: string;
  adresse: string;
  ville: string;
  codePostale: string;
  telephone: string;
};

export function Formulaire3() {
  const [formData, setFormData] = useState<FormDataType>({
    nom: "",
    prenom: "",
    acceptIno: false,
    genre: "femme",
    dateNaissance: "",
    courriel: "",
    province: "",
    adresse: "",
    ville: "",
    codePostale: "",
    telephone: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Gestion des changements de champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Effacer le message d'erreur lorsque l'utilisateur modifie le champ
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validation des champs requis
  const validateStep = () => {
    let newErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      if (!formData.nom.trim()) newErrors.nom = "Le nom est obligatoire.";
      if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est obligatoire.";
      if (!formData.dateNaissance) newErrors.dateNaissance = "La date de naissance est obligatoire.";
      if (!formData.courriel.trim()) newErrors.courriel = "Le courriel est obligatoire.";
    } else if (currentStep === 2) {
      if (!formData.province) newErrors.province = "La province est obligatoire.";
      if (!formData.adresse.trim()) newErrors.adresse = "L'adresse est obligatoire.";
      if (!formData.ville.trim()) newErrors.ville = "La ville est obligatoire.";
      if (!formData.codePostale.trim()) newErrors.codePostale = "Le code postal est obligatoire.";
      if (!formData.telephone.trim()) newErrors.telephone = "Le numéro de téléphone est obligatoire.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation entre étapes avec validation
  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <Container>
      <Row>
        <Col>
          {currentStep === 1 && (
            <Form className="border p-3 mt-3">
              <h4>1. Parlez-nous de vous</h4>
              <hr />

              <Form.Group className="mb-3" controlId="formNom">
                <Form.Label>Nom :</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  isInvalid={!!errors.nom}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPrenom">
                <Form.Label>Prénom :</Form.Label>
                <Form.Control
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Entrez votre prénom"
                  isInvalid={!!errors.prenom}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.prenom}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCheckInfo">
                <Form.Check
                  type="checkbox"
                  name="acceptIno"
                  checked={formData.acceptIno}
                  onChange={handleChange}
                  label="J'accepte de recevoir des informations."
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGenre">
                <Form.Label>Genre :</Form.Label>
                <Form.Check
                  type="radio"
                  name="genre"
                  value="femme"
                  label="Femme"
                  checked={formData.genre === "femme"}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  name="genre"
                  value="homme"
                  label="Homme"
                  checked={formData.genre === "homme"}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date de naissance :</Form.Label>
                <Form.Control
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  isInvalid={!!errors.dateNaissance}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.dateNaissance}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCourriel">
                <Form.Label>Courriel :</Form.Label>
                <Form.Control
                  type="email"
                  name="courriel"
                  value={formData.courriel}
                  onChange={handleChange}
                  placeholder="Entrez votre courriel"
                  isInvalid={!!errors.courriel}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.courriel}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" onClick={nextStep}>
                Suivant
              </Button>
            </Form>
          )}

          {currentStep === 2 && (
            <Form className="border p-3 mt-3">
              <h4>2. Informations supplémentaires</h4>
              <hr />

              <Form.Group className="mb-3" controlId="formProvince">
                <Form.Label>Province :</Form.Label>
                <Form.Select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  isInvalid={!!errors.province}
                  required
                >
                  <option value="">Sélectionnez votre province</option>
                  <option value="QC">Québec</option>
                  <option value="ON">Ontario</option>
                  <option value="AB">Alberta</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">Nouveau-Brunswick</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.province}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAdresse">
                <Form.Label>Adresse :</Form.Label>
                <Form.Control
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  placeholder="Entrez votre adresse"
                  isInvalid={!!errors.adresse}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.adresse}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formVille">
                <Form.Label>Ville :</Form.Label>
                <Form.Control
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Entrez votre ville"
                  isInvalid={!!errors.ville}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.ville}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCodePostale">
                <Form.Label>Code postal :</Form.Label>
                <Form.Control
                  type="text"
                  name="codePostale"
                  value={formData.codePostale}
                  onChange={handleChange}
                  placeholder="Entrez votre code postal"
                  isInvalid={!!errors.codePostale}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.codePostale}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTelephone">
                <Form.Label>Téléphone :</Form.Label>
                <Form.Control
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Entrez votre numéro de téléphone"
                  isInvalid={!!errors.telephone}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.telephone}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="secondary" onClick={prevStep} className="me-2">
                Retour
              </Button>
              <Button variant="primary" onClick={nextStep}>
                Suivant
              </Button>
            </Form>
          )}

          {currentStep === 3 && (
            <div className="border p-3 mt-3">
              <h4>3. Résumé de vos informations</h4>
              <hr />
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td><strong>Nom</strong></td>
                    <td>{formData.nom}</td>
                  </tr>
                  <tr>
                    <td><strong>Prénom</strong></td>
                    <td>{formData.prenom}</td>
                  </tr>
                  <tr>
                    <td><strong>Genre</strong></td>
                    <td>{formData.genre}</td>
                  </tr>
                  <tr>
                    <td><strong>Date de naissance</strong></td>
                    <td>{formData.dateNaissance}</td>
                  </tr>
                  <tr>
                    <td><strong>Courriel</strong></td>
                    <td>{formData.courriel}</td>
                  </tr>
                  <tr>
                    <td><strong>Province</strong></td>
                    <td>{formData.province}</td>
                  </tr>
                  <tr>
                    <td><strong>Adresse</strong></td>
                    <td>{formData.adresse}</td>
                  </tr>
                  <tr>
                    <td><strong>Ville</strong></td>
                    <td>{formData.ville}</td>
                  </tr>
                  <tr>
                    <td><strong>Code postal</strong></td>
                    <td>{formData.codePostale}</td>
                  </tr>
                  <tr>
                    <td><strong>Téléphone</strong></td>
                    <td>{formData.telephone}</td>
                  </tr>
                  <tr>
                    <td><strong>Accepte les informations</strong></td>
                    <td>{formData.acceptIno ? "Oui" : "Non"}</td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="secondary" onClick={prevStep} className="me-2">
                Retour
              </Button>
              <Button variant="primary" onClick={() => alert("Formulaire envoyé !")}>
                Envoyer
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
