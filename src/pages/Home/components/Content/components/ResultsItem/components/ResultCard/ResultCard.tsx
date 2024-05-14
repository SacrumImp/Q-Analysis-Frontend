import { FC } from "react";
import {
  ButtonGroup,
  Text,
} from "../../../../../../../../uikit";
import {
  ErrorResult,
  ExportResultButton,
  InitialDataModal,
  ShowInitialDataButton,
  SuccessfulResult,
} from "./components";
import { IResultCardProps } from "./types";
import { IExportCalculations } from "../../../../../../../../utils/types";
import { useModal } from "../../../../../../../../utils";
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

export const ResultCard:FC<IResultCardProps> = (props) => {

  const {
    result,
    isCurrentResult = false,
  } = props

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  const name = isCurrentResult ? "Current Result" : result.name;

  return (
    <section>
      <InitialDataModal
        name={name}
        relationsTypeProperties={result.relationTypeProperties}
        show={show}
        handleClose={handleClose}
        systemStructure={result.systemStructure}
      />
      <div>
        <Text
          type="h3"
          className="resultCard__title"
        >
          {name}
        </Text>
        <ButtonGroup className="resultCard__button-group">
          <ShowInitialDataButton onClick={onClick} />
          <ExportResultButton result={result}/>
        </ButtonGroup>
      </div>
      {getContent(result)}
    </section>
  )

}