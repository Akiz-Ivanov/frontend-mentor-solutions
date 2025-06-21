import data from './data.json';
import Result from './components/Result';
import Summary from './components/Summary';

function App() {

  const averageScore = Math.round(
    data.reduce((acc, { score }) => acc + score, 0) / data.length
  );

  return (
    <main className="flex items-center justify-center">
      <div className="wrapper grid  sm:rounded-3xl bg-white sm:max-w-2xl sm:grid-cols-2 sm:shadow-xl">
        <Result averageScore={averageScore} />
        <Summary data={data} />
      </div>
    </main>
  );
}

export default App;
