import { observer } from "mobx-react";
import { Text } from "../../../../../../../../uikit";
import { useWeightedParams } from "./useWeightedParams";

export const WeightedParams = observer(() => {

  const {
    value,
    onChange,
  } = useWeightedParams()

  return (
    <div>
      <Text
        type="span"
      >
        Slice Value:{' '}
      </Text>
      <input
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  )

})