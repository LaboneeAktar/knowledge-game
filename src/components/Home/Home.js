import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";
import TopOfHome from "../TopOfHome/TopOfHome";

const Home = () => {
  const loaderData = useLoaderData();
  const quizTopics = loaderData.data;

  return (
    <div>
      <div>
        <TopOfHome></TopOfHome>
      </div>
      <div className="lg:mx-16 lg:my-5">
        <h1 className="text-3xl p-8 text-rose-600">Quiz Topics</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:my-10">
          {quizTopics.map((topic) => (
            <QuizTopic key={topic.id} topic={topic}></QuizTopic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
