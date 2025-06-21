import starIcon from '../assets/images/icon-star.svg'

export default function Rating({ rating, reviewer, className = "" }) {

    const renderStars = new Array(rating).fill(0).map((_, index) => {
        return (
            <img key={index} src={starIcon} alt="star" />
        )
    })

    return (
        <div className={`flex flex-col justify-center items-center gap-2
        bg-neutral-light-magenta p-3 rounded-md w-full
        md:flex-row md:justify-start md:p-4 md:pl-8 md:gap-10
        md:max-w-[28rem] ${className}`}
        >
            <div className="flex justify-center items-center gap-2 flex-shrink-0">
                {renderStars}
            </div>
            <p className='text-primary-magenta font-bold text-base'>Rated {rating} Stars in {reviewer}</p>
        </div>
    )
}