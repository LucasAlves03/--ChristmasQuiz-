// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; 
function Score({ currentScore, bestScore })  {
    return (
        <div>
          <button className='score'>Score: {currentScore}</button>
          <button className='score'>Best score: {bestScore}</button>
        </div>
      );
    }
    Score.propTypes = {
      currentScore: PropTypes.number.isRequired,
      bestScore: PropTypes.number.isRequired
    }
export default Score;

