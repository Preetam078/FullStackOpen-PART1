import React from 'react';

const Rating = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good + neutral + bad) / 3;
  const positive = (good / total) * 100;

  return (
    <div>
      {total === 0 ? (
        <h3>No Feedback Given</h3>
      ) : (
        <>
          <h3>Good {good}</h3>
          <h3>Neutral {neutral}</h3>
          <h3>Bad {bad}</h3>
          <h3>All {total}</h3>
          <h3>Average {average}</h3>
          <h3>Positive {positive}</h3>
        </>
      )}
    </div>
  );
};

export default Rating;
