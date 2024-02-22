import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ResultPage = ({ outcome, result, setDisplayResult }) => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    setDisplayResult(false);
  };

  const handleQuit = () => {
    navigate("/thanks");
  };

  return (
    <div
      className={`lost-bg fixed  inset-0 w-full h-screen ${
        result ? "flex" : "hidden"
      } game-font items-center flex-col justify-center text-red-700`}
    >
      <p className="text-[40px] tablet:text-[120px] ">YOU {outcome}</p> <br />
      <p className="text-xl">Would you like to play again?</p>
      <div className="w-full gap-5 max-w-[230px] my-5 flex items-center justify-between">
        <button
          className="border border-red-700 w-32 bg-black h-10 "
          onClick={handlePlayAgain}
        >
          YES
        </button>
        <button
          className="border border-red-700 w-32 bg-black h-10 "
          onClick={handleQuit}
        >
          NO
        </button>
      </div>
    </div>
  );
};

ResultPage.propTypes = {
  outcome: PropTypes.string,
  result: PropTypes.bool,
  setDisplayResult: PropTypes.bool,
};

export default ResultPage;
