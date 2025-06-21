import { useRef } from "react";
import ShareIcons from "../ShareIcons";
import usePopoverDismiss from "./hooks/usePopoverDismiss";
import usePopoverLayout from "./hooks/usePopoverLayout";

type Size = {
    width: number;
    height: number;
}

type SharePopoverProps = {
    isPopoverOpen: boolean
    variant: 'mobile' | 'desktop'
    buttonRef: React.RefObject<HTMLButtonElement | null>
    onClose: () => void
    size?: Size | undefined
};

export default function SharePopover({ isPopoverOpen, variant, buttonRef, onClose, size }: SharePopoverProps) {

    const popoverRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
    const arrowRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    // Handles popover positioning
    usePopoverLayout({ 
        variant, 
        isPopoverOpen, 
        popoverRef, 
        buttonRef, 
        arrowRef, 
        size 
    });

    // Handles outside click & Escape key behavior
    usePopoverDismiss({
        isPopoverOpen,
        triggerRef: buttonRef,
        contentRef: popoverRef,
        onClose,
    });


    // Styles
    const isMobile: boolean = variant === 'mobile';
    const baseClasses: string = `absolute md:fixed transform transition-opacity duration-200 ${isPopoverOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`;
    const mobileClasses: string = `top-0 right-0 size-full bg-very-dark-grayish-blue flex items-center justify-start gap-2 rounded-b-xl md:hidden`;
    const desktopClasses: string = `hidden md:flex w-auto rounded-lg bg-very-dark-grayish-blue text-white shadow-lg p-4 min-w-max ease-in-out`;

    return (
        <div
            ref={popoverRef}
            role="region"
            aria-labelledby={`label-${variant}`}
            aria-hidden={!isPopoverOpen}
            className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
        >
            {/* Decorative arrow for desktop popover */}
            {variant === 'desktop' && (
                <div
                    ref={arrowRef}
                    className= "absolute w-4 h-4 bg-very-dark-grayish-blue pointer-events-none z-50"
                />
            )}

            {/* Content: label + share icons */}
            <div className={`flex items-center gap-3.5 px-8`}>

                <span
                    id={`label-${variant}`}
                    className={`uppercase ${isMobile ? 'tracking-[6px] text-grayish-blue' : 'text-sm tracking-[0.3em] text-grayish-blue self-end'}`}
                >
                    Share
                </span>

                <ShareIcons isPopoverOpen={isPopoverOpen} />
            </div>
        </div>
    );
};