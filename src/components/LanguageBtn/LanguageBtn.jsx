import { useDispatch, useSelector } from "react-redux";
import css from "./LanguageBtn.module.scss";
import { toggleLanguage } from "../../redux/userSlice";
import { selectLanguage, selectTheme } from "../../redux/selectors";
import clsx from "clsx";

const LanguageBtn = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const theme = useSelector(selectTheme);

  const changeLanguage = () => {
    if (language === "en") {
      return dispatch(toggleLanguage("ua"));
    }
    dispatch(toggleLanguage("en"));
  };

  const buttonText = language === "ua" ? "EN" : "UA";

  return (
    <button
      className={clsx(css.language_btn, {
        [css.language_btn_dark]: theme === "dark",
        [css.language_btn_light]: theme === "light",
      })}
      onClick={changeLanguage}
    >
      {buttonText}
    </button>
  );
};

export default LanguageBtn;
