import { useDispatch, useSelector } from "react-redux";
import css from "./ThemeBtn.module.scss";
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
    <button className={css.language_btn} onClick={changeTheme}>
      {buttonText}
    </button>
  );
};

export default ThemeBtn;
