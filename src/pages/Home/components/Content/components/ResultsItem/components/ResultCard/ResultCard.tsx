import { FC } from "react";
import {
  ButtonGroup,
  Text,
} from "../../../../../../../../uikit";
import {
  ErrorResult,
  ExportResultButton,
  InitialDataModal,
  RenameResultButton,
  RenameResultModal,
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

  return (
    <section>
      <InitialDataModal
        name={result.name}
        relationsTypeProperties={result.relationTypeProperties}
        show={showInitialDataModal}
        handleClose={handleCloseInitialDataModal}
        systemStructure={result.systemStructure}
      />
      <RenameResultModal
        id={result.id}
        name={result.name}
        show={showRenameModal}
        handleClose={handleCloseRenameModal}
      />
      <div>
        <Text type="h4">
          {result.name}
        </Text>
        <ButtonGroup className="resultCard__button-group">
          <ShowInitialDataButton onClick={onClickInitialDataModal}/>
          <RenameResultButton onClick={onClickRenameModal} />
          <ExportResultButton result={result}/>
        </ButtonGroup>
      </div>
      {getContent(result)}
    </section>
  )

}