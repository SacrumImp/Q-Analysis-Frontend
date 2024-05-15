import { FC } from "react";
import { observer } from "mobx-react";
import { IPreviousResultProps } from "./types";
import {
  Accordion,
  Text,
} from "../../../../../../../../../../uikit";
import { ResultCard } from "../../../ResultCard";
import "./styles.scss";
import { ResultBadges } from "../../../ResultBadges";

export const PreviousResult:FC<IPreviousResultProps> = observer((props) => {

  const { result } = props
  
  return (
    <Accordion.Item eventKey={result.id.toString()}>
      <Accordion.Header
        textType="span"
      >
        <Text 
          className="previous-result__header"
          type="span"
        >
          {result.name}
          <ResultBadges
            inComparison={result.inComparison}
          />
        </Text>
      </Accordion.Header>
      <Accordion.Body>
        <ResultCard {...result}/>
      </Accordion.Body>      
    </Accordion.Item>
  )

})