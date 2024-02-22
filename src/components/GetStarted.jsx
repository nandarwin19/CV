import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/game`);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <img
        src="/getStarted.gif"
        className="w-full fixed inset-0 h-screen -z-20"
        alt=""
      />
      <h1 className="game-font text-xl tablet:text-[40px]">Memory Card Game</h1>
      <p className="my-4 text-red-600 uppercase text-[15px] tablet:text-xl">
        Warming: Don't click on the same card twice!
      </p>
      <button
        onClick={handleClick}
        className="flex gap-2 text-sm tablet:text-xl items-center justify-center my-2 p-2 border bg-[#0e0d0d] border-gray-400"
      >
        Get Started
        {loading ? <FaSpinner className="animate-spin mr-2" /> : ""}
      </button>
    </div>
  );
};

export default GetStarted;
