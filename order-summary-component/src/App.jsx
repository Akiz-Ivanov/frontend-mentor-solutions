import illustration from './assets/images/illustration-hero.svg'
import iconMusic from './assets/images/icon-music.svg'

function App() {


  return (
    <main>
      <section className="card
     flex flex-col items-center justify-center 
     bg-very-pale-blue rounded-3xl m-5 shadow-2xl text-desaturated-blue
     max-w-md
     ">
        <img src={illustration} alt="Person enjoying music illustration"
          className="w-full rounded-t-3xl"
        />

        <h1 className="font-900 text-[clamp(1.5rem,3vw,1.8rem)] text-dark-blue leading-none mt-9 mb-3 md:mt-12">
          Order Summary
        </h1>

        <div className="flex flex-col items-center justify-center gap-5 text-center px-6 pb-9 md:p-12 md:gap-7 md:pt-0">

          <p className="font-500 leading-relaxed text-[clamp(1rem,2.5vw,1.1rem)] p-2">
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>

          <div className="flex items-center justify-between w-full p-4 md:p-5 bg-[#f4fcfc] rounded-2xl">

            <div className="flex items-center gap-5">
              <img src={iconMusic} alt="" />
              <div>
                <span className="font-900 text-dark-blue">
                  Annual Plan
                </span>
                <p>$59.99/year</p>
              </div>
            </div>

            <a href="#"
              className="text-bright-blue font-900 underline hover:opacity-80 hover:no-underline"
            >
              Change
            </a>
          </div>

          <button type="button" className="w-full p-4  rounded-2xl bg-bright-blue
          text-very-pale-blue font-900 cursor-pointer hover:opacity-80
          ">
            Proceed to Payment
          </button>

          <a href="#"
            className="text-desaturated-blue font-900 hover:text-dark-blue"
          >
            Cancel Order
          </a>

        </div>
      </section>
    </main>
  )
}

export default App
