import { FC } from "react";
import { IHorizontalScrollContainerProps } from "./types";
import "./styles.scss";

export const HorizontalScrollContainer:FC<IHorizontalScrollContainerProps> = (props) => {

  const { children } = props

  return (
    <div className="scroll-container">
      {children}
    </div>
  )

}