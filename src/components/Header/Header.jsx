import css from './Header.module.scss';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import LanguageBtn from '../LanguageBtn/LanguageBtn';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

const Header = () => {
  const [language, setLanguage] = useState('ua');

  const handleLanguageChange = lang => {
    setLanguage(lang);
  };

  return (
    <div className={css.header_container}>
      <div>
        <Logo langCont={language} />
      </div>
      <div className={css.content_chenged}>
        <LanguageBtn
          onLanguageChange={handleLanguageChange}
          langCont={language}
        />
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
