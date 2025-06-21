import heroDesktop from '../src/assets/images/hero-desktop.jpg'
import heroMobile from '../src/assets/images/hero-mobile.jpg'
import logo from '../src/assets/images/logo.svg'
import Form from './components/Form'
import desktopPattern from '../src/assets/images/bg-pattern-desktop.svg'

function App() {

  return (
    <main className="min-h-screen">
      <div className="wrapper
        flex flex-col items-center justify-center
        md:flex-row min-h-screen w-screen"
      >
        <div className={`flex flex-col flex-grow
          md:min-h-screen md:max-w-[60%] md:pl-16-136 md:pr-16-224
          md:bg-${desktopPattern} md:bg-cover md:bg-no-repeat
          bg-[linear-gradient(135deg,_hsl(0,0%,100%),_hsl(0,100%,98%))] desktop:pl-136-224 `}
        >

          <header className="min-w-full flex items-center pl-8 min-h-[5.25rem] md:my-16 md:px-0">
            <img src={logo} alt="logo"
              className="h-7 md:h-10"
            />
          </header>

          <img src={heroMobile} alt="hero"
            className="w-full object-cover md:hidden"
          />

          <section className="flex flex-col text-center items-center justify-center 
            px-8-10 py-16 md:text-left md:items-start md:my-[4rem]
            md:p-0 md:max-w-xl"
          >

            <h1>
              <span className="text-desaturated-red font-light">We're</span> coming soon
            </h1>

            <p className="text-paragraph font-normal text-desaturated-red mt-24-40 leading-relaxed tracking-wide">
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </p>

            <Form />

          </section>
        </div>

        <div className="hidden md:block ">
          <img src={heroDesktop} alt="hero"
            className="w-full object-cover h-screen"
          />
        </div>

      </div>
    </main>
  )
}

export default App
