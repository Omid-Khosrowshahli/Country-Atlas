import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.logoContainer}>
          <img src='/favicon.ico' />
          <div className={styles.logoText}>Country <span style={{ color: '#0077BE' }}>Atlas</span></div>
        </div>
        <div className={styles.navigation}>
          <a href="https://majority.com/en" target='_blank'>Visit Majority</a>
          <a href="https://restcountries.com/" target='_blank'>API</a>
        </div>
      </header>
      <main>{children}</main>
      <footer>&copy; 2024 Country Atlas. All rights reserved.</footer>
    </div>
  );
};

export default MainLayout;