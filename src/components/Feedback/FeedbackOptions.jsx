import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return(
  <div className={css.btnList}>
      {options.map((option) => {
      return(
      <button className={css.feedbackBtn}
        onClick={() => onLeaveFeedback(option)}
        key={option}
        type="button"
      >
        {option}
      </button>);
    })}
  </div>
);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};