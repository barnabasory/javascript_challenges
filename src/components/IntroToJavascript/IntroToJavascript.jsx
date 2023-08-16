import styles from "./IntroToJavascript.module.scss";
import {
  challenge1,
  object_image,
  array,
  function_img,
  date_img,
} from "../../imagesExports";
import primitiveData from "./data";

const IntroToJavascipt = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.challenge}>
        <div className={styles.heading}>
          <h2>Challenge 1</h2>
          <span>
            A code challenge that compares different data to their types
          </span>
        </div>
        <div className={styles.actual_code}>
          <code>
            <span>var myString = "Hello"</span>
            <span>console.log(typeof myString === "string") // === true</span>
          </code>
        </div>
        <div className={styles.image_div}>
          <img src={challenge1} alt="javascript_challenge" />
        </div>

        <div className={styles.try_this}></div>
        <ul className={styles.data_types}>
          <p>
            <span>
              JavaScript is a versatile programming language that deals with
              various types of data. These data types can be categorized into
              two main groups:
            </span>
            <b>Primitive data types and Reference data types.</b>
          </p>
          <h3>Primitive Data Types:</h3>
          {primitiveData.map((tile) => (
            <li className={styles.data_type}>
              <b>
                <div className={styles.bullet}></div>
                {tile.title} :
              </b>
              {tile.info}
              <span>Example: {tile.example}</span>
            </li>
          ))}

          {/* <b>Reference Data Types:</b>
          <div className={styles.data_type}>
            <b>6. Object: </b>
            Represents a collection of key-value pairs, where the keys are
            strings (or symbols) and the values can be of any data type,
            including other objects.
            <span>
              Example:
              <div className={styles.image_div}>
                <img src={object_image} alt="" />
              </div>
            </span>
          </div>
          <div className={styles.data_type}>
            <b>6. Array: </b>
            Represents an ordered list of values, indexed by integers. Arrays
            can contain elements of any data type, including other arrays or
            objects.
            <span>
              Example:
              <div className={styles.image_div}>
                <img src={array} alt="javascript-challenge" />
              </div>
            </span>
          </div>
          <div className={styles.data_type}>
            <b>6. Array: </b>
            Represents an ordered list of values, indexed by integers. Arrays
            can contain elements of any data type, including other arrays or
            objects.
            <span>
              Example:
              <div className={styles.image_div}>
                <img src={function_img} alt="javascript-challenge" />
              </div>
            </span>
          </div>
          <div className={styles.data_type}>
            <b>6. Date: </b>
            Represents a specific point in time and provides methods for working
            with dates and times.
            <span>
              Example:
              <div className={styles.image_div}>
                <img src={date_img} alt="javascript-challenge" />
              </div>
            </span>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default IntroToJavascipt;
