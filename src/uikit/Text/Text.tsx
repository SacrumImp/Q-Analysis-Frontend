import { FC } from "react";
import { ITextParams } from "./types";
import "./styles.scss";

export const Text:FC<ITextParams> = (props) => {

  const {
    type,
    className = '',
    children,
  } = props

  const generalCN = `text ${className}`

  switch (type) {
    case "h1":
      return (
        <h1 
          className={`text text__H1 ${className}`}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 
          className={`text text__H2 ${className}`}
        >
          {children}
        </h2>
      )
    case "span":
      return (
        <span 
          className={`text text__span ${className}`}
        >
          {children}
        </span>
      )
    case "h3":
      return (
        <h3 
          className={`text text__H3 ${className}`}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 
          className={`text text__H4 ${className}`}
        >
          {children}
        </h4>
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