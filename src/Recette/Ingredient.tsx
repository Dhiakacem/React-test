import React from "react";
import { NomProps } from "./NomProps";
export function Ingredient(props: NomProps) {
    return <li>{props.nom}</li>;
}
