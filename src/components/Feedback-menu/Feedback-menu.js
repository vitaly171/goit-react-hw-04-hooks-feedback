import PropTypes from 'prop-types';

import styles from './Feedback-menu.module.css';

function FeedbackMenu({ feedbackBtnsOptions, onLeaveFeedback }) {
  return (
    <div className={styles.feedbackMenu}>
      {feedbackBtnsOptions.map(opt => (
        <button
          className={styles.feedbackBtn}
          key={opt}
          type="button"
          value={opt}
          onClick={onLeaveFeedback}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

FeedbackMenu.propTypes = {
  feedbackBtnsOptions: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackMenu;