const Summary = ({ data }) => {
  // --color-orangey-yellow-soft: hsla(var(--orangey-yello05-hsl), 0.05);
  //   --color-green-teal-soft: hsla(var(--green-teal-hsl), 0.05);
  //   --color-cobalt-blue-soft: hsla(var(--cobalt-blue-hsl), 0.05);

  const colors = {
    Reaction: 'bg-light-red-soft text-light-red',
    Memory: 'bg-orangey-yellow-soft text-orangey-yellow',
    Verbal: 'bg-green-teal-soft text-green-teal',
    Visual: 'bg-cobalt-blue-soft text-cobalt-blue',
  };

  const renderList = data.map((item) => {
    const colorClass = colors[item.category];

    return (
      <li
        key={item.category}
        className={`flex items-center justify-between rounded-md p-3 ${colorClass} rounded-xl`}
      >
        <div className="flex items-center gap-4">
          <img src={item.icon} alt="" />
          <h3>{item.category}</h3>
        </div>
        <p className="text-dark-gray-blue">{item.score} / 100</p>
      </li>
    );
  });

  return (
    <section
      aria-labelledby="summary-heading"
      className="font-700 flex flex-col gap-5 bg-white p-6 sm:gap-8 sm:rounded-tr-3xl sm:rounded-br-3xl sm:p-10 sm:py-8"
    >
      <h2 id="summary-heading" className="text-dark-gray-blue sm:text-xl">
        Summary
      </h2>
      <ul className="flex flex-col gap-4">{renderList}</ul>
      <button className="bg-dark-gray-blue from-light-slate-blue-bg to-light-royal-blue-bg focus:ring-light-slate-blue-bg w-full cursor-pointer rounded-full py-3 text-white hover:bg-gradient-to-b focus:ring-4 focus:outline-none">
        Continue
      </button>
    </section>
  );
};

export default Summary;
