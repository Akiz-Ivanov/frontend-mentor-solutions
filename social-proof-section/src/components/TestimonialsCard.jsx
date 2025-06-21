export default function TestimonialsCard({ name, children, img, className = "" }) {
    return (
        <article
            className={`bg-primary-magenta px-8 py-8 rounded-md text-neutral-light-magenta
          flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)] w-full text-paragraph h-full
          md:pt-[clamp(2rem,2.5vw,2.5rem)] ${className} md:pb-2`}
        >
            
            <header className="flex items-center gap-6">
                <img src={img} alt={name} className="w-10 h-10 rounded-full" />
                <div>
                    <h3 className="font-bold leading-none">{name}</h3>
                    <span className="text-primary-pink font-medium">Verified Buyer</span>
                </div>
            </header>
            <blockquote>
                <p className="text-[1rem] font-medium">&ldquo; {children} &rdquo;</p>
            </blockquote>

        </article>
    )
  }