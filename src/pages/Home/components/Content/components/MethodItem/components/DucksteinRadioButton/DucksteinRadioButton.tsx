import { EMethods } from "../../types";
import { MethodRadioButton } from "../MethodRadioButton";

const methodDescription = `
The eccentricity of a simplex is given by the formula
`;

export const DucksteinRadioButton = () => {

  return (
    <MethodRadioButton
      method={EMethods.Duckstein}
      methodDescription={methodDescription}
    />
  )

}