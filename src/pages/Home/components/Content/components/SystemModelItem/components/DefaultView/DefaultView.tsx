import { observer } from "mobx-react";
import {
  ButtonGroup,
  Text,
} from "../../../../../../../../uikit";
import {
  ImportModal,
  ImportButton,
  ClearElementsButton,
} from "../../components";
import { useModal } from "../../../../../../../../utils";
import "./styles.scss";

export const DefaultView = observer(() => {

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  return (
    <section>
      <ImportModal 
        show={show}
        handleClose={handleClose}
      />
      <ButtonGroup
        className="default-view__buttons"
      >
        <ClearElementsButton/>
        <ImportButton
          onClick={onClick}
        />
      </ButtonGroup>
      <Text className="default-view__text">
        There is no mapping for this type of relationship!
      </Text>
    </section>
  )

})