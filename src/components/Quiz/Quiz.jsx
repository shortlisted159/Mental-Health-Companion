import React, { useState } from 'react';
import {QuizData} from '../../Data/QuizData';
import './Quiz_app.css'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(Array(QuizData.length).fill(0));
  const [outputMessage, setOutputMessage] = useState("");

  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isCorrect) {
      const newScore = [...score];
      newScore[index] += 1;
      setScore(newScore);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      evaluateResults();
    }
  };

  const evaluateResults = () => {
    const maxScore = Math.max(...score);
    const mostLikelyIllnessIndices = [];
    // Find all indices with the max score
    score.forEach((value, index) => {
      if (value === maxScore) {
        mostLikelyIllnessIndices.push(index);
      }
    });

    // Generate the output message based on the number of most likely illnesses
    let message;
    if (mostLikelyIllnessIndices.length === 1) {
      message = `You might have: ${
        QuizData[mostLikelyIllnessIndices[0]].illness
      }`;
    } else {
      const illnessNames = mostLikelyIllnessIndices
        .map((index) => QuizData[index].illness)
        .filter((illness, index, self) => self.indexOf(illness) === index); // Remove duplicates
      message = `You might want to consult a doctor, the most probable illnesses might be: ${illnessNames.join(
        " / "
      )}`;
    }

    setOutputMessage(message);
  };

  return (
    <div className="quiz">
      {outputMessage ? (
        <div className="result-card">
          <h3>Quiz Results</h3>
          <p>{outputMessage}</p>
        </div>
      ) : (
        <div className="question-section">
          <h2>{QuizData[currentQuestion].question}</h2>
          <div className="answer-section">
            {QuizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    QuizData[currentQuestion].answer.includes(index),
                    currentQuestion
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;