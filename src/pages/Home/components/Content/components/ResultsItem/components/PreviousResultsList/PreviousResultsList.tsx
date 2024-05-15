import { observer } from "mobx-react";
import { usePreviousResultsList } from "./usePreviousResultsList";
import { PreviousResult } from "./components";
import {
  Accordion,
  Text,
} from "../../../../../../../../uikit";
import { ICalculationResult } from "../../../../../../../../utils/types";

const getContent = (results: Array<ICalculationResult>) => {
  if (results.length === 0) {
    return (
      <Text>
        No calculation results
      </Text>
    )
  }
  return (
    <Accordion>
      {
        results.map((result, index) => (
          <PreviousResult 
            key={index}
            result={result}
          />
        ))
      }
    </Accordion>
  )
}

export const PreviousResultsList = observer(() => {

  const {
    results,
    count,
  } = usePreviousResultsList()

  if (count < 2) return null
  
  return (
    <section>
      <hr/>
      <Text 
        type="h3"
      >
        Previous Results
      </Text>
      <hr/>
      {getContent(results)}
    </section>
  )

})