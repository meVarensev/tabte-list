import styles from "./loader.module.scss";
import { classNames } from "../../utils/class-names";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ul className={styles.hexagonContainer}>
        <li className={classNames(styles.hexagon, {} , [styles.hex_1])} />
        <li className={classNames(styles.hexagon, {} , [styles.hex_2])} />
        <li className={classNames(styles.hexagon, {} , [styles.hex_3])}/>
        <li className={classNames(styles.hexagon, {} , [styles.hex_4])} />
        <li className={classNames(styles.hexagon, {} , [styles.hex_5])}/>
        <li className={classNames(styles.hexagon, {} , [styles.hex_6])} />
        <li className={classNames(styles.hexagon, {} , [styles.hex_7])} />
      </ul>
    </div>
  );
};

export { Loader };
