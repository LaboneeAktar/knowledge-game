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
      {quizs.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quiz;
