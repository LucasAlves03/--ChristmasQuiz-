import React from 'react'
import PropTypes from 'prop-types'; 
import './FinalScreen.css'
// eslint-disable-next-line react/prop-types
const FinalScreen = ({score, totalQuestions, onClose}) => {
    const percentage =(score / totalQuestions) * 100;

    return(
        <div className="final-screen">
            <div className="final-content">
                <img className='final-img' src="img/finalScreenImg.jpg" alt="Imagem de Parabéns"/>
                <h2>Parabéns! Você concluiu o Quiz.</h2>
                <p>Sua pontuação: {score} de {totalQuestions}</p>
                <p>Porcentagem de acerto:{percentage.toFixed(2)}%</p>
                <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }} />

                </div>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};
FinalScreen.propTypes = {
    score: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired
  }
export default FinalScreen;