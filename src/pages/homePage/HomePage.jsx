import styles from "./HomePage.module.scss";
import data from "../homedata";

const HomePage = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <header>
        <h1>Javacript Challenges</h1>
        <h2>Directory of challenges:</h2>
      </header>
      <div className={styles.infos}>
        {data.map((tile) => (
          <section className={styles.info}>
            <b>{tile.title}:</b>
            <code>
              <span>- {tile.cha}</span>
              <span>- {tile.chb}</span>
              <span>- {tile.chc}</span>
            </code>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
