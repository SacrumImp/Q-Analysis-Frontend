import {
  BlockMath,
  InlineMath,
} from 'react-katex';
import { EMethods } from "../../types";
import { MethodRadioButton } from "../MethodRadioButton";

const MethodDescription = () => {
  return (
    <>
      <BlockMath>
        {`ecc'(\\sigma) = \\frac{2 \\sum_{i} \\frac{q_{i}}{\\sigma_{i}}}{q_{max} (q_{max} + 1)}`}
      </BlockMath>
      where <InlineMath math={'q_{i}'}/> each <InlineMath math={'q'}/>-level where <InlineMath math={'\\sigma'}/> appears,{' '}
      <InlineMath math={'\\sigma_{i}'}/> the number of elements in <InlineMath math={'\\sigma_{i}'}/>'s equivalence class at{' '}
      level <InlineMath math={'q_{i}'}/> and <InlineMath math={'q_{max}'}/> the maximum <InlineMath math={'q'}/>-level of the complex.{' '}
      <InlineMath math={'ecc'}/> depends upon only a single simplex other than <InlineMath math={'\\sigma'}/> while <InlineMath math={"ecc'"}/>{' '}
      depends upon all the other simplices. Furthermore, <InlineMath math={'ecc'}/> takes on values in <InlineMath math={"[0, ∞]"}/> and <InlineMath math={"ecc'"}/> in <InlineMath math={"[0, 1]"}/>.
    </>
  )
}

export const DucksteinRadioButton = () => {

  return (
    <MethodRadioButton
      method={EMethods.Duckstein}
      methodDescription={<MethodDescription/>}
    />
  )

}