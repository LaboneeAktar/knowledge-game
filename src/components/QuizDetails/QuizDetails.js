import React from "react";

const QuizDetails = ({ quiz }) => {
  console.log(quiz);

  const { id, question, options, correctAnswer } = quiz;
  return (
    <div>
      <h2 className="text-xl">
        <span className="font-semibold">Question : </span>
        {question.replace(/(<([^>]+)>)/gi, "")}
      </h2>
    </div>
  );
};

export default QuizDetails;
