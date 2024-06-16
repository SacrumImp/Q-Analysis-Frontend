import { Text } from "../../../../Text";
import "./styles.scss";

export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <Text className="custom-tooltip__title">{payload[0].payload.title}</Text> 
        <Text className="custom-tooltip__values">
          <span>{`${payload[0].name}: ${payload[0].value}`}</span>
        </Text>
      </div>
    );
  }

  return null;
};