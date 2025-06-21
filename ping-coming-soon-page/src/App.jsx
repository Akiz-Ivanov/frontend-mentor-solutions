import logo from './assets/images/logo.svg'
import illustration from './assets/images/illustration-dashboard.png'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className="px-6 pt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-2xl">

          <div className='flex flex-col items-center w-full'>

            <img src={logo} alt="logo" />
            <h1 className="text-title text-gray mt-10">We are launching
              <strong className="text-very-dark-blue font-bold"> soon!</strong>
            </h1>
            <p className="mt-4 text-base">Subscribe and get notified</p>

            <Form />

            <img src={illustration} alt="illustration"
              className='w-full m-10 sm:m-0'
            />

          </div>

        </div>
      </main>

      <Footer />

    </>
  )
}

export default App
