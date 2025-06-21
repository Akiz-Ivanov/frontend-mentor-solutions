import AccordionPanel from "./components/AccordionPanel"
import starIcon from "/src/assets/images/icon-star.svg"

function App() {

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="min-h-screen min-w-screen flex flex-col justify-center items-center  bg-purple-100 
      bg-contain bg-top bg-no-repeat
      bg-[url('/src/assets/images/background-pattern-mobile.svg')]
      md:bg-[url('/src/assets/images/background-pattern-desktop.svg')] 
      ">

        <section className="flex flex-col justify-baseline items-start gap-9 w-11/12 sm:w-8/12 bg-white
        rounded-lg sm:rounded-xl lg:rounded-2xl
        px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1.5rem,3vw,2rem)]
        md:max-w-2xl shadow-xl" aria-labelledby="faq-heading">

          <div className="flex flex-row justify-baseline gap-7">
            <img src={starIcon} className="w-7 sm:w-8 lg:w-10" alt="" />
            <h1 id="faq-heading" className="text-4xl font-bold text-purple-950 text-center text-clamped-h1">
              FAQs
            </h1>
          </div>

          <AccordionPanel
            title="What is Frontend Mentor, and how will it help me?"
            text="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
          />

          <AccordionPanel
            title="Is Frontend Mentor free?"
            text="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
          />

          <AccordionPanel
            title="Can I use Frontend Mentor projects in my portfolio??"
            text="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          />

          <AccordionPanel
            title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            text="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          />

        </section>
      </div>
    </main>
  )
}

export default App