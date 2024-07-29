import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/selectors";

const Header = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={clsx(css.header_container, {
        [css.header_container_dark]: theme === "dark",
        [css.header_container_light]: theme === "light",
      })}
    >
      <div className={css.header}>
        <div>
          <Logo />
        </div>
        <div className={css.content_chenged}>
          <LanguageBtn />
          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
