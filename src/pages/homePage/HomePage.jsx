import styles from "./HomePage.module.scss";
import data from "../homedata";
import { Link } from "react-router-dom";

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
            <b>
              <Link to={tile.link}>{tile.title}: </Link>
            </b>
            <code>
              <span>- {tile.cha}</span>
              <span>- {tile.chb}</span>
              <span>- {tile.chc}</span>
            </code>
            and many more........
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
