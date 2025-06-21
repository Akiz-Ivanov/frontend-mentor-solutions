import { useEffect } from "react"

type Params = {
    isPopoverOpen: boolean;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLElement | null>;
    onClose: () => void;
  };

const usePopoverDismiss = ({ isPopoverOpen, triggerRef, contentRef, onClose }: Params) => {
    
    useEffect(() => { 

        const triggerEl: HTMLElement | null = triggerRef.current;
        const contentEl: HTMLElement | null = contentRef.current;

        if (!isPopoverOpen || !triggerEl || !contentEl) return;

        function onDocumentClick(event: MouseEvent): void {
            if (!isPopoverOpen || !triggerEl || !contentEl) return;
            if (!triggerEl.contains(event.target as Node) && !contentEl.contains(event.target as Node)) {
                onClose()
            }
        }

        function onKeyDown(e: KeyboardEvent): void {
            if (e.key === 'Escape') {
                onClose?.();
            }
          }
    
        document.addEventListener("mousedown", onDocumentClick);
        document.addEventListener("keydown", onKeyDown);
    
        return () => {
            document.removeEventListener("mousedown", onDocumentClick);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isPopoverOpen, onClose, triggerRef, contentRef])
}

export default usePopoverDismiss