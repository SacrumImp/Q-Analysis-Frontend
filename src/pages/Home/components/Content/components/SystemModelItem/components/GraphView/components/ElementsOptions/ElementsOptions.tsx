import { FC } from "react";
import { IElementsOptionsProps } from "./types";

export const ElementsOptions:FC<IElementsOptionsProps> = (props) => {

  const {
    values,
  } = props

  return (
    <>
      {
        values.map((option, index) => {
          return (
            <option
              key={index}
              value={option}
            >
              {option}
            </option>
          )
        })
      }
    </>
  )

}