import { useIsFetching } from "@tanstack/react-query";
import "./OverlaySpenner.css"; 


export function LoadingOverlay() {
    const isFetching = useIsFetching() 

    if (!isFetching) return null; 

    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
        </div>
    );
}
