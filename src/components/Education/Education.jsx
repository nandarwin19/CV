const Education = ({ edata }) => {
  const { school, degree, start, end, hidden } = edata;
  return (
    <>
      {!hidden ? (
        <div className="mb-4">
          <div className="ml-0 md:ml-16 mt-4 text-black/80">
            <div className="flex">
              <div
                className="font-bold flex-shrink-0"
                style={{ width: "150px" }} //*******
              >
                {start && end && (
                  <p className="font-bold">
                    {start}-{end}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className="font-bold text-lg"
                  style={{ whiteSpace: "normal", overflow: "hidden" }}
                >
                  {school}
                </p>
                <p>{degree}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Education;
