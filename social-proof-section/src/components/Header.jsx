export default function Header() {
    return (
        <header className="flex flex-col gap-6 text-center
        md:text-left lg:pr-14">
            
            <h1 className="sr-only">
                Social proof
            </h1>

            <h2 className="px-8 md:px-0">10,000+ of our users love our products</h2>   
            <p className="font-medium md:pl-0 text-subheader">
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
            </p>

        </header>
    )
}