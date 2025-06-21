import { useEffect } from "react";
import updatePopoverPosition from "../utils/updatePopoverPosition";

type Size = {
    width: number;
    height: number;
}

type Params = {
    variant: 'mobile' | 'desktop';
    isPopoverOpen: boolean;
    popoverRef: React.RefObject<HTMLDivElement | null>;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    arrowRef: React.RefObject<HTMLDivElement | null>;
    size?: Size;
}

const usePopoverLayout = ({ variant, isPopoverOpen, popoverRef, buttonRef, arrowRef, size }: Params) => {

    useEffect(() => {

        if (!popoverRef?.current || !buttonRef?.current || size === undefined) return;

        updatePopoverPosition({variant, popoverRef, buttonRef, arrowRef, size});

        const observer: ResizeObserver = new ResizeObserver(() => {
            updatePopoverPosition({variant, popoverRef, buttonRef, arrowRef, size}); // Recalculate when popover or button resizes
        })

        observer.observe(popoverRef.current);
        observer.observe(buttonRef.current);

        return () => {
            if (popoverRef.current) observer.unobserve(popoverRef.current);
            if (buttonRef.current) observer.unobserve(buttonRef.current);
            observer.disconnect();
        };

    }, [size, isPopoverOpen]);

    return { updatePopoverPosition }
}

export default usePopoverLayout