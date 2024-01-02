import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import FinalScreen from './FinalScreen';

const initialQuestions = [

  {
    question: 'Qual é o animal associado ao Natal no horóscopo chinês?',
    options: ['Dragão', 'Cavalo', 'Cabra', 'Rato'],
    correctAnswer: 'Rato',
  },
  {
    question: 'Em que país surgiu a tradição de decorar árvores de Natal?',
    options: ['Alemanha', 'Estados Unidos', 'França', 'Itália'],
    correctAnswer: 'Alemanha',
  },
  {
    question: 'Qual é o nome do famoso ballet apresentado durante a época natalina?',
    options: ['O Quebra-Nozes', 'Lago dos Cisnes', 'Romeu e Julieta', 'O Corsário'],
    correctAnswer: 'O Quebra-Nozes',
  },
  {
    question: 'O que o personagem Frosty, o boneco de neve, ganhou que o fez ganhar vida?',
    options: ['Cenoura no nariz', 'Chapéu Mágico', 'Botões de Carvão', 'Lenço Mágico'],
    correctAnswer: 'Chapéu Mágico',
  },
  {
    question: 'Em qual continente o Natal ocorre durante o verão?',
    options: ['África', 'América do Sul', 'Austrália', 'Ásia'],
    correctAnswer: 'Austrália',
  },
  {
    question: 'O que simboliza a cor verde nas decorações de Natal?',
    options: ['Paz', 'Amor', 'Esperança', 'Alegria'],
    correctAnswer: 'Esperança',
  },
  {
    question: 'Qual é o nome da cidade onde se passa a história do "Milagre na Rua 34"?',
    options: ['Nova York', 'Londres', 'Paris', 'Roma'],
    correctAnswer: 'Nova York',
  },
  {
    question: 'O que é tradição comer no Reino Unido no dia de Natal?',
    options: ['Pavê', 'Pudim de Natal', 'Fish and Chips', 'Frango Assado'],
    correctAnswer: 'Pudim de Natal',
  },
  {
    question: 'Qual é o título da canção que começa com "Noite feliz, noite feliz"?',
    options: ['Noite Feliz', 'Branco Natal', 'Então é Natal', 'Jingle Bells'],
    correctAnswer: 'Noite Feliz',
  },
  {
    question: 'O que é pendurado na parte de trás das portas durante o Natal na Irlanda?',
    options: ['Meias', 'Guirlandas', 'Visco', 'Uma Coroa'],
    correctAnswer: 'Visco',
  },
  {
    question: 'O que as crianças deixam para o Papai Noel na véspera de Natal nos EUA?',
    options: ['Biscoitos e Leite', 'Cenouras', 'Chocolates', 'Cartas de Agradecimento'],
    correctAnswer: 'Biscoitos e Leite',
  },
  {
    question: 'Qual é a bebida tradicional consumida no Natal na Suécia?',
    options: ['Grogue', 'Vinho Quente', 'Glögg', 'Champagne'],
    correctAnswer: 'Glögg',
  },
  {
    question: 'O que é tradição dar às crianças no Dia de São Nicolau, em 6 de dezembro?',
    options: ['Presentes', 'Doces', 'Carvão', 'Roupas'],
    correctAnswer: 'Doces',
  },
  {
    question: 'O que é a Estrela de Belém na tradição natalina?',
    options: ['Enfeite de Árvore', 'Enfeite de Mesa', 'Guirlanda', 'Símbolo do Nascimento de Jesus'],
    correctAnswer: 'Símbolo do Nascimento de Jesus',
  },
  {
    question: 'Qual é o nome do ajudante do Papai Noel?',
    options: ['Elfo', 'Duende', 'Gnomo', 'Fada'],
    correctAnswer: 'Elfo',
  },
  {
    question: 'Em que dia é comemorado o Natal?',
    options: ['24 de dezembro', '25 de dezembro', '31 de dezembro', '1 de janeiro'],
    correctAnswer: '25 de dezembro',
  },
  {
    question: 'Qual é o significado da palavra "Natal"?',
    options: ['Presentes', 'Nascimento', 'Alegria', 'Família'],
    correctAnswer: 'Nascimento',
  },
  {
    question: 'O que os Reis Magos trouxeram como presente para o menino Jesus?',
    options: ['Ouro, Incenso e Mirra', 'Brinquedos', 'Roupas', 'Dinheiro'],
    correctAnswer: 'Ouro, Incenso e Mirra',
  },
  {
    question: 'Qual é a comida tradicional consumida no Natal na Itália?',
    options: ['Panetone', 'Stollen', 'Tiramisù', 'Pernil de Porco'],
    correctAnswer: 'Panetone',
  },
  {
    question: 'Qual é o nome do feriado que antecede o Natal?',
    options: ['Dia de Ação de Graças', 'Dia das Bruxas', 'Dia de São Valentim', 'Dia da Independência'],
    correctAnswer: 'Dia de Ação de Graças',
  },
  {
    question: 'O que os franceses costumam comer na véspera de Natal?',
    options: ['Croissant', 'Baguette', 'Escargot', 'Refeição Festiva'],
    correctAnswer: 'Refeição Festiva',
  },
  {
    question: 'Qual é o país de origem do Pai Natal (Papai Noel)?',
    options: ['Finlândia', 'Canadá', 'Alemanha', 'Noruega'],
    correctAnswer: 'Finlândia',
  },
  {
    question: 'Qual é o nome da renna do nariz vermelho?',
    options: ['Cometa', 'Rudolph', 'Cupido', 'Dasher'],
    correctAnswer: 'Rudolph',
  },
  {
    question: 'O que é colocado nas meias durante a véspera de Natal?',
    options: ['Carvão', 'Dinheiro', 'Doces', 'Presentes'],
    correctAnswer: 'Presentes',
  },
  {
    question: 'Qual é a planta frequentemente associada ao Natal?',
    options: ['Orquídea', 'Rosa', 'Hortênsia', 'Azevinho'],
    correctAnswer: 'Azevinho',
  },
  {
    question: 'Em qual país a tradição de pendurar meias na lareira teve origem?',
    options: ['Inglaterra', 'Itália', 'Holanda', 'Estados Unidos'],
    correctAnswer: 'Inglaterra',
  },
  {
    question: 'O que significa a palavra "Feliz Natal" em francês?',
    options: ['Joyeux Noël', 'Feliz Navidad', 'Buon Natale', 'Frohe Weihnachten'],
    correctAnswer: 'Joyeux Noël',
  },
  {
    question: 'Qual é o nome da festa sueca de celebração do Advento?',
    options: ['Luciafest', 'Midsommar', 'Valborgsmässoafton', 'Jultid'],
    correctAnswer: 'Luciafest',
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const [questions, setQuestions] = useState(shuffleArray(initialQuestions));

  const handleAnswer = (selectedOption) => {
    if (!answerSelected && !quizComplete) {
      setAnswerSelected(true);
      setTimeout(() => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
          setBestScore(bestScore + 1);
        } else {
          setBestScore(Math.max(score, bestScore));
        }
        setAnswerSelected(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setQuizComplete(true);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500); 
    }
    
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setBestScore(0);
    setQuizComplete(false);
    setQuestions(shuffleArray(initialQuestions));
  };

  return (
    <div>
      <h1>Quiz de Natal</h1>
      <h2 className='questionN'>{` ${currentQuestionIndex + 1} / ${questions.length}`}</h2>
      {quizComplete ? (
        <FinalScreen score={score} totalQuestions={questions.length} onClose={handleClose} />
      ) : (
        <>
          <img className="quiz-img" src="img/santaQuiz.avif" alt="" />
          <Score currentScore={score} bestScore={bestScore} />
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleAnswer}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
