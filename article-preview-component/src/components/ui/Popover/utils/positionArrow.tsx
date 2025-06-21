
const positionArrow = ( arrow: HTMLDivElement, arrowSide: 'top' | 'bottom' | 'left' | 'right', x: number, y: number) => {

    const arrowStyles = {
        top: (arrow: HTMLDivElement, x: number, _y: number) => {
            arrow.style.top = '';
            arrow.style.bottom = '0px';
            arrow.style.left = `${x}px`;
            arrow.style.transform = 'translateY(50%) rotate(45deg)';
        },
        bottom: (arrow: HTMLDivElement, x: number, _y: number) => {
            arrow.style.top = '0px';
            arrow.style.bottom = '';
            arrow.style.left = `${x}px`;
            arrow.style.transform = 'translateY(-50%) rotate(45deg)';
        },
        left: (arrow: HTMLDivElement, _x: number, y: number) => {
            arrow.style.left = '';
            arrow.style.right = '0px';
            arrow.style.top = `${y}px`;
            arrow.style.transform = 'translateX(50%) rotate(135deg)';
        },
        right: (arrow: HTMLDivElement, _x: number, y: number) => {
            arrow.style.left = '0px';
            arrow.style.right = '';
            arrow.style.top = `${y}px`;
            arrow.style.transform = 'translateX(-50%) rotate(135deg)';
        },
    };
    
    return arrowStyles[arrowSide](arrow, x, y);
}


export default positionArrow