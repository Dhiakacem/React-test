

export interface TitreProps {
  titre: string;
}
export function TitrePrincipal(props: TitreProps) {
  return <h1>{props.titre}</h1>
}