import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="footer" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, THE PIZZA, WELL BAKES EVERY SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            G-13 Gulberg Town, unknown sector and block, Karachi.
            <br />
            021-111-111-11
          </p>
          <p className={styles.text}>
            G-13 Gulberg Town, unknown sector and block, Karachi.
            <br />
            021-111-111-11
          </p>
          <p className={styles.text}>
            G-13 Gulberg Town, unknown sector and block, Karachi.
            <br />
            021-111-111-11
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY <br /> 9:00 AM - 10:00 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY <br /> 12:00 PM - 1:00 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
