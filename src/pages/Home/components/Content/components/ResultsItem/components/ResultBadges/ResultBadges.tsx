import { FC } from "react";
import {
  Badge,
  Stack,
} from "../../../../../../../../uikit";
import { IResultBadgesProps } from "./types";
import "./styles.scss";

export const ResultBadges:FC<IResultBadgesProps> = (props) => {

  const {
    inComparison,
  } = props

  if (!inComparison) return null

  return (
    <Stack
      gap={4}
      className="result-badges__stack"
    >
      {
        inComparison ? 
        <Badge
          pill
          bg="success"
        >
          In comparison
        </Badge>
        :
        null
      }
    </Stack>
  )

}