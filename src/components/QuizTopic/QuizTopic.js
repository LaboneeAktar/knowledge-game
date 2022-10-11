import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const QuizTopic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  // console.log(topic);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/home/${id}`);
  };

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
            <button
              onClick={handleNavigate}
              className="btn btn-accent hover:btn-error w-56 font-normal text-[17px] align-items-center"
            >
              <p>Start Quiz</p>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="font-normal text-lg px-2 py-3"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;
