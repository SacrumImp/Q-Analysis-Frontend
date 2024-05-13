import { FC } from "react";
import { observer } from "mobx-react";
import {
  ButtonGroup,
  Text,
} from "../../../../../../../../uikit";
import {
  ErrorResult,
  ExportResultButton,
  SuccessfulResult,
} from "./components";
import { IResultCardProps } from "./types";
import { IExportCalculations } from "../../../../../../../../utils/types";
import "./styles.scss";

const getContent = (result: IExportCalculations) => {
  if (result.isError) {
    return (
      <ErrorResult errorText={result.errorText} />
    )
  }
  return (
    <SuccessfulResult result={result.calculationResults}/>
  )
}

export const ResultCard:FC<IResultCardProps> = observer((props) => {

  const { result } = props

  return (
    <section>
      <div>
        <Text
          type="h3"
          className="resultCard__title"
        >
          Current Result
        </Text>
        <ButtonGroup className="resultCard__button-group">
          <ExportResultButton result={result}/>
        </ButtonGroup>
      </div>
      {getContent(result)}
    </section>
  )

})