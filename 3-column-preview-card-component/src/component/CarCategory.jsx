import LearnMoreBtn from "./LearnMoreBtn"

export default function CarCategory({ title, children, icon, color }) {
    return (
        <article aria-label={title} className={`flex flex-col  bg-${color}
        p-[3rem] justify-between
        `}>
            <div className="flex flex-col gap-6">
                <img src={icon} alt={`${title} icon`}
                    className="w-12 h-8
                xl:w-16 xl:h-9"
                />
                <h2 className="text-3xl mt-6 mb-4 leading-none xl:text-4xl text-[clamp(1.875rem,2.5vw,2.25rem)]"
                >
                    {title}
                </h2>
                <p className="text-transparent-white leading-relaxed
                ">
                    {children}
                </p>
            </div>
            <LearnMoreBtn textColor={color} />
        </article>
    )
}