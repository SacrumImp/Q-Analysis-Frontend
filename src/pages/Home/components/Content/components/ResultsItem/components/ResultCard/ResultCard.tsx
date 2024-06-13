import { FC } from "react";
import {
  ButtonGroup,
  Text,
} from "../../../../../../../../uikit";
import {
  CompareButton,
  ErrorResult,
  ExportResultButton,
  InitialDataModal,
  RenameResultButton,
  RenameResultModal,
  SelectSubResult,
  ShowInitialDataButton,
  SuccessfulResult,
} from "./components";
import { IResultCardProps } from "./types";
import { useModal } from "../../../../../../../../utils";
import { IAnalysisResult } from "../../../../../../../../api/adapters/types";
import { ResultBadges } from "../ResultBadges";
import { useResultCard } from "./useResultCard";
import "./styles.scss";

const getContent = (isError: boolean, errorText?: string, calculationResults?: IAnalysisResult) => {
  if (isError) {
    return (
      <ErrorResult errorText={errorText} />
    )
  }
  return (
    <SuccessfulResult result={calculationResults}/>
  )
}

export const ResultCard:FC<IResultCardProps> = (props) => {

  const {
    id,
    name,
    relationTypeProperties,
    systemStructure,
    inComparison,
    isError,
    errorText,
    calculationResults,
  } = props

  const {
    show: showInitialDataModal,
    handleClose: handleCloseInitialDataModal,
    onClick: onClickInitialDataModal,
  } = useModal()

  const {
    show: showRenameModal,
    handleClose: handleCloseRenameModal,
    onClick: onClickRenameModal,
  } = useModal()

  const {
    selectedSubResultValue,
    onChangeSelectedSubResult,
  } = useResultCard()

  return (
    <section>
      <InitialDataModal
        name={name}
        relationsTypeProperties={relationTypeProperties}
        show={showInitialDataModal}
        handleClose={handleCloseInitialDataModal}
        systemStructure={systemStructure}
      />
      <RenameResultModal
        id={id}
        name={name}
        show={showRenameModal}
        handleClose={handleCloseRenameModal}
      />
      <div>
        <Text 
          type="h4"
          className="resultCard__name"
        >
          {name}
          <ResultBadges
            inComparison={inComparison}
          />
        </Text>
        <ButtonGroup className="resultCard__button-group">
          <ShowInitialDataButton onClick={onClickInitialDataModal}/>
          <RenameResultButton onClick={onClickRenameModal} />
          <CompareButton 
            id={id}
            inComparison={inComparison}
          />
          <ExportResultButton result={props}/>
        </ButtonGroup>
        <SelectSubResult
          value={selectedSubResultValue}
          onChange={onChangeSelectedSubResult}
          calculationResults={calculationResults}
        />
      </div>
      {getContent(isError, errorText, calculationResults ? calculationResults[selectedSubResultValue] : undefined)}
    </section>
  )

}