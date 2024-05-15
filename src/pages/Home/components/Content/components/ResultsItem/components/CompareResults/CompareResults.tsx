import { Badge } from "react-bootstrap";
import { observer } from "mobx-react";
import {
  Stack,
  Text,
} from "../../../../../../../../uikit";
import { useCompareResults } from "./useCompareResults";
import "./styles.scss";
import { VectorChart } from "./components";

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
              className="resuts-list__tag"
            >
              {result.name}
              <i 
                className="bi bi-x-lg resuts-list__tag-x"
                onClick={() => { deleteResult(result.id) }}
              />
            </Badge>
          ))
        }
      </Stack>
      <VectorChart />
    </section>
  )

})