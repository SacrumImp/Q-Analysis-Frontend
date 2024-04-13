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
    case ETextTypes.h1:
      return (
        <h1 
          className={`text text__H1 ${className}`}
        >
          {children}
        </h1>
      )
    case ETextTypes.h2:
      return (
        <h2 
          className={`text text__H2 ${className}`}
        >
          {children}
        </h2>
      )
    case ETextTypes.span:
      return (
        <span 
          className={`text text__span ${className}`}
        >
          {children}
        </span>
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