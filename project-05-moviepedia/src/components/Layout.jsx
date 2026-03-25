import logo from "../asset/logo.svg";
import LocaleSelect from "../contexts/LocaleSelect";
import styles from "./Layout.module.css";
import useTranslate from "../hooks/useTranslate";

function Layout({ children }) {
  const t = useTranslate();

  return (
    <div className={styles.layout}>
      {/* 사이트 header */}
      <div className={styles.headerBg}>
        <header className={styles.header}>
          <a href="./">
            <img src={logo} alt="로고" />
          </a>
          <div>
            <LocaleSelect className={styles.select} />
          </div>
        </header>
      </div>

      {/* 사이트 main */}
      <div>
        <main className={styles.main}>{children}</main>
      </div>

      {/* 사이트 footer */}
      <div className={styles.footerBg}>
        <footer className={styles.footer}>
          {t("term of service")} | {t("privacy policy")}
        </footer>
      </div>
    </div>
  );
}
export default Layout;
