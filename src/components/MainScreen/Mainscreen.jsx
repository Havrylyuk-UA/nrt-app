import css from './Mainscreen.module.scss';

import idealContent from '../../assets/content/content.json';

import engine from '../../assets/img/engine.png';
import outer_bearing from '../../assets/img/photo_1.jpg';
import bearing from '../../assets/img/photo_2.jpg';
import gif from '../../assets/video/videoplayback-_online-video-cutter.com_.gif';

const Mainscreen = () => {
  return (
    <div className={css.main_container}>
      <div className={css.main_desc_cont}>
        <img className={css.main_img_engine} src={engine} alt="engine" />

        <div className={css.main_desc_table}>
          <h2 className={css.main_table_title}>
            {idealContent.ua.description[0]}
          </h2>
          <p className={css.main_table_text}>
            {idealContent.ua.description[1]}
          </p>
        </div>
      </div>
      <div className={css.main_desc_cont}>
        <img className={css.main_img} src={outer_bearing} alt="outer bearing" />
        <div className={css.main_desc_text}>
          <p className={css.main_text}>{idealContent.ua.description[2]}</p>

          <p className={css.main_text}>{idealContent.ua.description[3]}</p>
        </div>
      </div>
      <div className={css.main_desc_cont}>
        <img className={css.main_img} src={bearing} alt="bearing" />
        <div className={css.main_desc_text}>
          <p className={css.main_text}>{idealContent.ua.description[4]}</p>
          <p className={css.main_text}>{idealContent.ua.description[5]}</p>
          <p className={css.main_text}>{idealContent.ua.description[6]}</p>
        </div>
      </div>
      <div className={css.main_gif_cont}>
        <img src={gif} alt="bearing gif" />
      </div>
    </div>
  );
};

export default Mainscreen;
