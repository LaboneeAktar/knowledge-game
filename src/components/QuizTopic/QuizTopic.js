import React from "react";

const QuizTopic = ({ topic }) => {
  const { logo, name, total } = topic;
  console.log(topic);
  return (
    <div>
      <div className="card w-11/12 shadow-xl mx-auto bg-emerald-100">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Shoes" className="rounded-xl w-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <h5>Total Question: {total}</h5>
          <div className="card-actions mt-4">
            <button className="btn btn-accent hover:btn-error w-60 font-normal text-[17px]">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;
