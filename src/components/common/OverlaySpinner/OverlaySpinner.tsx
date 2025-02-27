import { useIsMutating } from "@tanstack/react-query";
import "./OverlaySpenner.css"; 


export function LoadingOverlay() {
    const isMutating =useIsMutating() 

    if (!isMutating) return null; 

    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
        </div>
    );
}
