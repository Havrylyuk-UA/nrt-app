import { useDispatch, useSelector } from "react-redux";
import css from "./ThemeBtn.module.scss";
import clsx from "clsx";
import { toggleTheme } from "../../redux/userSlice";
import { selectTheme } from "../../redux/selectors";
import sprite from "../../assets/sprite.svg";

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const changeTheme = () => {
    if (theme === "dark") {
      return dispatch(toggleTheme("light"));
    }
    dispatch(toggleTheme("dark"));
  };

  const icon = theme === "dark" ? "icon-idea-on" : "icon-idea-off";

  return (
    <button
      className={clsx(css.theme_btn, {
        [css.theme_btn_dark]: theme === "dark",
        [css.theme_btn_light]: theme === "light",
      })}
      onClick={changeTheme}
    >
      <svg className={css.whatsapp} width="24" height="24">
        <use xlinkHref={`${sprite}#${icon}`}></use>
      </svg>
    </button>
  );
};

export default ThemeBtn;
