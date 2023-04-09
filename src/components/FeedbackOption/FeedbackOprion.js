import propTypes from 'prop-types';
import { Button } from './FeedbackOption.styled';

export function FeedbackOption({ options, addFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button key={option} name={option} onClick={addFeedback}>
          {option}
        </Button>
      ))}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  addFeedback: propTypes.func.isRequired,
};
