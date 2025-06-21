import { forwardRef } from "react";

type Props = {
    isPopoverOpen: boolean
    togglePopover: () => void
  };

// `forwardRef` is used to expose the button's DOM node to the parent,
// allowing positioning and event logic to be handled in SharePopover via buttonRef.
const ShareButton = forwardRef<HTMLButtonElement, Props>(
    ({ isPopoverOpen, togglePopover }, ref) => {

    return (
        <button
            ref={ref}
            type='button'
            aria-expanded={isPopoverOpen}
            onClick={togglePopover}
            title='Share'
            className={`p-2.5 rounded-full inline-flex justify-center items-center 
                text-[#6E8098] cursor-pointer z-999 relative
                transition-colors duration-200 ease-in-out
                hover:shadow-lg hover:shadow-grayish-blue/40
                ${isPopoverOpen ?
                    'bg-desaturated-dark-blue text-light-grayish-blue hover:bg-grayish-blue focus-visible:outline-2 focus-visible:outline-grayish-blue focus-visible:outline-offset-2' :
                    'bg-light-grayish-blue hover:bg-desaturated-dark-blue hover:text-light-grayish-blue focus-visible:bg-desaturated-dark-blue focus-visible:text-light-grayish-blue focus-visible:outline-2 focus-visible:outline-desaturated-dark-blue focus-visible:outline-offset-2'}`
            }>

            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>

        </button>
    )
});


export default ShareButton;