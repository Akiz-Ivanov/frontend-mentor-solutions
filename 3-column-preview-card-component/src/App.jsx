import CarCategory from "./component/CarCategory"
import sedanIcon from "./assets/images/icon-sedans.svg"
import suvIcon from "./assets/images/icon-suvs.svg"
import luxuryIcon from "./assets/images/icon-luxury.svg"

function App() {

  return (
    <main className="px-5">
      <h1 className="sr-only">Car Types Preview</h1>
      <section aria-label="Vehicle Categories" className="card-wrapper
        max-w-[57.5rem]
      ">
        <div className="card
        grid grid-cols-1 md:grid-cols-3
         text-white rounded-lg overflow-hidden
        ">
        <CarCategory title="Sedans" icon={sedanIcon} color="bright-orange">
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
          or on your next road trip.
        </CarCategory>

        <CarCategory title="SUVs" icon={suvIcon} color="dark-cyan">
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
          and off-road adventures.
        </CarCategory>

        <CarCategory title="Luxury" icon={luxuryIcon} color="very-dark-cyan">
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
          rental and arrive in style.
        </CarCategory>
        </div>
      </section>
    </main>
  )
}

export default App