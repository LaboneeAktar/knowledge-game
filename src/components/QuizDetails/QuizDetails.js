import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const QuizDetails = ({ quiz, index }) => {
  //   console.log(quiz);

  const { id, question, options, correctAnswer } = quiz;

  const handleChange = (selectedOption) => {
    if (selectedOption === correctAnswer) {
      toast.success("Great !! Your Answer is Correct", { autoClose: 2000 });
    } else {
      toast.error("Opps!! Your Answer is Worng", { autoClose: 2000 });
    }
  };

  const handleAnswer = () => {
    toast.info(correctAnswer);
    <FontAwesomeIcon className="lg:pt-2" icon={faEye}></FontAwesomeIcon>;
  };

  return (
    <div className="bg-cyan-100 shadow-lg p-10 lg:mx-40 mx-4 border rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-xl pb-4 text-start">
          <span className="font-semibold">Question - {index + 1} : </span>
          {question.replace(/(<([^>]+)>)/gi, "")}
        </h2>
        <button onClick={handleAnswer}>
          <FontAwesomeIcon
            className="lg:pt-2"
            icon={faEye}
            title="Show Answer"
          ></FontAwesomeIcon>
        </button>
      </div>
      <h5>
        {options.map((option, idx) => (
          <button
            onClick={(e) => handleChange(option)}
            className="flex lg:ml-16 p-3"
            key={idx}
          >
            <input
              type="radio"
              name={id}
              value={option}
              id={option}
              className="radio radio-primary"
            />
            <label className="pl-5 text-[17px]" htmlFor={option}>
              {option}
            </label>
          </button>
        ))}
      </h5>
    </div>
  );
};

export default QuizDetails;
