import { FC } from "react";
import { ETextTypes, ITextParams } from "./types";
import "./styles.scss";

export const Text:FC<ITextParams> = (props) => {

  const {
    type,
    className = '',
    children,
  } = props

  const generalCN = `text ${className}`

  switch (type) {
    case ETextTypes.H1:
      return (
        <h1 
          className={`text text__H1 ${className}`}
        >
          {children}
        </h1>
      )
    default:
      return (
        <p
          className={generalCN}
        >
          {children}
        </p>
      )
  }

}