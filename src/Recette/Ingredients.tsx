
import { Ingredient } from './Ingredient'
import { TitreSecondaire } from './TitreSecondaire';

export interface IngredientsProps {

  ingredients: string[]
}
export function Ingredients(props: IngredientsProps) {
  return (<div>
    <TitreSecondaire titre="Ingredients" />
    <ul>
      {props.ingredients.map((ingredient =>
        <Ingredient nom={ingredient} key={ingredient} />
      ))}
    </ul>
  </div>)
}
