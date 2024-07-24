import css from "./Footer.module.scss";

import sprite from "../../assets/sprite.svg";

const Footer = () => {
  return (
    <div className={css.footer_container}>
      <div className={css.footer}>
        <div className={css.about}>
          About:
          <p className={css.about_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quam asperiores magnam incidunt neque dolorum temporibus, esse
            deleniti, veritatis a dignissimos! Deleniti, porro. Animi officia
            quia dolore tenetur ad, blanditiis earum dignissimos. Sed laborum
            nisi atque quia eligendi minus nesciunt eum! Eveniet quia
            voluptatibus ducimus repudiandae repellat fuga quam ad.
          </p>
        </div>
        <div className={css.contact_us}>
          Contact US:
          <div className={css.social}>
            <div>
              <svg className={css.telegram} width="32" height="32">
                <use xlinkHref={`${sprite}#icon-telegram-svgrepo-com`}></use>
              </svg>
              Telegram
            </div>
            <div>
              <svg className={css.viber} width="32" height="32">
                <use xlinkHref={`${sprite}#icon-viber-color-svgrepo-com`}></use>
              </svg>
              Viber
            </div>
            <div>
              <svg className={css.whatsapp} width="32" height="32">
                <use
                  xlinkHref={`${sprite}#icon-whatsapp-color-svgrepo-com`}
                ></use>
              </svg>
              WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
