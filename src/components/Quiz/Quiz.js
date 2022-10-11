import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const loaderData = useLoaderData();
  const quizTopic = loaderData.data;
  const quizs = loaderData.data.questions;

  return (
    <div>
      <h1 className="text-3xl text-cyan-600 mt-14">Quiz of {quizTopic.name}</h1>
      <div className="grid grid-cols-1 gap-10 mt-10">
        {quizs.map((quiz, index) => (
          <QuizDetails key={quiz.id} quiz={quiz} index={index}></QuizDetails>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
