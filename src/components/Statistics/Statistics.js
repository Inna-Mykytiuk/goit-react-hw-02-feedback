import propTypes from 'prop-types';

export function Statistics({
  good,
  bad,
  neutral,
  title,
  totalFeedback,
  feedbackPercentage,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {feedbackPercentage} %</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  title: propTypes.string,
  totalFeedback: propTypes.number.isRequired,
  feedbackPercentage: propTypes.number.isRequired,
};
