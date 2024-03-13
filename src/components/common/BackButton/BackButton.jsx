import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = () => {
  const location = useLocation();
  const backButtonHref = location.state?.from ?? `/movies`;

  return (
    <div className={styles.backLink}>
      <Link to={backButtonHref}>
        <IoIosArrowRoundBack />
        <span>Back to Trending</span>
      </Link>
    </div>
  );
};

export default BackButton;
