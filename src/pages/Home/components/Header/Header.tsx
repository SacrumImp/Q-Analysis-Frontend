import {
  Text,
} from "../../../../uikit";
import "./styles.scss";

export const Header = () => {

  return (
    <header className="header">
      <Text
        type="h1"
        className="header__text-title"
      >
        Q-Analysis
      </Text>
      <Text
        className="header__text-sub-title"
      >
        Mathematical method for estimating structural complexity of a system's model
      </Text>
    </header>
  )

}