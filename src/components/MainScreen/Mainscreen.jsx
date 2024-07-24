import css from "./Mainscreen.module.scss";
import { useSelector } from "react-redux";
import idealContent from "../../assets/content/content.json";
import { selectLanguage } from "../../redux/selectors";

import engine from "../../assets/img/engine.png";
import outer_bearing from "../../assets/img/photo_1.jpg";
import bearing from "../../assets/img/photo_2.jpg";
import gif from "../../assets/gif/videoplayback-_online-video-cutter.com_.gif";

const Mainscreen = () => {
  const language = useSelector(selectLanguage);

  const content = idealContent[language];

  if (!content) {
    return <div>Error: Content not available for the selected language.</div>;
  }

  return (
    <div className={css.main_container}>
      <div className={css.main_desc_cont}>
        <img className={css.main_img_engine} src={engine} alt="Engine" />
        <div className={css.main_desc_table}>
          <h2 className={css.main_table_title}>{content.description[0]}</h2>
          <p className={css.main_table_text}>{content.description[1]}</p>
        </div>
      </div>
      <div className={css.main_desc_cont}>
        <img className={css.main_img} src={outer_bearing} alt="Outer Bearing" />
        <div className={css.main_desc_text}>
          <p className={css.main_text}>{content.description[2]}</p>
          <p className={css.main_text}>{content.description[3]}</p>
        </div>
      </div>
      <div className={css.main_desc_cont}>
        <img className={css.main_img} src={bearing} alt="Bearing" />
        <div className={css.main_desc_text}>
          <p className={css.main_text}>{content.description[4]}</p>
          <p className={css.main_text}>{content.description[5]}</p>
          <p className={css.main_text}>{content.description[6]}</p>
        </div>
      </div>
      <div className={css.main_gif_cont}>
        <img src={gif} alt="Bearing GIF" />
      </div>
    </div>
  );
};

export default Mainscreen;
