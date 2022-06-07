import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btnList}>
    {options.map((option) => (
      <button className={css.feedbackBtn}
        onClick={() => onLeaveFeedback(option)}
        key={option}
        type="button"
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;