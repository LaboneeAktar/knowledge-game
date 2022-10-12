import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";

export const QuizTopicContext = createContext({});

const Main = () => {
  const quizTopic = useLoaderData();

  return (
    <div>
      <QuizTopicContext.Provider value={quizTopic}>
        <Header></Header>
        <Outlet></Outlet>
      </QuizTopicContext.Provider>
    </div>
  );
};

export default Main;
