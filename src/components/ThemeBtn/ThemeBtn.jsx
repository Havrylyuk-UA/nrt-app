import { useDispatch, useSelector } from "react-redux";
import css from "./ThemeBtn.module.scss";
import clsx from "clsx";
import { toggleTheme } from "../../redux/userSlice";
import { selectTheme } from "../../redux/selectors";

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const changeTheme = () => {
    if (theme === "dark") {
      return dispatch(toggleTheme("light"));
    }
    dispatch(toggleTheme("dark"));
  };

  const buttonText = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      className={clsx(css.theme_btn, {
        [css.theme_btn_dark]: theme === "dark",
        [css.theme_btn_light]: theme === "light",
      })}
      onClick={changeTheme}
    >
      {buttonText}
    </button>
  );
};

export default ThemeBtn;
