import { Component } from 'react';
import { FeedbackOption } from './FeedbackOption/FeedbackOprion';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    // Math.round((this.state.good / totalFeeds) * 100);
    if (this.state.good) {
      const feedbackPercentage =
        this.state.good / (this.countTotalFeedback() * 100);
      return feedbackPercentage;
    }
    return 0;
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <FeedbackOption
          options={Object.keys(this.state)}
          title="Please leave feedback"
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          title="Statistic"
          totalFeedback={this.countTotalFeedback()}
        ></Statistics>
      </div>
    );
  }
}
