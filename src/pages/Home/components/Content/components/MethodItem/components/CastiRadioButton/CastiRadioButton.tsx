import { EMethods } from "../../types";
import { MethodRadioButton } from "../MethodRadioButton";

const methodDescription = `
The eccentricity of a simplex \( \sigma \) is given by the formula

\\[
\\text{ecc}(\\sigma) = \\frac{\\hat{q} - \\check{q}}{\\check{q} + 1},
\\]

where \\( \\hat{q} \\) is the dimension of \\( \\sigma \\) as a simplex, and \\( \\check{q} \\) is the largest \\( q \\) value at which \\( \\sigma \\) is connected to some other simplex in \\( K \\).
`;

export const CastiRadioButton = () => {

  return (
    <MethodRadioButton
      method={EMethods.Casti}
      methodDescription={methodDescription}
    />
  )

}