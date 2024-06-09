import { observer } from "mobx-react";
import {
  Stack,
  Text,
  Badge,
} from "../../../../../../../../uikit";
import { useCompareResults } from "./useCompareResults";
import {
  EccentricitiesChart,
  VectorChart,
} from "./components";
import "./styles.scss";

export const CompareResults = observer(() => {

  const {
    results,
    deleteResult,
  } = useCompareResults()

  if (results.length === 0) return null

  return (
    <section>
      <hr/>
      <Text 
        type="h3"
      >
        Сomparison of results
      </Text>
      <hr/>
      <Stack 
        gap={2}
        className="resuts-list__stack"
      >
        {
          results.map((result, index) => (
            <Badge
              key={index}
              bg="primary"
              className="resuts-list__tag"
              hasCloseButton
              onClose={() => { deleteResult(result.id) }}
            >
              {result.name}
            </Badge>
          ))
        }
      </Stack>
      <VectorChart />
      <EccentricitiesChart />
    </section>
  )

})