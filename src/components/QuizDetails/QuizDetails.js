import React from "react";

const QuizDetails = ({ quiz, index }) => {
  //   console.log(quiz);

  const { id, question, options, correctAnswer } = quiz;

  const handleChange = (e) => {
    console.log(e);
    if (e === correctAnswer) {
      alert("right");
    } else {
      alert("wrong");
    }
  };

  return (
    <div className="bg-cyan-100 shadow-lg p-10 lg:mx-40 border rounded-lg">
      <h2 className="text-xl pb-4 text-start">
        <span className="font-semibold">Question - {index + 1} : </span>
        {question.replace(/(<([^>]+)>)/gi, "")}
      </h2>
      <h5>
        {options.map((option, idx) => (
          <button
            onClick={(e) => handleChange(option)}
            className="flex ml-16 p-3"
            key={idx}
          >
            <input
              type="checkbox"
              name="option"
              value="answer"
              className="checkbox checkbox-primary"
            />
            {/* <label htmlFor="option">{option}</label> */}
            <p className="pl-5">{option}</p>
          </button>
        ))}
      </h5>
    </div>
  );
};

export default QuizDetails;
