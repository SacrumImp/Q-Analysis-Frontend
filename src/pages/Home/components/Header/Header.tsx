import {
  Text, 
  ETextTypes,
} from "../../../../uikit";
import "./styles.scss";

export const Header = () => {

  return (
    <header>
      <Text
        type={ETextTypes.H1}
        className="header-text__title"
      >
        Q-Analysis
      </Text>
      <Text
        className="header-text__sub-title"
      >
        Mathematical method for estimating the complexity of a system
      </Text>
    </header>
  )

}