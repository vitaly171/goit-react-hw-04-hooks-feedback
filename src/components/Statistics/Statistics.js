import PropTypes from 'prop-types';
import Notification from './Notification';
import styles from './Statistics.module.css';

function Statistics(props) {
  const { good, bad, neutral, total, positivePercentage } = props;
  return (
    <div className={styles.stat}>
      <h2 className={styles.stat__title}>Statistics:</h2>
      {total === 0 ? (
        <Notification message={'No feedback given'} />
      ) : (
        <ul className={styles.stat__list}>
          <li className={styles.stat__item}>Good: {good}</li>
          <li className={styles.stat__item}>Bad: {bad}</li>
          <li className={styles.stat__item}>Neutral: {neutral}</li>
          <li className={styles.stat__item}>Total: {total}</li>
          <li className={styles.stat__item}>
            Positive percentage: {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;