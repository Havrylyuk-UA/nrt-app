import { useDispatch, useSelector } from "react-redux";
import css from "./LanguageBtn.module.scss";
import { toggleLanguage } from "../../redux/userSlice";
import { selectLanguage } from "../../redux/selectors";

const LanguageBtn = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const changeLanguage = () => {
    if (language === "en") {
      return dispatch(toggleLanguage("ua"));
    }
    dispatch(toggleLanguage("en"));
  };

  const buttonText = language === "ua" ? "Language" : "Мова";

  return (
    <button className={css.language_btn} onClick={changeLanguage}>
      {buttonText}
    </button>
  );
};

export default LanguageBtn;
