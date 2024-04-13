import {
  Text, 
  ETextTypes,
} from "../../../../uikit";
import "./styles.scss";

export const Header = () => {

  return (
    <header className="header">
      <Text
        type={ETextTypes.H1}
        className="header__text-title"
      >
        Q-Analysis
      </Text>
      <Text
        className="header__text-sub-title"
      >
        Mathematical method for estimating the complexity of a system
      </Text>
    </header>
  )

}