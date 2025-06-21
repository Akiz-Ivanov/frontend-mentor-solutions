import Header from "./components/Header"
import Rating from "./components/Rating"
import TestimonialsCard from "./components/TestimonialsCard"
import colton from './assets/images/image-colton.jpg'
import irene from './assets/images/image-irene.jpg'
import anne from './assets/images/image-anne.jpg'

function App() {

  return (
    <main className="md:px-4 py-16 px-16-104">
      <section className="container
      grid grid-cols-1 md:grid-cols-2
      max-w-[71.25rem] text-body place-items-center
      gap-40-72"
      >
      
      {/* Header section */}
        <Header />

      {/* Ratings section with stars */}
        <aside className="flex flex-col gap-4 w-full items-start md:gap-6">
          <Rating rating={5} reviewer="Reviews" />
          <Rating rating={5} reviewer="Report Guru" className="lg:ml-8-40" />
          <Rating rating={5} reviewer="BestTech" className="lg:ml-16-80"/>
        </aside>

      {/* Testimonials section */}
        <div className="md:col-span-2 grid md:grid-cols-3 gap-6" >
          
          <TestimonialsCard name="Colton Smith" img={colton} >
            We needed the same printed design as the one we had ordered a week prior.
            Not only did they find the original order, but we also received it in time.
            Excellent!
          </TestimonialsCard>
          <TestimonialsCard name="Irene Roberts" img={irene} className="md:mt-4">
            Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery.
          </TestimonialsCard>
          <TestimonialsCard name="Anne Wallace" img={anne} className="md:mt-8">
            Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!
          </TestimonialsCard>

        </div>

      </section>
    </main>
  )
}

export default App