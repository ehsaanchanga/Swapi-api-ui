import { HashLoader } from 'react-spinners';
import styles from '../styles/Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <HashLoader color='#eeeeee' size={80} />
    </div>
  );
};

export default Loader;
