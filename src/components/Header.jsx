import DrawerNav from "./DrawerNav";
import { useTranslation } from 'react-i18next'; // <-- import the hook
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();        // <-- get the translation function and i18n instance
  
  // Optional: function to switch language
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header id="header" className="content-block header-wrapper">
      {/* Drawer Navigation */}
      <DrawerNav />

      <div className="header-wrapper-inner">
        {/* Logo Centered */}
        <section className="center">
          <img
            src="/images/Syllabye-White-White.png"
            className="logo-image"
            alt={t('header.logoAlt')} // from translations
          />
          <div className="slogan">{t('header.mainSlogan')}</div>
          <div className="secondary-slogan">{t('header.secondarySlogan')}</div>
        </section>

        {/* Scroll Down Arrow */}
        <section className="bottom">
          <a id="scrollToContent" href="#">
            <img
              src="/images/arrow_down.png"
              alt={t('header.scrollDownAlt')}
            />
          </a>
        </section>
      </div>

      {/* Language toggle buttons (optional) */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <button onClick={() => switchLanguage('en')}>English</button>
        <button onClick={() => switchLanguage('es')}>Español</button>
      </div>
    </header>
  );
};

export default Header;
