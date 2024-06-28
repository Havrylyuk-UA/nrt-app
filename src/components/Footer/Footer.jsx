import css from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.about}>
        About:
        <p className={css.about_p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam
          asperiores magnam incidunt neque dolorum temporibus, esse deleniti,
          veritatis a dignissimos! Deleniti, porro. Animi officia quia dolore
          tenetur ad, blanditiis earum dignissimos. Sed laborum nisi atque quia
          eligendi minus nesciunt eum! Eveniet quia voluptatibus ducimus
          repudiandae repellat fuga quam ad.
        </p>
      </div>
      <div className={css.contact_us}>
        Contct US:
        <div>Telegram</div>
        <div>Viber</div>
        <div>WhatsApp</div>
      </div>
      <div className={css.footer_form}>
        <form>
          <label>
            <input type="text" />
          </label>
          <textarea name="" id=""></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
