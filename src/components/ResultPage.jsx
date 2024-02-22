const ResultPage = ({ outcome, result }) => {
  return (
    <div
      className={`bg-[] absolute inset-0 w-full h-screen ${
        result ? "flex" : "hidden"
      } game-over-font items-center justify-center`}
    >
      <p>YOU {outcome}</p> <br />
      <p>Would you like to play again?</p>
    </div>
  );
};

export default ResultPage;
