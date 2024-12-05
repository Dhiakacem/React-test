import { Container, Row, Col } from 'react-bootstrap'

 import { Entete } from './Entete';
 import { Ingredients } from './Ingredients'
 import { Instructions } from './Instructions';
import { IRecette } from './IRecette';
export interface Recette {
  recette: IRecette
}
export const recette: IRecette = {
  titre: "Oeufs brouillés",
  description: "Préparer des oeufs brouillés est la simplicité même. Un peu de sel et de poivre pour assaisonner, un peu de beurre pour la cuisson et des oeufs frais : c’est tout ce qu’il faut pour un déjeuner idéal. Vous pouvez modifier cette recette pour inclure vos ingrédients préférés tels que le fromage, la salsa, les légumes et les herbes.",
  ingredients: [
    "2 oeufs",
    "Sel",
    "Poivre",
    "1 c. à table (15 ml)	de beurre"
  ],
  instructions: [
    "Dans un petit bol, fouetter les oeufs, le sel et le poivre. Faire fondre le beurre dans une poêle antiadhésive à feu moyen.",
    "Verser le mélange d’œufs dans la poêle et réduire le feu à moyen-doux. Quand les oeufs commencent à prendre, les décoller doucement des parois et du fond de la poêle pour former de gros grumeaux tendres.",
    "Cuire jusqu’à ce que les oeufs épaississent et qu’il ne reste plus de liquide visible, mais sans que les oeufs soient secs."
  ]

};
 export function Recette() {
   return (
     <Container>
       <Row>
         <Col>
           <Entete titre={recette.titre} description={recette.description} />
         </Col>

       </Row>
       <Row>
         <Col lg>
           <Ingredients ingredients={recette.ingredients} />
         </Col>

         <Col lg>
           <Instructions instructions={recette.instructions} />
         </Col>
       </Row>

     </Container>
   );

 }