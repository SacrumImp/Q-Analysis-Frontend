import { FC } from "react";
import { IPreviousResultProps } from "./types";
import { Accordion } from "../../../../../../../../../../uikit";
import { ResultCard } from "../../../ResultCard";
import { observer } from "mobx-react";

export const PreviousResult:FC<IPreviousResultProps> = observer((props) => {

  const { result } = props
  
  return (
    <Accordion.Item eventKey={result.id.toString()}>
      <Accordion.Header
        textType="span"
      >
        {result.name}
      </Accordion.Header>
      <Accordion.Body>
        <ResultCard result={result}/>
      </Accordion.Body>      
    </Accordion.Item>
  )

})