import React, { useState } from "react";
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

 const onLeaveFeedback = (option) => {
    setState((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((ac, item) => (ac += item));
  }
  
  const countPositiveFeedbackPercentage = () => {
    const res = Math.round((state.good / countTotalFeedback()) * 100);
    return !Number.isNaN(res) ? res : 0;
  };
    
    const keys = Object.keys(state);
    const { good, neutral, bad } = state;
 
     
    return (
      <>
     <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
        </>);
}

export default App;