import { useForm } from "react-hook-form";
import arrowIcon from "/src/assets/images/icon-arrow.svg"
import errorIcon from "/src/assets/images/icon-error.svg"

export default function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = () => {
        reset()
      }

    return (
        <>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-4 items-center justify-between relative
                    w-full outline-1 outline-desaturated-red rounded-4xl mt-10 max-w-md"
                noValidate
            >
                <input 
                    type="email" 
                    placeholder="Email Address"
                    {...register("email", { 
                        required: "Email is required",
                        pattern: { 
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please provide a valid email" 
                        },
                    })} 
                    className={`h-btn-height placeholder-desaturated-red w-full rounded-4xl
                        ${errors.email ? "ring-soft-red" : "ring-desaturated-red"}
                        focus:ring-2 focus:ring-inset outline-none text-paragraph
                        pl-[clamp(1.5rem,1.5vw,2rem)] pr-input-right`}
                />

                <img
                    src={errorIcon}
                    alt="error icon"
                    className={`absolute top-1/2 -translate-y-1/2 right-error-icon w-6 h-6 
                        ${errors.email ? "block" : "hidden"}`}
                />

                <button 
                    type="submit" 
                    className={`w-btn-width h-btn-height rounded-full flex items-center justify-center 
                        absolute right-0 bg-[linear-gradient(135deg,_hsl(0,80%,86%),_hsl(0,74%,74%))] cursor-pointer
                        hover:shadow-[0_8px_20px_rgba(246,117,117,0.4)] hover:scale-105 hover:brightness-120 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                        transition-all duration-300 ease-in-out z-10 ${errors.email ? "focus-visible:ring-soft-red" : "focus-visible:ring-desaturated-red"}`}
                >
                    <img src={arrowIcon} alt="arrow" className="w-4 h-6" />
                </button>
            </form>
            
            <span className={`text-soft-red self-start pl-[clamp(1.5rem,1.5vw,2rem)] py-2 text-paragraph
                ${errors.email ? "block" : "hidden"}`}
                aria-hidden={errors.email ? "false" : "true"}
                aria-live="polite"
                >
                {errors.email?.message}
            </span>
        </>
    )
}