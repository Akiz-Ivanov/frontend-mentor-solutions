import { useForm } from 'react-hook-form'

export default function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = () => {
        reset();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 xs:flex-row xs:items-start px-4 m-9"
            noValidate
        >
            <div className="flex flex-col gap-0.5 flex-2/3">
                <input type="email" placeholder="Your email address"
                    {...register("email", {
                        required: "Whoops! It looks like you forgot to add your email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please provide a valid email address"
                        },
                    })}
                    className={`w-full rounded-full py-input-btn-y px-8 
                            placeholder:text-pale-blue outline-none ring-2 ring-pale-blue text-base
                            focus:ring-blue transition-colors duration-300 
                            ${errors.email ? "focus:ring-light-red" : ""}`}
                />
                <p className={`italic text-light-red text-[.8rem] text-middle xs:text-left px-8 my-2 leading-relaxed font-normal
                    ${errors.email ? "block" : ""}`}
                >
                    {errors.email?.message}
                </p>
            </div>
            <button 
                type="submit" 
                className="
                    w-full bg-blue text-white rounded-full py-input-btn-y hover:bg-blue/80 sm:w-auto text-base font-semibold transition-colors duration-300 cursor-pointer shadow-xl shadow-pale-blue flex-1/3 ring-2 ring-blue hover:ring-blue/80"
            >
                Notify Me
            </button>
        </form>
    )
}