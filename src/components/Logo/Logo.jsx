import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/selectors";
import css from "./Logo.module.scss";

const Logo = () => {
  const language = useSelector(selectLanguage);

  const title =
    language === "ua"
      ? 'ТОВ "Нові Технології Ремонтів"'
      : 'LLC "New Repair Technologies"';

  return <div className={css.logo_container}>{title}</div>;
};

export default Logo;
