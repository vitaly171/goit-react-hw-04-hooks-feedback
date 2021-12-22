import { Component } from 'react';
import styles from './App.module.css';

import FeedbackMenu from './components/Feedback-menu';
import Statistics from './components/Statistics';
import Section from './components/Section/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.value;
    this.setState(prevState => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100) || 0;
  }
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackBtnsOptions = Object.keys(this.state);

    return (
      <div className={styles.app}>
        <Section title={'Please leave feedback'}>
          <div className={styles.feedbackForm}>
            <FeedbackMenu
              feedbackBtnsOptions={feedbackBtnsOptions}
              onLeaveFeedback={this.onLeaveFeedback}
            />
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default App;