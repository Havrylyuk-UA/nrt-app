import css from './Logo.module.scss';

const Logo = ({ langCont }) => {
  const title =
    langCont === 'ua'
      ? 'ТОВ "Нові Технології Ремонтів"'
      : 'LLC "New Repair Technologies"';

  return <div className={css.logo_container}>{title}</div>;
};

export default Logo;
