import { useState } from 'react';
import styles from './App.module.css';

import FeedbackMenu from './components/Feedback-menu';
import Statistics from './components/Statistics';
import Section from './components/Section/';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = (e) => {
    const option = e.target.value;
    
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback();
  
  const countPositiveFeedbackPercentage = () => {

    return Math.round((good / totalFeedback) * 100) || 0
  };

  const positiveFeedback = countPositiveFeedbackPercentage();

return (
    <div className={styles.app}>
        <Section title={'Please leave feedback'}>
          <div className={styles.feedbackForm}>
            <FeedbackMenu
              feedbackBtnsOptions={options}
              onLeaveFeedback={onLeaveFeedback}
            />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          </div>
        </Section>
      </div>

  )
  
}
