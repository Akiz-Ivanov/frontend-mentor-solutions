const Result = ({ averageScore }) => {
  let title, message;

  if (averageScore >= 85) {
    title = 'Excellent';
    message = "You're among the top scorers. Amazing work!";
  } else if (averageScore >= 65) {
    title = 'Great';
    message = 'You scored higher than 65% of the people who have taken these tests.';
  } else if (averageScore >= 35) {
    title = 'Okay';
    message = "You did alright, but there's room for improvement.";
  } else {
    title = 'Poor';
    message = "Don't worry, keep practicing and you'll get better.";
  }

  return (
    <section
      aria-labelledby="result-heading"
      className="result-card result-bg-gradient flex w-full flex-col items-center justify-center gap-7 rounded-b-3xl px-8 pt-4 pb-7 text-white sm:rounded-3xl sm:px-12 sm:pt-10 sm:pb-12"
    >
      <h1 id="result-heading" className="opacity-70 sm:text-xl">
        Your Result
      </h1>
      <div className="bg-light-royal-blue-soft flex h-32 w-32 flex-col items-center justify-center rounded-full text-center sm:h-44 sm:w-44">
        <p className="flex flex-col gap-1">
          <strong className="font-800 text-5xl sm:text-6xl">
            {averageScore}
          </strong>
          <small className="opacity-50">of 100</small>
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2 text-center">
        <h2 className="font-700 text-lg sm:text-2xl">{title}</h2>
        <p className="font-500 text-base opacity-60">{message}</p>
      </div>
    </section>
  );
};

export default Result;
