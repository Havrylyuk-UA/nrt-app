import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

const Header = () => {
  return (
    <div className={css.header_container}>
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
