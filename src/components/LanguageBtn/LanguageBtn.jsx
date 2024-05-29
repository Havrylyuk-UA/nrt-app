import css from './LanguageBtn.module.scss';

const LanguageBtn = ({ onLanguageChange, langCont }) => {
  const handleButtonClick = () => {
    const newLanguage = langCont === 'ua' ? 'en' : 'ua';
    onLanguageChange(newLanguage);
  };

  const buttonText = langCont === 'ua' ? 'Language' : 'Мова';

  return (
    <button className={css.language_btn} onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
};

export default LanguageBtn;
