import { useState, useEffect } from "react";

type Size = {
    width: number;
    height: number;
}

export function useWindowSize(onClose: () => void ,debounceDelay: number = 200): Size {
    const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        
        let interval: number | undefined;

        const handleResize = (): void => {
            clearInterval(interval);
            onClose();
            interval = window.setTimeout(() => setSize({ width: window.innerWidth, height: window.innerHeight }), debounceDelay);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };

    }, [debounceDelay]);

    return size;
}