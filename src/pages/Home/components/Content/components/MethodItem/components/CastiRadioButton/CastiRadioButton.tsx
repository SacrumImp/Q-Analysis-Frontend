import {
  BlockMath,
  InlineMath,
} from 'react-katex';
import { EMethods } from "../../types";
import { MethodRadioButton } from "../MethodRadioButton";

const MethodDescription = () => {
  return (
    <>
      The eccentricity of a simplex <InlineMath math={'\\sigma'}/> is given by the formula
      <BlockMath>
        {`ecc(\\sigma) = \\frac{\\hat{q} - \\check{q}}{\\check{q} + 1}`}
      </BlockMath>
      where <InlineMath math={'\\hat{q}'}/> is the dimension of <InlineMath math={'\\sigma'}/> simplex,{' '}
      and <InlineMath math={'\\check{q}'}/> is the largest q value at which <InlineMath math={'\\sigma'}/> is connected to some other simplex in K.
    </>
  )
}

export const CastiRadioButton = () => {

  return (
    <MethodRadioButton
      method={EMethods.Casti}
      methodDescription={<MethodDescription/>}
    />
  )

}