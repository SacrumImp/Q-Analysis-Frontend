import { Text } from "../../../../Text";
import "./styles.scss";

export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    var rawPayload = payload[0].payload
    return (
      <div className="custom-tooltip">
        <Text className="custom-tooltip__title">{`${rawPayload.name.prefix}: ${rawPayload.name.value}`}</Text>
        {
          rawPayload.values.map((value: any, index: number) => ( 
            <Text
              key={index}
              className="custom-tooltip__values"
            >
              <span style={{"color": value.color}}>{`${value.name}: ${value.value === null ? "∞" : value.value}`}</span>
              {
                value.additionalInfo &&
                <span className="custom-tooltip__additional-info">({value.additionalInfo})</span>
              }
            </Text>
          ))
        }
      </div>
    );
  }

  return null;
};