import positionArrow  from "./positionArrow";

type Size = {
    width: number;
    height: number;
}

type Params = {
    variant: 'mobile' | 'desktop';
    popoverRef: React.RefObject<HTMLDivElement | null>;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    arrowRef: React.RefObject<HTMLDivElement | null>;
    size: Size;
}

export default function updatePopoverPosition({ variant, popoverRef, buttonRef, arrowRef, size }: Params) {
    if (variant !== "desktop" || !popoverRef?.current || !buttonRef?.current || !arrowRef?.current || !size) return;

    const popoverRect: DOMRect = popoverRef.current.getBoundingClientRect();
    const buttonRect: DOMRect = buttonRef.current.getBoundingClientRect();


    const buttonCenterX: number = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY: number = buttonRect.top + buttonRect.height / 2;

    const popoverHalfX: number = popoverRect.width / 2;
    const popoverHalfY: number = popoverRect.height / 2;
    const SPACING: number = 30;

    const overflowCenterRight: boolean = buttonCenterX + popoverHalfX > size.width;
    const overflowCenterLeft: boolean = buttonCenterX - popoverHalfX < 0;
    const overflowCenter: boolean = overflowCenterRight || overflowCenterLeft;

    const canFitAbove = buttonRect.top > popoverRect.height + SPACING;

    let arrowSide: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
    let leftPosition: number;
    let topPosition: number;

    // If there's enough horizontal room to center the popover
    if (!overflowCenter) {
        leftPosition = buttonCenterX - popoverHalfX;

        // Try above first fallback to below
        if (canFitAbove) {
            topPosition = buttonRect.top - popoverRect.height - SPACING;
            arrowSide = 'top';
        } else {
            topPosition = buttonRect.bottom + SPACING;
            arrowSide = 'bottom';
        }
    }
    // Not enough room to center: position to the left or right of the button
    else if (overflowCenterRight) {
        leftPosition = buttonRect.left - popoverRect.width - SPACING;
        topPosition = buttonCenterY - popoverHalfY;
        arrowSide = 'left';
    } else if (overflowCenterLeft) {
        leftPosition = buttonRect.right + SPACING;
        topPosition = buttonCenterY - popoverHalfY;
        arrowSide = 'right';
    } else {
        topPosition = Math.max(0, Math.min(size.height - popoverRect.height, buttonCenterY - popoverHalfY));
        leftPosition = Math.max(0, Math.min(size.width - popoverRect.width, buttonCenterX - popoverHalfX));
    }

    popoverRef.current.style.left = `${leftPosition}px`;
    popoverRef.current.style.top = `${topPosition}px`;

    // Calculate arrow position
    const arrowHalfW: number = arrowRef.current.offsetWidth / 2;
    const arrowHalfH: number = arrowRef.current.offsetHeight / 2;

    const arrowOffsetX: number = buttonCenterX - popoverRect.left - arrowHalfW;
    const arrowOffsetY: number = buttonCenterY - popoverRect.top - arrowHalfH;

    positionArrow(arrowRef.current, arrowSide, arrowOffsetX, arrowOffsetY);
}