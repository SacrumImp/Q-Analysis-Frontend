import { FC } from "react";
import { Text as SimpleText } from "../../../Text";
import { ITextProps } from "./types";
import "./styles.scss";

export const Text:FC<ITextProps> = (props) => {
  
  const {
    hasError,
    errorText,
    className = "",
  } = props

  if (!hasError) return null

  return (
    <SimpleText
      className={`error-text__text ${className}`}
    >
      {errorText}
    </SimpleText>
  )
}