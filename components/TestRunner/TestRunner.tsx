'use client';

import { checkAnswer } from '@/lib/api/clientApi';
import { Category, CheckAnswerResponse, Question } from '@/lib/api/serverApi';
import { useState } from 'react';
import css from './TestRunner.module.css';

type TestRunnerProps = {
  category: Category;
  questions: Question[];
};

export function TestRunner({ category, questions }: TestRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [checkResult, setCheckResult] = useState<CheckAnswerResponse | null>(
    null
  );
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerId(null);
    setCheckResult(null);
    setIsFinished(false);
    setCorrectAnswersCount(0);
  };

  if (isFinished) {
    return (
      <div className={css.finish}>
        <h2 className={css.finishTitle}>Тест завершено 🎉</h2>

        <p className={css.finishText}>
          Правильних відповідей: {correctAnswersCount} з {questions.length}
        </p>

        <button className={css.button} onClick={handleRestartTest}>
          Пройти ще раз
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion === undefined) {
    return null;
  }

  const handleChecked = async () => {
    if (selectedAnswerId === null) {
      return;
    }

    setIsChecking(true);

    try {
      const res = await checkAnswer({
        questionId: currentQuestion._id,
        answerId: selectedAnswerId,
      });

      if (res.isCorrect) {
        setCorrectAnswersCount((prev) => prev + 1);
      }

      setCheckResult(res);
    } finally {
      setIsChecking(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedAnswerId(null);
    setCheckResult(null);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <h1 className={css.title}>{category.title}</h1>

        <p className={css.progress}>
          Питання {currentQuestionIndex + 1} з {questions.length}
        </p>

        <h2 className={css.question}>{currentQuestion.question}</h2>

        <ul className={css.answers}>
          {currentQuestion.answers.map((answer) => (
            <li key={answer._id} className={css.answerItem}>
              <label htmlFor={answer._id} className={css.answerLabel}>
                <input
                  className={css.answerInput}
                  value={answer._id}
                  type="radio"
                  name="answer"
                  id={answer._id}
                  onChange={() => setSelectedAnswerId(answer._id)}
                  checked={selectedAnswerId === answer._id}
                  disabled={checkResult !== null || isChecking}
                />

                <span className={css.answerText}>{answer.text}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className={css.actions}>
          <button
            className={css.button}
            onClick={handleChecked}
            disabled={
              selectedAnswerId === null || checkResult !== null || isChecking
            }
          >
            {isChecking ? 'Перевіряємо...' : 'Перевірити'}
          </button>

          {checkResult !== null && (
            <>
              <div
                className={
                  checkResult.isCorrect ? css.resultSuccess : css.resultError
                }
              >
                {checkResult.isCorrect
                  ? '✅ Правильна відповідь'
                  : '❌ Неправильна відповідь'}
              </div>

              <div className={css.explanation}>{checkResult.explanation}</div>

              <button className={css.button} onClick={handleNextQuestion}>
                {currentQuestionIndex === questions.length - 1
                  ? 'Завершити тест'
                  : 'Далі'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
