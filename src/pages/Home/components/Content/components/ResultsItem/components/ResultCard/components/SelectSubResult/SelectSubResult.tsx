import { FC } from "react";
import { ISelectSubResultProps } from "./types";
import { Form } from "../../../../../../../../../../uikit";
import { mergeKeys } from "./logic";
import "./styles.scss";

export const SelectSubResult:FC<ISelectSubResultProps> = (props) => {

  const {
    calculationResults,
    value,
    onChange,
  } = props

  if (calculationResults === undefined || calculationResults.length < 2) return null

  return (
    <Form.Select
      value={value}
      onChange={onChange}
      className="select-sub-result"
    >
      {
        calculationResults?.map((result, index) => {
          return (
            <option
              value={index}
              key={index}
            >
              {mergeKeys(result.keys, result.isAggregated)}
            </option>
          )
        })
      }
    </Form.Select>
  )

}